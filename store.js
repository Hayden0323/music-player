import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const COVER_URL = [
  require('./src/assets/cover.jpg'),
  require('./src/assets/cover2.jpg'),
  require('./src/assets/cover3.jpg'),
]

export default new Vuex.Store({
  state: {
    isPlaying: false,
    coverUrl: '',
  },
  getters: {},
  mutations: {
    togglePlay(state, toggle) {
      state.isPlaying = toggle !== undefined ? toggle : !state.isPlaying
    },
    changeCover(state) {
      while (1) {
        const index = Math.floor(Math.random() * 3)
        const coverUrl = COVER_URL[index]
        if (coverUrl !== state.coverUrl) {
          state.coverUrl = coverUrl
          break
        }
      }
    },
  },
  actions: {},
})
