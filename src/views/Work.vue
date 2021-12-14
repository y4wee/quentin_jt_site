<template>

    <div class="work">
        <div class="workBack" @click="backToHome()">X</div>
        <div class="workMain"></div>
    </div>

</template>

<script>
import { gsap } from "gsap";

export default {
    name: 'Work',
    mounted: function() {
        let tl = gsap.timeline()

        tl.from('.work', {yPercent: 100, duration: 0.4, ease: 'power4.out'})
        tl.to('header', {xPercent: -20, duration: 0.5, ease: 'power4.out'}, '-=0.1')
        tl.from('.workBack', {opacity: 0, duration: 0.5, ease: 'power1.in'}, '-=0.45')
    },
    methods: {
        backToHome: function() {
            let tl = gsap.timeline()

            tl.to('.workBack', {opacity: 0, duration: 0.5, ease: 'power1.out'})
            tl.to('header', {xPercent: 0, duration: 0.5, ease: 'power4.in'}, '-=0.45')   
            tl.to('.work', {yPercent: 100, duration: 0.4, ease: 'power4.in'}, '-=0.1')

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
$greenColor: rgb(86, 245 , 105);
$purpleColor: #f556e2;
$testColorGray: rgb(61, 61, 61);
    .work {
        position: relative;
        height: 100vh;
        width: 100vw;
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        &Back {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Ultra';
            color: $secondColor;
            height: 40px;
            width: 40px;
            border-radius: 50%;
            border: solid 2px $secondColor;
            top: 10px;
            right: 10%;
        }
        &Main {
            width: 90%;
            height: 90%;
            max-width: 1400px;
            background-color: $secondColor;
            border-top-left-radius: 30px;
            border-top-right-radius: 30px;
        }
    }
</style>