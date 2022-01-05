import { createStore } from 'vuex'

export default createStore({
  state: {
    carouselIndex: 0,
    buttonBack: false,
    cursorHover: {
      state: false,
      type: ''
    },
  },

  mutations: {
    activeIndex: function(state, data) {
      state.carouselIndex = data;
    },
    cursorHoverState: function(state, data) {
      state.cursorHover = data;
    },
    buttonBackState: function(state, data) {
      state.buttonBack = data
    },
  },

  actions: {
  },

  modules: {
  }
})
