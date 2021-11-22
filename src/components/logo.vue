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
import { mapState } from 'vuex';

export default {
  name: 'Logo',
  mounted: function() {
    window.addEventListener('click', this.logoAnimation)
  },
  methods: {
    // active l'animation logo si click sur bouton start
    logoAnimation: function() {
      if(!this.$store.state.timelineLogo && this.$store.state.start) {
        this.$store.commit('timelineLogoOn', true)

        var tl = gsap.timeline()

        tl.delay(0.55)

        // barre typ animation
        tl.to('.LogoLetterTyp', {height: "45px", top: "-27px", ease: "elastic", duration: 0.6})
        tl.to('.LogoLetterTyp', {width: "25px", ease: "back",  left: "10px", duration: 0.3, onComplete: function() {
          document.querySelector('.LogoLetterTyp').classList.add("active")
        }})
        
        // apparition des lettres 
        tl.to('.l1', {display: "block", ease: "none", duration: 0.4, delay: 0.7})
        tl.to('.l2', {display: "block", ease: "none", duration: 0.16})
        tl.to('.l3', {display: "block", ease: "none", duration: 0.16})
        tl.to('.l4', {display: "block", ease: "none", duration: 0.16})
        tl.to('.l5', {display: "block", ease: "none", duration: 0.16})
        tl.to('.l6', {display: "block", ease: "none", duration: 0.6})
        tl.to('.l7', {display: "block", ease: "none", duration: 0.16})
        tl.to('.l8', {display: "block", ease: "none", duration: 0.6})

        // disaprition barre typ
        tl.to('.LogoLetterTyp', {opacity: "0", ease: "power3",duration: 0.3, onComplete: function() {
          document.querySelector('.LogoLetterTyp').classList.remove("active")
        }})
      } else {
        return null;
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
        font-family: 'M PLUS 2', sans-serif;
        //font-family: "yuji boku", serif;
        font-size: 6em;
        color: darken($color: rgb(96, 96 , 96), $amount: 20%);
        display: none;
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
