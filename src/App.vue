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

  <SectionPresentation />

</template>

<script>
import { mapState } from 'vuex';

import Logo from './components/logo'
import Start from './components/button-start'
import Cursor from './components/cursor.vue';
import SectionPresentation from './components/section-presentation.vue';

export default {
  name: 'App',
  components: {
    Start,
    Logo,
    Cursor,
    SectionPresentation
  },
  computed: {
      ...mapState({
          headerHover: 'headerHover',
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
  width: 100%;
  height: 100vh;
  background-color: white;
  overflow: hidden;
  cursor: none;
  // transform: scale(0.8);
}
body {
  width: 100vw;
  height: auto;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
header {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 100%;
  transform: translateY(-110%);
  box-shadow: 0 0 5px 0 $greyColor2;
  background-color: white;
  z-index: 5;
  &::after {
    content: "";
    position: absolute;
    bottom: 4px;
    left: -15%;
    width: 10%;
    border: solid 1px transparent;
    box-shadow: 0 8px 5px 0px $greenColor;
    z-index: 4;
  }
}

</style>
