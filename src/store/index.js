import { createStore } from 'vuex'

export default createStore({
  state: {
    start: false,
    timelineLogo: false,
    header: false,
    sectionPresentation: false,
  },

  mutations: {
    startOn: function(state, data) {
      state.start = data;
    },
    timelineLogoOn: function(state, data) {
      state.timelineLogo = data;
    },
    headerOn: function(state, data) {
      state.header = data;
    },
  },

  actions: {
  },

  modules: {
  }
})
