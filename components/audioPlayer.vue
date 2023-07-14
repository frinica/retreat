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

const audioPlaying = ref(false)
const audio: any = ref(null)
const currentTrack: any = ref(null)

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
  if (audioPlaying.value) {
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
  <div v-for="track in audioTracks" class="mb-5 border border-green">
    <button v-if="currentTrack !== track.id" @click="playSound(track)">
      Play sound!
    </button>
    <button v-if="currentTrack === track.id" @click="pauseSound">
      Pause sound!
    </button>
    <button @click="addFavourite(track)">Add to favs</button>
  </div>
</template>
