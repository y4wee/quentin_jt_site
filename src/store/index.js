import { createStore } from 'vuex'

export default createStore({
  state: {
    carouselIndex: 0,
    timelineLogo: false,
    header: false,
    headerHover: false,
    sectionAccueil: false,
  },

  mutations: {
    activeIndex: function(state, data) {
      state.carouselIndex = data;
      console.log(state.carouselIndex)
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
