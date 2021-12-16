<template>

    <div class="about">
        <div class="aboutBack" >
            <ButtonBack 
            :name="name"
            :color="color" 
            />
        </div>
        <div class="aboutMain"></div>
    </div>

</template>

<script>
import { gsap } from "gsap";
import ButtonBack from "../components/app/button-back.vue";

export default {
    name: 'About',
    components: {
    ButtonBack
    },
    data() {
        return {
            name: 'about',
            color: 'rgba(86, 245 , 105, 1)',
        }
    },
    mounted: function() {
        this.arriveTransition()
    },
    methods: {
        arriveTransition: function() {
            let tl = gsap.timeline()

            tl.from('.about', {yPercent: 100, duration: 0.4, ease: 'power4.out'})
            tl.to('header', {xPercent: -50, duration: 0.5, ease: 'power4.out'}, '-=0.1')
            tl.to('.logo', {xPercent: 50, duration: 0.5, ease: 'power4.out'}, '-=0.5')
            tl.from('.aboutBack', {opacity: 0, duration: 0.5, ease: 'power1.in'}, '-=0.45')
        },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$mainColor: rgb(28, 32, 32);
$secondColor: rgb(233, 222, 190);
$greenColor: rgb(86, 245 , 105);
$purpleColor: rgb(245, 86, 226);
$orangeColor: rgb(242, 116, 5);
$testColorGray: rgb(61, 61, 61);
.about {
    position: relative;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    &Main {
        width: 90%;
        height: calc(100% - 75px);
        background-color: $secondColor;
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
    }
}
@media all and (min-width: 701px) and (max-width: 1024px) {
    .aboutMain {
        width: 75%;
    }
}
@media all and (min-width: 1025px) {
    .aboutMain {
        width: 60%;
    }
}
</style>
