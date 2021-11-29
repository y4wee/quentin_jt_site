<template>

    <div class="Cursor">
        <div class="CursorPointer">
            <div class="CursorPointerScale"></div>
        </div>
        <div class="CursorBis">
            <div class="CursorBisScale"></div>
        </div>

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
        window.addEventListener('mousemove', this.cursorMove)
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
            // console.log(e)
            // console.log("screenY" + e.screenY)
            // console.log("clientY" + e.clientY)
            gsap.to('.CursorPointer', {transform: `translate3d(calc(-50% + ${e.x}px), calc(-50% + ${e.y}px), 0px)`, duration: 0})
            gsap.to('.CursorBis', {transform: `translate3d(calc(-50% + ${e.x}px), calc(-50% + ${e.y}px), 0px)`, duration: 0})
        },
        cursorLinkOn: function() {
            gsap.to('.CursorPointerScale', {scale: 0, duration: 0.3})
            gsap.to('.CursorBisScale', {scale: 1, duration: 0.3})
        },
        cursorLinkOff: function() {
            gsap.to('.CursorPointerScale', {scale: 1, duration: 0.3})
            gsap.to('.CursorBisScale', {scale: 0, duration: 0.3})
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
            position: fixed;
            top: 0;
            left: 0;
            z-index: 10000;
            border-radius: 50%;
            pointer-events: none;
            transform-origin: center;
            mix-blend-mode: difference;
            &Scale {
                background-color: white;
                width: 25px;
                height: 25px;
                border-radius: 50%;
            }
        }
        &Bis {
            position: fixed;
            top: 0;
            left: 0;
            width: auto;
            height: auto;
            z-index: 10000;
            
            border-radius: 50%;
            pointer-events: none;
            transform-origin: center;
            mix-blend-mode: difference;
            &Scale {
                border: solid 1px rgb(86, 245 , 105);
                width: 500px;
                height: 500px;
                border-radius: 50%;
                transform: scale(0);
            }
        }
        &Background {
            position: fixed;
            top: 0;
            left: 0;
            z-index: 100;
            height: 100vh;
            width: 100vw;
            pointer-events: none;
            mix-blend-mode: difference;
            // background-color: white;
        }
    }
</style>