import { createStore } from 'vuex'

export default createStore({
  state: {
    start: false,
    timelineLogo: false,
  },

  mutations: {
    startOn: function(state, data) {
      state.start = data;
      console.log(state.start)
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
