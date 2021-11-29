<template>
  <!-- composant cursor -->
  <Cursor />
  <!-- composant boutton start -->
  <Start />

  <header 
    @mouseenter="this.$store.state.header ? $store.commit('headerHoverState', true) : null" 
    @mouseleave="this.$store.state.header ? $store.commit('headerHoverState', false) : null" 
  >
    <!-- composant logo Yawee.dev -->
    <Logo />
  </header>

  <div class="main" v-if="$store.state.header" >
    <SectionPresentation />

    <SectionCompetence />
  </div>


</template>

<script>
import { mapState } from 'vuex';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Logo from './components/header/logo.vue';
import Start from './components/app/button-start';
import Cursor from './components/app/cursor.vue';
import SectionPresentation from './components/main/section-presentation.vue';
import SectionCompetence from './components/main/section-competence.vue';

export default {
  name: 'App',
  components: {
    Start,
    Logo,
    Cursor,
    SectionPresentation,
    SectionCompetence
  },
  mounted: function() {
    gsap.registerPlugin(ScrollTrigger);

    // gsap.utils.toArray(".sectionPin").forEach(section => {
    //   ScrollTrigger.create({
    //     trigger: section,
    //     pin: true,
    //     pinSpacing: false,
    //     start: "top top",
    //   })
    // })
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
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+2:wght@100;200;300;400;500;600;700;800;900&family=Yuji+Boku&display=swap');
@font-face {
  font-family: 'Luthon Southard';
  src:  url("./assets/font/Luthon-Southard-Serif.ttf") format("ttf"),
        url("./assets/font/Luthon-Southard-Serif.otf") format("otf"),
        url("./assets/font/Luthon-Southard-Script.otf") format("otf"),
        url("./assets/font/Luthon-Southard-Script.ttf") format("ttf");
}
// variables sass
$mainColor: darken($color: rgb(96, 96 , 96), $amount: 20%);
$mainColorDiff: rgb(210, 210, 210);
$greenColor: rgb(86, 245 , 105);
$purpleColor: #f556e2;
$greyColor1: rgb(163, 169 , 164);
$greyColor2: rgb(216, 216 , 216);

#app {
  font-family: 'M PLUS 2', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 100vh;
  background-color: white;
  // max-width: 100vw;
  // overflow: hidden;
  // cursor: none;
  // transform: scale(0.8);
}
body {
  width: 100vw;
  // max-width: 100vw;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
header {
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 100%;
  transform: translateY(-110%);
  box-shadow: 0 0 5px 0 $greyColor2;
  background-color: white;
  z-index: 5;
}
.main {
  display: flex;
  flex-direction: column;
  background-color: white;
  height: auto;
  // overflow-x: hidden;
}

</style>
