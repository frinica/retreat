<script lang="ts" setup>
import { ref } from "vue"
import fireplace from "~/assets/audio/audio-fireplace.mp3"
import forestriver from "~/assets/audio/audio-forestriver.mp3"
import nightambience from "~/assets/audio/audio-nightambience.mp3"
import ocean from "~/assets/audio/audio-ocean.mp3"
import softrain from "~/assets/audio/audio-softrain.mp3"
import thunderstorm from "~/assets/audio/audio-thunderstorm.mp3"
import tropical from "~/assets/audio/audio-tropical.mp3"
import underwater from "~/assets/audio/audio-underwater.mp3"

const audioTracks = {
  1: { type: "fire", id: "fireplace", src: fireplace },
  2: { type: "forest", id: "forestriver", src: forestriver },
  3: { type: "night", id: "nightambience", src: nightambience },
  4: { type: "ocean", id: "ocean", src: ocean },
  5: { type: "rain", id: "softrain", src: softrain },
  6: { type: "thuder", id: "thunderstorm", src: thunderstorm },
  7: { type: "tropical", id: "tropical", src: tropical },
  8: { type: "underwater", id: "underwater", src: underwater },
}

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

const addFavourite = () => {
  console.log("I like this sound")
}
</script>

<template>
  <div v-for="track in audioTracks">
    <button @click="playSound(track.src)">Play sound!</button>
    <button @click="pauseSound">Pause sound!</button>
    <button @click="addFavourite">Add to favs</button>
  </div>
</template>
