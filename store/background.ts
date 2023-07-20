import { defineStore } from "pinia"

export const useBackgroundStore = defineStore("background", {
  state: () => {
    return {
      background: null as string | null,
    }
  },
  actions: {
    changeBackground(bgType: string | null) {
      this.background = bgType
    },
  },
  getters: {
    getBackground: (state) => state.background,
  },
})
