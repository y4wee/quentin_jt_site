import { createStore } from 'vuex'

export default createStore({
  state: {
    start: false,
    timelineLogo: false,
    header: false,
    headerHover: false,
    sectionAccueil: false,
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
    headerHoverState: function(state, data) {
      state.headerHover = data;
    },
    sectionAccueilOn: function(state, data) {
      state.sectionAccueil = data;
    },
  },

  actions: {
  },

  modules: {
  }
})
