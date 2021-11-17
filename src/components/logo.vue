<template>
  <div class="Logo">
    <div class="LogoLetter typewriter">

      <span class="LogoLetterEach l1">&lt;&nbsp;</span>
      <span class="LogoLetterEach l2">Y</span>
      <span class="LogoLetterEach l3">a</span>
      <span class="LogoLetterEach l4">w</span>
      <span class="LogoLetterEach l5">e</span>
      <span class="LogoLetterEach l6">e</span>
      <span class="LogoLetterEach l7">&nbsp; /</span>
      <span class="LogoLetterEach l8">></span>

      <div class="LogoLetterTyp"></div>

    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  name: 'Logo',
  mounted: function() {
    gsap.timeline()
      .pause()
      .to('.l1', {display: "block", ease: "none", duration: 1, delay: 0.8})
      .to('.l2', {display: "block", ease: "none", duration: 1}, "-=0.3")
      .to('.l3', {display: "block", ease: "none", duration: 1}, "-=0.8")
      .to('.l4', {display: "block", ease: "none", duration: 1}, "-=0.8")
      .to('.l5', {display: "block", ease: "none", duration: 1}, "-=0.7")
      .to('.l6', {display: "block", ease: "none", duration: 1}, "-=0.8")
      .to('.l7', {display: "block", ease: "none", duration: 1}, "-=0.2")
      .to('.l8', {display: "block", ease: "none", duration: 1}, "-=0.8")
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .Logo {
    position: relative;
    top: calc(50vh - 80px);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 140px;
    transform-origin: left;
    &Letter {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      user-select: none;
      height: 140px;
      &Each {
        font-family: "yuji boku", serif;
        font-size: 6em;
        color: darken($color: rgb(96, 96 , 96), $amount: 20%);
        display: none;
      }
      &Typ {
        margin-left: 10px;
        margin-bottom: 27px;
        height: 45px;
        width: 25px;
        border-radius: 3px;
        background-color: darken($color: rgb(96, 96 , 96), $amount: 20%);
        animation: cursorTyping 0.3s 0.1s infinite alternate linear;
      }
    }
  }

  @keyframes cursorTyping {
    0% {
      opacity: 0;
    }
    30% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
