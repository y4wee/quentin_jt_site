<template>

    <div class="Start">
        <div class="StartButton" @click.once="turnStartOn()" >
            Enter
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
    data() {
        return {
            hover: false,
        }
    },
    mounted: function() {
        gsap.fromTo('.StartEffect',
            {opacity:"1", transform: "scale(0.5)", borderWidth: "2px"},
            {opacity:"0", transform: "scale(3)", borderWidth: "1px",ease: "power2.out", duration: 0.8, repeat: -1, repeatDelay: 0.5});

        //gsap.fromto('.StartWarp',
            //{transform: "rotateZ(0deg)"}, 
            //{transform: "rotateZ(360deg)", duration: 5, repeat: -1});
    },
    methods: {
        turnStartOn: function() {

            var tl = gsap.timeline()

            tl.to('.StartWarp', {transform: "scale(1)", duration: 0.3, ease: "power2.out"})
            this.$store.commit('startOn', true)
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
    .Start {
        &Button {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            position: absolute;
            top: calc(50vh - 41px);
            left: calc(50vw - 41px);
            width: 80px;
            height: 80px;
            font-size: 1.2em;
            border: solid 2px darken($color: rgb(96, 96 , 96), $amount: 20%);
            border-radius: 50%;
            cursor: pointer;
            z-index: 10;
            background-color: white;
        }
        &Warp {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            top: calc(50vh - 150px);
            left: calc(50vw - 150px);
            border: solid 2px darken($color: rgb(96, 96 , 96), $amount: 20%);
            border-radius: 50%;
            background-color: white;
            z-index: 6;
            transform-origin: center;
            transform: scale(0);
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
                background-color: rgb(163, 169 , 164);
            }
        }
        &Effect {
            position: absolute;
            top: calc(50vh - 41px);
            left: calc(50vw - 41px);
            width: 80px;
            height: 80px;
            border: solid 2px rgb(86, 245 , 105);
            border-radius: 50%;
            transform-origin: center;
            z-index: 6;
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