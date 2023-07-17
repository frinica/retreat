import fireplace from "~/assets/audio/audio-fireplace.mp3"
import forestriver from "~/assets/audio/audio-forestriver.mp3"
import nightambience from "~/assets/audio/audio-nightambience.mp3"
import ocean from "~/assets/audio/audio-ocean.mp3"
import softrain from "~/assets/audio/audio-softrain.mp3"
import thunderstorm from "~/assets/audio/audio-thunderstorm.mp3"
import tropical from "~/assets/audio/audio-tropical.mp3"
import underwater from "~/assets/audio/audio-underwater.mp3"

export const useAudioTracks = () => {
  return [
    { type: "fire", id: "fireplace", src: fireplace },
    { type: "forest", id: "forestriver", src: forestriver },
    { type: "night", id: "nightambience", src: nightambience },
    { type: "ocean", id: "ocean", src: ocean },
    { type: "rain", id: "softrain", src: softrain },
    { type: "thunder", id: "thunderstorm", src: thunderstorm },
    { type: "tropical", id: "tropical", src: tropical },
    { type: "underwater", id: "underwater", src: underwater },
  ]
}
