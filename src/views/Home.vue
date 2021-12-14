<template>
  <div class="home">
    <div class="homeWords">
      <div class="homeWords1">Développeur</div>
      <div class="homeWords2">Web</div>
      <div class="homeWords3">Full-stack</div>
      <div class="homeWords4">Junior</div>
    </div>
    <div class="homeNav">
      <Carousel />
    </div>
  </div>
</template>

<script>
import Carousel from "../components/home/carousel.vue";

export default {
    name: "Home",
    components: { 
      Carousel, 
    },
}
</script>

<style scoped lang="scss">
$mainColor: darken($color: rgb(96, 96 , 96), $amount: 20%);
$mainColorDiff: rgb(210, 210, 210);
$greenColor: rgb(86, 245 , 105);
$purpleColor: #f556e2;
$grayColor1: rgb(163, 169 , 164);
$grayColor2: rgb(216, 216 , 216);
$testColorBeige: rgb(233, 222, 190);
$testColorBlue: rgb(28, 32, 32);
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
    font-size: 2.4rem;
    color: $testColorBeige;
    &1 {
      margin-top: 120px;
    }
    &2 {
      margin: 15px 0 15px 47px;
    }
    &3 {
      z-index: 2;
    }
    &4 {
      position: relative;
      font-family: 'Corinthia';
      font-size: 8rem;
      color: rgba(245, 86, 226, 0.2);
      transform: rotateZ(-20deg) translate(15%, -40%);
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
    background: $testColorBeige;
    transform-origin: bottom right;
    transform: rotateZ(45deg) translateY(53%);
    // border: solid 2px $testColorBeige;
    box-shadow: 5px 0 10px 0 rgba(0, 0, 0, 0.7), -5px 0 10px 0 rgba(0, 0, 0, 0.7);
  }
}

</style>