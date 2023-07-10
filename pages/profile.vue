<script lang="ts" setup>
import { useAuthStore } from "../store/auth"

const store = useAuthStore()
const token = store.getToken
const audioTracks = useAudioTracks()

const audioPlaying = ref(false)
const audio: any = ref(null)

const listEntries = await useFetch(`/api/lists/${token?.id}`, {
  method: "get",
  headers: { "Content-Type": "application/json" },
})

const getAudioTrack = (savedTrack: any) => {
  return audioTracks.find((t: any) => t.id === savedTrack.sound_id)
}

const playSound = (track: any) => {
  if (!audioPlaying.value) {
    audio.value = new Audio(track.src)
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

const deleteFav = (track: any) => {
  console.log(`delete ${track._id}`)
}
</script>

<template>
  <h2 v-if="token?.name">Hello {{ token?.name }}!</h2>
  <h2 v-else>Hello!</h2>
  <div v-for="entry in listEntries.data.value">
    <button @click="playSound(getAudioTrack(entry))">Play!</button>
    <button @click="pauseSound">Pause!</button>
    <button @click="deleteFav(entry)">Remove from favs!</button>
  </div>
</template>
