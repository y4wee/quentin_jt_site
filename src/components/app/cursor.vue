<template>

    <div class="cursor">
        <div class="cursorPointer">
            <div class="cursorPointerScale"></div>
        </div>
        <div class="cursorBis">
            <div class="cursorBisScale">
                <div class="cursorBisScaleText">
                    <span v-for="letter in hoverText" :key="letter" class="textLetter"> {{ letter }} </span>
                </div>
            </div>
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
            hoverText: '',
        }
    },
    mounted: function() {
        // event pour cursor souris 
        window.addEventListener('mousemove', this.cursorMove)
        
    },
    methods: {
        cursorMove: function(e) {
            gsap.to('.cursorPointer', {transform: `translate3d(calc(-50% + ${e.x}px), calc(-50% + ${e.y}px), 0px)`, duration: 0.6})
            gsap.to('.cursorBis', {transform: `translate3d(calc(20% + ${e.x}px), calc(-50% + ${e.y}px), 0px)`, duration: 0})
        },
        cursorHoverOn: function() {
            let tl = gsap.timeline();

            tl.to('.cursorPointerScale', {scale: 0, duration: 0.3})
            tl.to('.cursorBisScale', {scale: 1, duration: 0.3, onComplete: this.textAnimation}, '-=0.3')
        },
        cursorHoverOff: function() {
            gsap.to('.cursorPointerScale', {scale: 1, duration: 0.3})
            gsap.to('.cursorBisScale', {scale: 0, duration: 0.3})
        },
        textAnimation: function() {
            document.querySelectorAll('.textLetter').forEach((letter, index) => {
                const delay = index * 0.09
                let tl = gsap.timeline({repeat: -1, repeatDelay: 1 - delay})

                tl.fromTo(letter, {
                    yPercent: 0,
                }, {
                    yPercent: -30,
                    duration: 0.18,
                    delay: delay,
                    repeat: 1,
                    yoyo: true,
                    ease: 'power1.out',
                })
            })
        }
    },
    computed: {
        ...mapState({
            cursorHover: 'cursorHover'
        }),
    },
    watch: {
        cursorHover(newValue) {
            if(newValue.state === true) {
                this.hoverText = newValue.type
                this.cursorHoverOn()
            } else {
                this.hoverText = newValue.type
                this.cursorHoverOff()
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$mainColor: rgb(28, 32, 32);
$secondColor: rgb(233, 222, 190);
$thirdColor: rgb(227, 223, 223);
$greenColor: rgb(86, 245 , 105);
$purpleColor: rgb(245, 86, 226);
$orangeColor: rgb(242, 116, 5);
$testColorGray: rgb(61, 61, 61);
    .cursor {
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
            pointer-events: none;
            transform-origin: center;
            mix-blend-mode: difference;
            &Scale {
                display: flex;
                justify-content: center;
                align-items: flex-start;
                // border: solid 2px white;
                // background-color: $thirdColor;
                transform: scale(0);
                font-family: 'Righteous';
                font-size: 1.5rem;
                color: white;
                &Text {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
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