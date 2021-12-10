<template>
  <!-- composant cursor -->
  <Cursor />

    <!-- @mouseenter="this.$store.state.header ? $store.commit('headerHoverState', true) : null"  -->
    <!-- @mouseleave="this.$store.state.header ? $store.commit('headerHoverState', false) : null"  -->
  <header>
    <!-- composant logo Yawee.dev -->
    <div class="logo">
      <span class="logoFirstname">Quentin.</span>
      <span class="logoName">Jt</span>
    </div>
  </header>

  <router-view></router-view>

  <!-- <div class="main" v-if="$store.state.header" >
    <SectionAccueil />

    <SectionPresentation />

    <SectionCompetence />
  </div> -->


</template>

<script>
import { mapState } from 'vuex';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import Logo from './components/header/logo.vue';
// import Start from './components/app/button-start';
import Cursor from './components/app/cursor.vue';
// import SectionAccueil from './components/main/section-accueil.vue';
// import SectionPresentation from './components/main/section-presentation.vue';
// import SectionCompetence from './components/main/section-competence.vue';


export default {
  name: 'App',
  components: {
    Cursor,
},
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
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Alfa+Slab+One&family=Anton&family=Corinthia:wght@400;700&family=Limelight&family=Lobster&family=M+PLUS+2:wght@100;200;300;400;500;600;700;800;900&family=Noto+Serif+Display:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Righteous&family=Ultra&display=swap');

// variables sass
$mainColor: darken($color: rgb(96, 96 , 96), $amount: 20%);
$mainColorDiff: rgb(210, 210, 210);
$greenColor: rgb(86, 245 , 105);
$purpleColor: #f556e2;
$grayColor1: rgb(163, 169 , 164);
$grayColor2: rgb(216, 216 , 216);
$testColorBeige: rgb(236, 233, 225);
$testColorBlue: rgb(28, 32, 32);
$testColorGray: rgb(61, 61, 61);

#app {
  font-family: 'M PLUS 2';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
  width: 100vw;
  min-width: 360px;
  
  overflow: hidden;
}
body {
  width: 100vw;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  background: $testColorBlue;
  background-image: url('./assets/images/noisebackground.png');
  background-repeat: repeat;
  background-position: 0 0;
  animation: noiseTranslation 1s linear infinite;
}
header {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  // box-shadow: 0 0 5px 0 $grayColor2;
  // background-color: white;
  z-index: 5;
}
.logo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &Firstname {
    font-family: 'Ultra';
    font-size: 2rem;
    color: $testColorBeige;
  }
  &Name {
    position: relative;
    font-family: 'Corinthia';
    font-size: 3rem;
    color: $greenColor;
    transform: rotateZ(-20deg) translate(30%, -45%);
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
