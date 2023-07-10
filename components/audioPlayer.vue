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

const playSound = (trackId: string) => {
  if (!audioPlaying.value) {
    audio.value = new Audio(trackId)
    audio.value.play()
    audioPlaying.value = true
  }
}

const pauseSound = () => {
  if (audioPlaying.value) {
    audio.value.pause()
    audioPlaying.value = false
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
  <div v-for="track in audioTracks">
    <button @click="playSound(track.src)">Play sound!</button>
    <button @click="pauseSound">Pause sound!</button>
    <button @click="addFavourite(track)">Add to favs</button>
  </div>
</template>
