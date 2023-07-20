<script lang="ts" setup>
import { useAuthStore } from "../store/auth"

interface Track {
  type: string
  id: string
  src: string
}

const emit = defineEmits(["trackType"])
const store = useAuthStore()
const token = store.getToken
const audioTracks = useAudioTracks()

const audioPlaying = ref<boolean>(false)
const audio = ref<HTMLAudioElement | null>(null)
const currentTrack = ref<string | null>(null)

// Fetch the tracks the user has marked as favourites
const usersFavedTracks = await useFetch(`/api/lists/${token?.id}`, {
  method: "get",
  headers: { "Content-Type": "application/json" },
})

const isFavouriteTrack = (track: Track) => {
  const favedTracks = usersFavedTracks.data.value
  if (Array.isArray(favedTracks)) {
    // Return true if the user has marked the track as favourite
    return favedTracks.some((val: any) => val.sound_id === track.id)
  } else {
    return false
  }
}

// Emit the type to change background
const emitTrackType = (type: string | null) => {
  emit("trackType", type)
}

const playSound = (track: Track) => {
  const { src, id, type } = track

  if (!audioPlaying.value) {
    audio.value = new Audio(src)
    audio.value.play()
    emitTrackType(type)
    audioPlaying.value = true
    currentTrack.value = id
  }
}

const pauseSound = () => {
  if (audioPlaying.value && audio.value) {
    audio.value.pause()
    emitTrackType(null)
    audioPlaying.value = false
    currentTrack.value = null
  }
}

const addFavourite = async (track: Track) => {
  const { type, id } = track
  if (token?.id) {
    const uid = token.id
    const res = await useFetch("/api/lists", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: { uid, sound_id: id, sound_type: type },
    })
    if (res.data) {
      location.reload()
    }
  } else {
    console.log("ERROR")
  }
}

const deleteFavourite = async (track: any) => {
  const uid = token?.id
  const sound_id = track.id
  const res = await useFetch("/api/lists", {
    method: "delete",
    headers: { "Content-Type": "application/json" },
    body: {
      uid,
      sound_id,
    },
  })
  if (res.data) {
    location.reload()
  }
}
</script>

<template>
  <div
    v-for="track in audioTracks"
    class="relative text-lg font-semibold h-fit w-full mb-6 shadow-lg"
  >
    <AudioPlayerBg :type="track.type" />
    <div class="absolute flex justify-between top-[38%] left-[10%] w-4/5">
      <button v-if="currentTrack !== track.id" @click="playSound(track)">
        <PlayButton />
      </button>

      <button v-if="currentTrack === track.id" @click="pauseSound">
        <PauseButton />
      </button>
      <h2 class="capitalize flex-1 px-4 self-center drop-shadow-lg">
        {{ track.id }}
      </h2>

      <button v-if="!isFavouriteTrack(track)" @click="addFavourite(track)">
        <HeartOutline />
      </button>

      <button v-if="isFavouriteTrack(track)" @click="deleteFavourite(track)">
        <HeartFilled />
      </button>
    </div>
  </div>
</template>
