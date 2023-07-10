<script lang="ts" setup>
import { useAuthStore } from "../store/auth"

interface FavTrack {
  _id: String
  uid: String
  sound_id: String
  sound_type: String
}

interface Track {
  type: string
  id: string
  src: string
}

const store = useAuthStore()
//const token = store.getToken
const token = store.$state.token
const audioTracks = useAudioTracks()
const audioPlaying = ref(false)
const audio: any = ref(null)

// Get the users saved audio tracks
const listEntries = await useFetch(`/api/lists/${token?.id}`, {
  method: "get",
  headers: { "Content-Type": "application/json" },
})

// Get audio tracks from composables
const getAudioTrack = (savedTrack: FavTrack) => {
  return audioTracks.find((t: Track) => t.id === savedTrack.sound_id)
}

const playSound = (track: Track) => {
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

const deleteFav = async (track: FavTrack) => {
  const { uid, sound_id } = track
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
  <h2 v-if="token?.name">Hello {{ token?.name }}!</h2>
  <h2 v-else>Hello!</h2>
  <div v-for="entry in listEntries.data.value">
    <button @click="playSound(getAudioTrack(entry))">Play!</button>
    <button @click="pauseSound">Pause!</button>
    <button @click="deleteFav(entry)">Remove from favs!</button>
  </div>
</template>
