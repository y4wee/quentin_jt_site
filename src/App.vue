<template>
  <!-- composant cursor -->
  <!-- <Cursor /> -->

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
// import { mapState } from 'vuex';
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Cursor from './components/app/cursor.vue';
import SocialLink from './components/footer/social-link.vue';


export default {
  name: 'App',
  components: {
    // Cursor,
    SocialLink
},
  data() {
    return {
      title1: "Quentin-jt",
      title2: "LF Job",
    }
  },
  mounted: function() {
    // gsap.registerPlugin(ScrollTrigger);
    document.title = this.title1;
    // fonction changement de title toutes les 5s
    setInterval(this.changeTitle, 5000);
  },
  methods: {
    changeTitle: function() {
      console.log('interval')
      if(document.title === this.title1) {
        console.log("title2")
        document.title = this.title2;
      } else {
        console.log("title1")
        document.title = this.title1;
      }
    },
  },
  // computed: {
  //     ...mapState({
  //         headerHover: 'headerHover',
  //         header: 'header'
  //     }),
  // },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Righteous&family=Ultra&display=swap');

// variables sass
$mainColor: rgb(28, 32, 32); // 1c2020
$secondColor: rgb(233, 222, 190); // e9debe
$thirdColor: rgb(227, 223, 223); // e3dfdf
$greenColor: rgb(86, 245 , 105); // 56f569
$purpleColor: rgb(245, 86, 226); // f556e2
$orangeColor: rgb(242, 116, 5); // f27405
$testColorGray: rgb(61, 61, 61);
$mainFont: 'Ultra';
$secondFont: 'Righteous';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: inherit;
}
body {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  padding: 0;
  background: $mainColor;
  background-image: url('./assets/images/noisebackground.png');
  background-repeat: repeat;
  background-position: 0 0;
  animation: noiseTranslation 1s linear infinite;
  -webkit-animation: noiseTranslation 1s linear infinite;
  overflow: hidden;
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
  z-index: 20;
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
//animation background noise effect
@-webkit-keyframes noiseTranslation {
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
