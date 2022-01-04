<template>
  <!-- composant cursor -->
  <Cursor />

    <!-- @mouseenter="this.$store.state.header ? $store.commit('headerHoverState', true) : null"  -->
    <!-- @mouseleave="this.$store.state.header ? $store.commit('headerHoverState', false) : null"  -->
  <header>
    <!-- composant logo -->
    <div class="logo">
      <span class="logoFirstname">Quentin.</span>
      <span class="logoName">Jt</span>
    </div>
  </header>

  <router-view></router-view>

  <footer>
    <SocialLink />
  </footer>
</template>

<script>
import { mapState } from 'vuex';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Cursor from './components/app/cursor.vue';
import SocialLink from './components/footer/social-link.vue';


export default {
  name: 'App',
  components: {
    Cursor,
    SocialLink
},
  // data() {
  //   return {
  //     transitionFrom: 'fromHome'
  //   }
  // },
  mounted: function() {
    gsap.registerPlugin(ScrollTrigger);
  },
  computed: {
      ...mapState({
          headerHover: 'headerHover',
          header: 'header'
      }),
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Righteous&family=Ultra&display=swap');

// variables sass
$mainColor: rgb(28, 32, 32);
$secondColor: rgb(233, 222, 190);
$thirdColor: rgb(227, 223, 223);
$greenColor: rgb(86, 245 , 105);
$purpleColor: rgb(245, 86, 226);
$orangeColor: rgb(242, 116, 5);
$testColorGray: rgb(61, 61, 61);
$mainFont: 'Ultra';
$secondFont: 'Righteous';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}
body {
  width: 100vw;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  background: $mainColor;
  background-image: url('./assets/images/noisebackground.png');
  background-repeat: repeat;
  background-position: 0 0;
  animation: noiseTranslation 1s linear infinite;
}
header {
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  z-index: 20;
  pointer-events: none;
}
.logo {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &Firstname {
    font-family: $mainFont;
    font-size: 2rem;
    color: $thirdColor;
  }
  &Name {
    position: relative;
    font-family: $secondFont;
    font-size: 2rem;
    color: $greenColor;
    transform: translate(5%, -55%);
  }
}
footer {
  position: fixed;
  bottom: -14.5px;
  left: 0;
  display: flex;
  mix-blend-mode: difference;
}
@media all and (min-width: 701px) and (max-width: 1024px) {
  header {
    width: 75%;
  }
}
@media all and (min-width: 1025px) {
  header {
    width: 60%;
  }
}
//animation background effect 
@keyframes noiseTranslation {
  0% {
    background-position: 0 0;
  }
  10% {
      background-position: 20% -10%;
  }
  20% {
      background-position: -10% 20%;
  }
  30% {
      background-position: 20% -10%;
  }
  40% {
      background-position: -10% 20%;
  }
  50% {
      background-position: 20% -10%;
  }
  60% {
      background-position: -10% 20%;
  }
  70% {
      background-position: 20% -10%;
  }
  80% {
      background-position: -10% 20%;
  }
  90% {
      background-position: 20% -10%;
  }
  100% {
      background-position: 0 0;
  }
}
</style>
