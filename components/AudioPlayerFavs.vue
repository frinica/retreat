<script lang="ts" setup>
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

const props = defineProps({
  token: {
    default: { id: "", name: "", email: "", role: "user" },
  },
})

const audioTracks = useAudioTracks()
const audioPlaying = ref(false)
const audio: any = ref(null)
const currentTrack = ref<string | null>(null)

const listEntries = <FavTrack[]>await useFetch(
  `/api/lists/${props?.token?.id}`,
  {
    method: "get",
    headers: { "Content-Type": "application/json" },
  }
).then((response) => response.data)

// Get audio tracks from composables
const getAudioTrack = (savedTrack: FavTrack) => {
  return audioTracks.find((t: Track) => t.id === savedTrack.sound_id)
}

const playSound = (track: Track | undefined) => {
  if (!audioPlaying.value) {
    audio.value = new Audio(track?.src)
    audio.value.play()
    audioPlaying.value = true
    currentTrack.value = track?.id || "no track"
  }
}

const pauseSound = () => {
  if (audioPlaying.value) {
    audio.value.pause()
    audioPlaying.value = false
    currentTrack.value = null
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
  <div v-for="entry in listEntries" class="relative text-lg">
    <AudioPlayerBg :type="entry.sound_type" />
    <div
      class="absolute flex justify-between top-10 left-5 min-w-[272px] md:w-[56%] md:top-12 md:left-44"
    >
      <button
        v-if="currentTrack !== entry.sound_id"
        @click="playSound(getAudioTrack(entry))"
      >
        <PlayButton />
      </button>
      <button v-if="currentTrack === entry.sound_id" @click="pauseSound">
        <PauseButton />
      </button>
      <h2 class="capitalize flex-1 px-4 self-center drop-shadow-lg">
        {{ entry.sound_id }}
      </h2>
      <button @click="deleteFav(entry)">
        <HeartFilled />
      </button>
    </div>
  </div>
</template>
