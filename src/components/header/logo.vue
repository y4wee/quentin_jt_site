<template>
  <div class="Logo">

    <div class="LogoWords word1">
      <span class="LogoWordsLetter l1">Y</span>
      <span class="LogoWordsLetter l2">a</span>
      <span class="LogoWordsLetter l3">w</span>
      <span class="LogoWordsLetter l4">e</span>
      <span class="LogoWordsLetter l5">e</span>
    </div>

    <div class="LogoWords word2">
      <span class="LogoWordsLetter l6">.</span>
      <span class="LogoWordsLetter l7">d</span>
      <span class="LogoWordsLetter l8">e</span>
      <span class="LogoWordsLetter l9">v</span>
    </div>

    <div class="LogoTyp"></div>

  </div>
</template>

<script>
import { gsap } from "gsap";
import { mapState } from 'vuex';

export default {
  name: 'Logo',
  mounted: function() {
    this.tlHover = gsap.timeline({
      paused: true,
    })
    .to('.word1', {width: "222.11px", ease: "expo.inOut", duration: 0.4}) 
    .to('.l5, .l4, .l3, .l2', {opacity: 1, ease: "slow", duration: 0.5},'-=0.2')
  },
  methods: {
    // active l'animation logo si click sur bouton start
    logoAnimationOn: function() {
        var tl = gsap.timeline()

        tl.delay(0.5)

        // barre typ animation
        tl.to('.LogoTyp', {height: "40px", backgroundColor: "black", ease: "elastic", duration: 0.55})
        tl.to('.LogoTyp', {width: "20px", ease: "back",  left: "10px", duration: 0.25, onComplete: function() {
          document.querySelector('.LogoTyp').classList.add("active")
        }})
        
        // apparition des lettres 
        tl.to('.l1', {display: "block", duration: 0.4, delay: 0.4})
        tl.to('.l2', {display: "block", duration: 0.15})
        tl.to('.l3', {display: "block", duration: 0.15})
        tl.to('.l4', {display: "block", duration: 0.15})
        tl.to('.l5', {display: "block", duration: 0.3})
        tl.to('.l6', {display: "block", duration: 0.3})
        tl.to('.l7', {display: "block", duration: 0.15})
        tl.to('.l8', {display: "block", duration: 0.15})
        tl.to('.l9', {display: "block", duration: 0.6})
        
        tl.to('.l5, .l4, .l3, .l2', {opacity: 0, ease: "sine.out", duration: 0.5})
        tl.to('.word1', {width: "57.78px", ease: "sine.inOut", duration: 0.30}, "-=0.2")
        tl.to('.l1', {color: "rgb(86, 245 , 105)", fontWeight: "bold", ease: "back.out", duration: 0.4}, "-=0.05")

        // disparition barre typ et logo
        tl.to('.LogoTyp', {opacity: "0", ease: "power3",duration: 0.2, onComplete: function() {
          document.querySelector('.LogoTyp').classList.remove("active");
          gsap.to('.LogoTyp', {display: "none"});
        }})
        tl.to('.Logo', {opacity: 0, ease: "power3",duration: 0.3, onComplete: this.turnHeaderOn})
        tl.to('.Logo', {opacity: 1, duration: 0.3}, "=+0.3")
    },
    turnHeaderOn: function() {
      this.$store.commit('headerOn', true);
      gsap.to('header', {transform: "translateY(0)", ease: "power3",duration: 0.3})
      gsap.to('.Logo', {top: "0",scale: 0.6, ease: "power3",duration: 0})
    },
    logoHover: function(value) {
      if(value === true) {
        this.tlHover.pause()
        this.tlHover.play()
      } 
      else if(value === false) {
        this.tlHover.pause()
        this.tlHover.reverse()
      } else {
        return false
      }
    }
  },
  watch: {
    timelineLogo(newValue) {
      if(newValue === true) {
        this.logoAnimationOn()
      }
    },
    headerHover(newValue) {
      this.logoHover(newValue);
    }
  },
  computed: {
      ...mapState({
          timelineLogo: 'timelineLogo',
          cursor: 'cursor',
          header: 'header',
          headerHover: 'headerHover'
      }),
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$mainColor: darken($color: rgb(96, 96 , 96), $amount: 20%);
$mainColorDiff: rgb(210, 210, 210);
$greenColor: rgb(86, 245 , 105);
$purpleColor: #f556e2;
$greyColor1: rgb(163, 169 , 164);
$greyColor2: rgb(216, 216 , 216);
  .Logo {
    position: relative;
    top: calc(50vh + 13px);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 140px;
    transform-origin: center;
    &Words {
      position: relative;
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
      user-select: none;
      height: 140px;
      transform-origin: left;
      &Letter {
        font-family: 'Luthon Southard', serif;
        font-size: 5em;
        display: none;
      }
      &.word1 {
        overflow: hidden;
        color: $mainColor;
      }
    }
    &Typ {
      position: relative;
      top: 35px;
      height: 100vh;
      width: 2px;
      border-radius: 3px;
      background-color: $mainColor;
      &.active {
        animation: cursorTyping 0.25s 0.1s infinite alternate-reverse linear;
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
