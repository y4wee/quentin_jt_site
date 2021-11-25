<template>

    <div class="Cursor">
        <div class="CursorPointer"></div>

        <div class="CursorBackground"></div>
    </div>

</template>

<script>
import { gsap } from "gsap";
import { mapState } from 'vuex';

export default {
    name: 'Cursor',
    data() {
        return {
            ok: true,
        }
    },
    mounted: function() {
        // event pour cursor souris 
        document.querySelector('#app').addEventListener('mousemove', this.cursorMove)
        // cursor trail
        // document.querySelector('#app').addEventListener('mousemove', this.cursorTrail)
        // applique event hover pour chaque link du site et modifit le cursor
        document.querySelectorAll('.link').forEach(link => {
            link.addEventListener('mouseenter', this.cursorLinkOn)
            link.addEventListener('mouseleave', this.cursorLinkOff)
        })
    },
    methods: {
        cursorMove: function(e) {
            gsap.to('.CursorPointer', {top: e.y, left: e.x, xPercent:-50, yPercent:-50, duration: 0})
        },
        cursorLinkOn: function() {
            gsap.to('.CursorPointer', {width: "500px",height: "500px",backgroundColor: "transparent",borderColor: "#f556e2", mixBlendMode: "normal", duration: 0.3})
        },
        cursorLinkOff: function() {
            gsap.to('.CursorPointer', {width: "25px",height: "25px",backgroundColor: "white",borderColor: "white", mixBlendMode: "difference", duration: 0.3})
        }
    },
    computed: {
        ...mapState({
            cursor: 'cursor'
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
    .Cursor {
        &Pointer {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            width: 25px;
            height: 25px;
            background-color: white;
            border: solid 2px white;
            border-radius: 50%;
            mix-blend-mode: difference;
            z-index: 10000;
            pointer-events: none;
        }
        &Background {
            position: absolute;
            z-index: 100;
            height: 100vh;
            width: 100vw;
            pointer-events: none;
            mix-blend-mode: difference;
            // background-color: rgb(210, 210 , 210);
        }
    }
</style>