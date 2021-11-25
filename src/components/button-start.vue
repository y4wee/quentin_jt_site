<template>

    <div class="Start">
        <div class="StartButton link" @click.once="turnStartOn()">
            Click
        </div>
        <div class="StartWarp">
            <CssWarp class="StartWarpText"/>
        </div>
        <div class="StartEffect"></div>
    </div>

</template>

<script>
import { gsap } from "gsap";
import { mapState } from 'vuex';
import CssWarp from './csswarp-start.vue'

export default {
    name: 'Start',
    components: {
        CssWarp,
    },
    mounted: function() {
        // animation pulse anneau vert
        gsap.fromTo('.StartEffect',
            {opacity: "1", transform: "scale(0.5)", borderWidth: "2px"},
            {opacity: "0", transform: "scale(3)", borderWidth: "1px",ease: "power2.out", duration: 0.8, repeat: -1, repeatDelay: 0.8});
        // animation bouton click pulse
        gsap.fromTo('.StartButton',
            {transform: "scale(1.2)"},
            {transform: "scale(1)", ease: "power4.in.out", duration: 0.2, repeat: -1, repeatDelay: 1.4})
    },
    methods: {
        turnStartOn: function() {
            gsap.to('.Start', {transform: "scale(0)", ease: "back.in", duration: 0.5, repeat: 0, onComplete: function() {
                gsap.killTweensOf(".StartEffect");
                gsap.killTweensOf(".StartButton");
                gsap.to('.Start', {display: "none"})
            }})
            this.$store.commit('startOn', true)
            this.$store.commit('timelineLogoOn', true)
        },
    },
    computed: {
        ...mapState({
            start: 'start'
        }),
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$mainColor: darken($color: rgb(96, 96 , 96), $amount: 20%);
$greenColor: rgb(86, 245 , 105);
$purpleColor: #f556e2;
$greyColor: rgb(216, 216 , 216);
    .Start {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        width: 304px;
        height: 304px;
        border-radius: 50%;
        top: calc(50vh - 152px);
        left: calc(50vw - 152px);
        z-index: 10;
        user-select: none;
        overflow: hidden;
        &Button {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            width: 80px;
            height: 80px;
            font-size: 1.3em;
            color: darken($color: rgb(96, 96 , 96), $amount: 20%);
            border: solid 1px darken($color: rgb(96, 96 , 96), $amount: 20%);
            border-radius: 50%;
            cursor: pointer;
            background-color: white;
            z-index: 10;
        }
        &Warp {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            border: solid 2px darken($color: rgb(96, 96 , 96), $amount: 20%);
            border-radius: 50%;
            background-color: white;
            transform-origin: center;
            &Text {
                transform-origin: center;
                animation: rotate360 10s infinite linear
            }
            &::after {
                position: absolute;
                content: '';
                width: 240px;
                height: 240px;
                border-radius: 50%;
                background: radial-gradient(circle, rgba(216,216,216,1) 0%, rgba(252,251,251,1) 100%);

                //background-color: rgb(163, 169 , 164);
                //border: solid 2px darken($color: rgb(96, 96 , 96), $amount: 20%);
            }
        }
        &Effect {
            position: absolute;
            width: 80px;
            height: 80px;
            border: solid 2px rgb(86, 245 , 105);
            border-radius: 50%;
            transform-origin: center;
        }
    }
    @keyframes rotate360 {
        from {
            transform: rotateZ(0deg);
        }
        to {
            transform: rotateZ(360deg);
        }
    }
</style>