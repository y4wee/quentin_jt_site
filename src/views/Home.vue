<template>
  <div class="home">
    <div class="homeWords">
      <div class="homeWords1">Développeur</div>
      <div class="homeWords2">Web</div>
      <div class="homeWords3">Full-stack</div>
      <div class="homeWords4">Junior</div>
    </div>
    <div class="homeNav">
      <Carrousel />
    </div>
  </div>
</template>

<script>
import Carrousel from "../components/home/carrousel.vue";

export default {
    name: "Home",
    components: { 
      Carrousel, 
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
$testColorBeige: rgb(236, 233, 225);
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
    justify-content: flex-start;
    height: 300%;
    width: 40%;
    min-width: 350px;
    background: #F2B66D;
    transform-origin: center;
    // transform: rotateZ(45deg) translate(40%, -10%);
    // transform: rotateZ(45deg) translate(85%, -30%);
    // transform: translate(50%, -15%);
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    border: solid 5px $testColorBeige;
  }
}

</style>