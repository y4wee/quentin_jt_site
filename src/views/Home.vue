<template>
  <div class="home">

    <div class="homeWords">
      <!-- <HomeWord 
      v-for="(word, index) in words" :key="word"
      :className="'homeWords' + index"
      :text="word.text"
      :animation="word.animation"
      /> -->
      <div class="homeWords1">Développeur</div>
      <div class="homeWords2">Web</div>
      <div class="homeWords3">Full-stack</div>
      <div class="homeWordsBis">Junior</div>
    </div>

    <div class="homeNav">
      <Carousel />
    </div>

  </div>
</template>

<script>
import { gsap } from "gsap";
import Carousel from "../components/home/carousel-nav.vue";
// import HomeWord from "../components/home/home-word.vue";

export default {
    name: "Home",
    components: {
    Carousel,
    // HomeWord
},
data() {
  return {
    words: [
      {
        text: "Développeur",
        animation: false
      },
      {
        text: "Web",
        animation: false
      },
      {
        text: "Junior",
        animation: false
      },
    ]
  }
},
    mounted: function() {
      let tl = gsap.timeline();
        
      tl.from('.home', {yPercent: 100, duration: 0.5, ease: 'power4.out'})
      tl.from('.homeWords', {yPercent: 100, duration: 0.5, ease: 'power4.out'}, '-=0.4')
      tl.from('.homeWords', {scale: 0.75, duration: 0.3}, '-=0.15')

      this.initViewport();
      window.addEventListener('resize', () => {
            this.initViewport();
        })
    },
    methods: {
      // hover state when resize window
      initViewport: function() {
        let viewport = document.querySelector('.flickity-viewport')
        viewport.addEventListener('mouseenter', this.cursorHoverState)
        viewport.addEventListener('mouseleave', this.cursorHoverState)
      },
      // hover state on nav
      cursorHoverState: function(e) {
        if (e.type === 'mouseenter') {
          this.$store.commit('cursorHoverState', { state: true, type: 'Grab' });
        } else {
          this.$store.commit('cursorHoverState', { state: false, type: '' });
        }
      }
    }
}
</script>

<style scoped lang="scss">
$mainColor: rgb(28, 32, 32);
$secondColor: rgb(233, 222, 190); //e9debe
$thirdColor: rgb(227, 223, 223); //e3e9e9
$greenColor: rgb(86, 245 , 105); //56f569
$purpleColor: rgb(245, 86, 226); //f556e2
$orangeColor: rgb(242, 116, 5); //f27405
$testColorGray: rgb(61, 61, 61);

.home {
  position: relative;
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100vw;
  &Words {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: 'Ultra';
    margin: 0 0 0 5%;
    user-select: none;
    font-size: 10vw;
    color: $thirdColor;
    &1 {
      margin-top: 120px;
      z-index: 2;
    }
    &2 {
      margin: 15px 0 15px 47px;
      z-index: 2;
    }
    &3 {
      z-index: 2;
    }
    &Bis {
      position: relative;
      font-family: 'Righteous';
      font-size: 12vw;
      color: rgba(242, 116, 5, 0.7);
      transform:  translate(22%, -50%);
    }
  }
  &Nav {
    z-index: 5;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 15%;
    right: 0;
    height: 300vh;
    width: 35vw;
    min-width: 350px;
    background: $secondColor;
    transform-origin: bottom right;
    transform: rotateZ(45deg) translateY(53%);
    box-shadow: 5px 0 10px 0 rgba(0, 0, 0, 0.7), -5px 0 10px 0 rgba(0, 0, 0, 0.7);
    &Hover {
      position: absolute;
      z-index: 50;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      pointer-events: none;
    }
  }
}
@media all and (min-height: 701px) and (max-height: 800px) {
  .homeNav {
    min-width: 300px;
  }
}
@media all and (max-height: 700px) {
  .homeNav {
    min-width: 240px;
  }
  .homeWords {
    font-size: 2rem;
    margin: 0 0 0 8%;
    &4 {
      font-size: 2.4rem;
    }
  }
}
@media all and (min-width: 701px) and (max-width: 1024px) {
  
}
@media all and (min-width: 1025px) {
  .homeWords {
    font-size: 7.9vw;
    &4 {
      font-size: 9.4vw;
    }
  }
}
</style>