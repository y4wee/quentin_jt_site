import { createStore } from 'vuex'

export default createStore({
  state: {
    carouselIndex: 0,
    buttonBack: false,
  },

  mutations: {
    activeIndex: function(state, data) {
      state.carouselIndex = data;
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
