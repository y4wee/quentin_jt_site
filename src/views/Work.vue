<template>

    <div class="work">
        <div class="workBack" >
            <ButtonBack 
            :name="name"
            :color="color" 
            />
        </div>
        <div class="workMain">
            <div class="inProgress"> Work <br/> in <br/> progress </div>
        </div>
    </div>

</template>

<script>
import { gsap } from "gsap";
import ButtonBack from "../components/app/button-back.vue";

export default {
    name: 'Work',
    components: {
    ButtonBack
    },
    data() {
        return {
            name: 'work',
            color: 'rgba(242, 116, 5, 1)'
        }
    },
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
$purpleColor: rgb(245, 86, 226);
$orangeColor: rgb(242, 116, 5);
$testColorGray: rgb(61, 61, 61);
.work {
    position: relative;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    &Main {
        display: flex;
        justify-content: center;
        width: 90%;
        height: 90%;
        max-width: 1400px;
        background-color: $secondColor;
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
    }
}
.inProgress {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 30%;
    transform-origin: center;
    transform: rotateZ(-20deg);
    font-family: 'Corinthia';
    font-size: 4rem;
    font-weight: bold;
    color: $orangeColor;
}
</style>