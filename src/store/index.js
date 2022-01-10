import { createStore } from 'vuex'

let stateDefault = {
    language: "Eng",
    carouselIndex: 0,
    buttonBack: false,
  };

  let state = JSON.parse(sessionStorage.getItem("state"));
  if(!state) {
    state = stateDefault;
  }

export default createStore({
  state: state,

  mutations: {
    languageSwitch: function(state, data) {
      state.language = data;
      sessionStorage.setItem("state", JSON.stringify(state))
    },
    activeIndex: function(state, data) {
      state.carouselIndex = data;
      sessionStorage.setItem("state", JSON.stringify(state))
    },
    buttonBackState: function(state, data) {
      state.buttonBack = data;
    },
  },

  actions: {
  },

  modules: {
  }
})
