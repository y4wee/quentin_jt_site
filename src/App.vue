<template>
  <!-- composant cursor -->
  <Cursor />
  <!-- composant boutton start -->
  <Start />

  <header>
    <!-- composant logo Yawee.dev -->
    <Logo />
  </header>

  <SectionPresentation />

</template>

<script>
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
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+2:wght@100;200;300;400;500;600;700;800;900&family=Yuji+Boku&display=swap');
// variables sass
$mainColor: darken($color: rgb(96, 96 , 96), $amount: 20%);

#app {
  font-family: 'M PLUS 2', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 100%;
  background-color: white;
  overflow: hidden;
  cursor: none;
}
body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
header {
  position: fixed;
  height: 140px;
  width: 100%;
  display: flex;
  transform: translateY(-100%);
  border-bottom: solid 1px $mainColor;
}

</style>
