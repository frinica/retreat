<script lang="ts" setup>
import { ref } from "vue"
import { useAuthStore } from "../store/auth"

interface Track {
  type: string
  id: string
  src: string
}

const store = useAuthStore()
const token = store.getToken
const audioTracks = useAudioTracks()

const audioPlaying = ref<boolean>(false)
const audio = ref<HTMLAudioElement | null>(null)
const currentTrack = ref<string | null>(null)

const playSound = (track: Track) => {
  const { src, id } = track
  if (!audioPlaying.value) {
    audio.value = new Audio(src)
    audio.value.play()
    audioPlaying.value = true
    currentTrack.value = id
  }
}

const pauseSound = () => {
  if (audioPlaying.value && audio.value) {
    audio.value.pause()
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
    return res.data
  } else {
    console.log("ERROR")
  }
}
</script>

<template>
  <div
    v-for="track in audioTracks"
    class="mb-5 bg-green-dark py-6 px-3 rounded-lg"
  >
    <div class="bg-green bg-opacity-50 flex justify-between p-2 rounded-lg">
      <button v-if="currentTrack !== track.id" @click="playSound(track)">
        <PlayButton />
      </button>
      <button v-if="currentTrack === track.id" @click="pauseSound">
        <PauseButton />
      </button>
      <h2 class="capitalize flex-1 px-4 self-center">{{ track.id }}</h2>
      <button @click="addFavourite(track)">
        <HeartOutline />
        <!-- <HeartFilled /> -->
      </button>
    </div>
  </div>
</template>
