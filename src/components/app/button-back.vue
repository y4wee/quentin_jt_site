<template>

    <div class="buttonBack" @click="backToHome()">
        <div class="buttonBackGear"></div>
        <div class="buttonBackText">
            <i class="fas fa-arrow-left" :style="{ color: color }"></i>
        </div>
    </div>

</template>

<script>
import { gsap } from "gsap";

export default {
    name: 'ButtonBack',
    props: ['name', 'color'],
    methods: {
        backToHome: function() {
            this.$store.commit('buttonBackState', true);
            let tl = gsap.timeline()

            tl.to(`.${this.name}Back`, {opacity: 0, duration: 0.5, ease: 'power1.out'})
            tl.to('.logo', {xPercent: 0, duration: 0.5, ease: 'power3.in'}, '-=0.45')
            tl.to('header', {xPercent: 0, duration: 0.5, ease: 'power3.in'}, '-=0.5')
            tl.to(`.${this.name}`, {yPercent: 100, duration: 0.4, ease: 'power4.in'}, '-=0.1')

            tl.then(() => {
                this.$router.push('/')
            })
        },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$mainColor: rgb(28, 32, 32);
$secondColor: rgb(233, 222, 190);
$gearColor: rgb(233, 222, 190);
$greenColor: rgb(86, 245 , 105);
$purpleColor: rgb(245, 86, 226);
$orangeColor: rgb(242, 116, 5);
$testColorGray: rgb(61, 61, 61);
.buttonBack {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 65px;
    width: 65px;
    top: 5px;
    right: 5%;
    cursor: pointer;
    &Gear {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        background: $gearColor;
        border-radius: 50%;
        -webkit-animation: gearRotate 2s infinite linear;
        animation: gearRotate 2s infinite linear;
        &::before {
            content:"";
            position: absolute;
            width: 65px;
            height: 65px;
            background: linear-gradient(0deg,transparent 39%,$gearColor 39%,$gearColor 61%, transparent 61%),
            linear-gradient(60deg,transparent 42%,$gearColor 42%,$gearColor 58%, transparent 58%),
            linear-gradient(120deg,transparent 42%,$gearColor 42%,$gearColor 58%, transparent 58%);
            border-radius: 50%;
        }
        &::after {
            content:"";
            position: absolute;
            width: 42px;
            height: 42px;
            background: $mainColor;
            border-radius: 50%;
        }
    }
    &Text {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Ultra';
        font-size: 2rem;
        user-select: none;
    }
}
@media all and (min-width: 701px) and (max-width: 1024px) {
    .buttonBack {
        right: 12.5%;
    }
}
@media all and (min-width: 1025px) {
    .buttonBack {
        right: 20%;
    }
}
@-webkit-keyframes gearRotate {
  from { 
    transform: rotateZ(0deg);
  }
  to { 
    transform: rotateZ(-360deg); 
  }
}
@keyframes gearRotate {
  from { 
    transform: rotateZ(0deg);
  }
  to { 
    transform: rotateZ(-360deg); 
  }
}
</style>