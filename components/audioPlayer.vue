<script lang="ts" setup>
import { ref } from "vue"
import { useAuthStore } from "../store/auth"
import fireplace from "~/assets/audio/audio-fireplace.mp3"
import forestriver from "~/assets/audio/audio-forestriver.mp3"
import nightambience from "~/assets/audio/audio-nightambience.mp3"
import ocean from "~/assets/audio/audio-ocean.mp3"
import softrain from "~/assets/audio/audio-softrain.mp3"
import thunderstorm from "~/assets/audio/audio-thunderstorm.mp3"
import tropical from "~/assets/audio/audio-tropical.mp3"
import underwater from "~/assets/audio/audio-underwater.mp3"

interface Track {
  type: string
  id: string
  src: string
}

const store = useAuthStore()
const token = store.getToken

const audioTracks: Track[] = [
  { type: "fire", id: "fireplace", src: fireplace },
  { type: "forest", id: "forestriver", src: forestriver },
  { type: "night", id: "nightambience", src: nightambience },
  { type: "ocean", id: "ocean", src: ocean },
  { type: "rain", id: "softrain", src: softrain },
  { type: "thuder", id: "thunderstorm", src: thunderstorm },
  { type: "tropical", id: "tropical", src: tropical },
  { type: "underwater", id: "underwater", src: underwater },
]

const audioPlaying = ref(false)
const audio: any = ref(null)

const playSound = (trackId: any) => {
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
