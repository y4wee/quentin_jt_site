<template>
  <div class="Logo">
    <div class="LogoLetter typewriter">

      <span class="LogoLetterEach l1">&lt;&nbsp;</span>
      <span class="LogoLetterEach l2">Y</span>
      <span class="LogoLetterEach l3">a</span>
      <span class="LogoLetterEach l4">w</span>
      <span class="LogoLetterEach l5">e</span>
      <span class="LogoLetterEach l6">e</span>
      <span class="LogoLetterEach l7">.</span>
      <span class="LogoLetterEach l8">d</span>
      <span class="LogoLetterEach l9">e</span>
      <span class="LogoLetterEach l10">v</span>
      <span class="LogoLetterEach l11">&nbsp; /</span>
      <span class="LogoLetterEach l12">></span>

      <div class="LogoLetterTyp"></div>

    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { mapState } from 'vuex';

export default {
  name: 'Logo',
  methods: {
    // active l'animation logo si click sur bouton start
    logoAnimation: function() {
        var tl = gsap.timeline()

        tl.delay(0.5)

        // barre typ animation
        tl.to('.LogoLetterTyp', {height: "40px", top: "-20px", ease: "elastic", duration: 0.55})
        tl.to('.LogoLetterTyp', {width: "20px", ease: "back",  left: "10px", duration: 0.25, onComplete: function() {
          document.querySelector('.LogoLetterTyp').classList.add("active")
        }})
        
        // apparition des lettres 
        tl.to('.l1', {display: "block", ease: "none", duration: 0.4, delay: 0.4})
        tl.to('.l2', {display: "block", ease: "none", duration: 0.15})
        tl.to('.l3', {display: "block", ease: "none", duration: 0.15})
        tl.to('.l4', {display: "block", ease: "none", duration: 0.15})
        tl.to('.l5', {display: "block", ease: "none", duration: 0.15})
        tl.to('.l6', {display: "block", ease: "none", duration: 0.2})
        tl.to('.l7', {display: "block", ease: "none", duration: 0.2})
        tl.to('.l8', {display: "block", ease: "none", duration: 0.15})
        tl.to('.l9', {display: "block", ease: "none", duration: 0.15})
        tl.to('.l10', {display: "block", ease: "none", duration: 0.4})
        tl.to('.l11', {display: "block", ease: "none", duration: 0.14})
        tl.to('.l12', {display: "block", ease: "none", duration: 0.6})

        // disparition barre typ et logo
        tl.to('.LogoLetterTyp', {opacity: "0", ease: "power3",duration: 0.2, onComplete: function() {
          document.querySelector('.LogoLetterTyp').classList.remove("active")
        }})
        tl.to('.Logo', {opacity: 0, ease: "power3",duration: 0.3, onComplete: this.turnHeaderOn})
        tl.to('.Logo', {opacity: 1, duration: 0.3}, "=+0.3")
    },
    turnHeaderOn: function() {
      this.$store.commit('headerOn', true);
      gsap.to('header', {height: "100px", transform: "translateY(0)", ease: "power3",duration: 0.3})
      gsap.to('.Logo', {top: "-30px",scale: 0.5, ease: "power3",duration: 0})
    }
  },
  watch: {
    timelineLogo(newValue) {
      if(newValue === true) {
        this.logoAnimation()
      }
    }
  },
  computed: {
      ...mapState({
          timelineLogo: 'timelineLogo',
          cursor: 'cursor'
      }),
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .Logo {
    position: relative;
    top: calc(50vh + 60px);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 140px;
    transform-origin: center;
    &Letter {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      user-select: none;
      height: 140px;
      &Each {
        font-family: 'M PLUS 2', sans-serif;
        //font-family: "yuji boku", serif;
        font-size: 5em;
        color: darken($color: rgb(96, 96 , 96), $amount: 20%);
        display: none;
        &.l2 {
          font-weight: bold;
          color: rgb(86, 245 , 105);
        }
        &.l6 {
          transform-origin: center;
          transform: rotateY(180deg);
        }
      }
      &Typ {
        position: relative;
        top: calc(50vh - 60px);
        height: 100vh;
        width: 2px;
        border-radius: 3px;
        background-color: darken($color: rgb(96, 96 , 96), $amount: 20%);
        &.active {
          animation: cursorTyping 0.25s 0.1s infinite alternate-reverse linear;
        }
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
