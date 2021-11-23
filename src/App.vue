<template>
  <Cursor />

  <header>
    <Start />
    <Logo />
  </header>

</template>

<script>
import Logo from './components/logo'
import Start from './components/button-start'
import Cursor from './components/cursor.vue';

export default {
  name: 'App',
  components: {
    Start,
    Logo,
    Cursor
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+2:wght@100;200;300;400;500;600;700;800;900&family=Yuji+Boku&display=swap');

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
  height: 15%;
  width: 100%;
}

</style>
