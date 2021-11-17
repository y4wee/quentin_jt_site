<template>
  
  <Cursor />

  <header>
    <Logo />
  </header>

  <div class="scrollCall"></div>
  <div class="main">

    <div class="blocAnim">
      <div class="ball">
        <div class="ballShown"></div>
        <router-view v-slot="{ Component }">
          <transition name="route" mode="out-in">
            <component :is="Component"></component>
          </transition>
        </router-view>
      </div>
    </div>

  </div>

</template>

<script>
import Logo from './components/logo'
import Cursor from './components/cursor'

export default {
  name: 'App',
  components: {
    Logo,
    Cursor
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Yuji+Boku&display=swap');
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+2:wght@100;200;300;400;500;600;700;800;900&family=Yuji+Boku&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 100%;
  background-color: white;
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
.blocAnim {
  display: none;
}
.scrollCall {
  display: none;
  position: absolute;
  height: 100vh;
  border: 1px solid darken($color: rgb(96, 96 , 96), $amount: 15%);
  top: 0;
  left: 50vw;
}

// Partie ball
.ball {
  z-index: 1;
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 50%;
  box-shadow: 0 0 5px 0 cyan;
}

</style>
