import { createStore } from 'vuex'

export default createStore({
  state: {
    start: false,
    cursor: false,
    timelineLogo: false,
  },

  mutations: {
    startOn: function(state, data) {
      state.start = data;
      console.log(state.start)
    },
    cursorOn: function(state, data) {
      state.cursor = data;
      console.log(state.cursor)
    },
    timelineLogoOn: function(state, data) {
      state.timelineLogo = data;
      console.log(state.timelineLogo)
    },
  },

  actions: {
  },

  modules: {
  }
})
