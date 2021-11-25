<template>

    <div class="Presentation" v-show="displayOn">
        <section class="PresentationDev">
            <h2 class="PresentationDevWord w1">Développeur</h2>
            <h2 class="PresentationDevWord w2">Web</h2>
            <h2 class="PresentationDevWord w3">Junior</h2>
        </section>

        <div class="PresentationScroll">
            <span class="PresentationScrollText">- Scroll down -</span>
            <i class="fas fa-chevron-down"></i>
        </div>
    </div>

</template>

<script>
import { gsap } from "gsap";
import { mapState } from 'vuex';

export default {
    name: 'SectionPresentation',
    data() {
        return {
            displayOn: false,
        }
    },
    methods: {
        presentationDevOn: function() {
            var tl = gsap.timeline()

            tl.delay(0.3)

            tl.to('.w1', {transform: "translateX(0)",ease: "slow", duration: 0.3})
            tl.to('.w2', {transform: "translateX(0)",ease: "power4.in", duration: 0.6}, "=-0.5")
            tl.to('.w3', {transform: "translateX(0)",ease: "slow", duration: 0.3}, "=-0.3")

            tl.to('.PresentationScroll', {opacity: 1, transform: "translateY(0)", duration: 0.3, onComplete: function() {
                document.querySelector('.fa-chevron-down').classList.add("active")
            }})
        },
        presentationParticles: function() {
            console.log("sent")
            // pallette de couleur dispo
            const colors = ["#D8D8D8", "#56F569", "#A3A9A4", "#606060", "#f556e2"];
            // nombre de balls en background
            const numBalls = 25;
            // boucle creation des balls
            for (let i = 0; i < numBalls; i++) {
                let ball = document.createElement("div");

                ball.classList.add('PresentationBall');
                // animation gsap rendu des balls
                gsap.fromTo(ball, {
                    position: "absolute",
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    left: `${Math.floor(Math.random() * 100)}vw`,
                    top: `${Math.floor(Math.random() * 100)}vh`,
                    transform: "scale(0)",
                    backgroundColor: colors[Math.floor(Math.random() * colors.length)],
                    mixBlendMode: "difference",
                    opacity: 0
                }, {
                    transform: `scale(${Math.random()})`,
                    opacity: 0.7,
                    duration: 0.5,
                    ease: "sine.inOut",
                    delay: `${(Math.random() + 0.2) * 2}`
                });
                // mouvement des balls en boucle
                gsap.fromTo(ball, {
                    x: 0,
                    y: 0
                }, {
                    x: `${(Math.random() + 0.1) * (i % 2 === 0 ? -11 : 11)}em`,
                    y: `${(Math.random() + 0.1) * 15}em`,
                    duration: `${(Math.random() + 0.2)* 5}`,
                    yoyo: true,
                    repeat: -1,
                    ease: "sine.inOut"
                })
                document.querySelector('.Presentation').append(ball);
            }
        }
    },
    watch: {
        header(newValue) {
            if(newValue === true)
            this.displayOn = true;
            this.presentationDevOn();
            this.presentationParticles();
        }
    },
    computed: {
        ...mapState({
            header: 'header',
        }),
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$mainColor: darken($color: rgb(96, 96 , 96), $amount: 20%);
$mainColorDiff: rgb(210, 210, 210);
$greenColor: rgb(86, 245 , 105);
$purpleColor: #f556e2;
$greyColor1: rgb(163, 169 , 164);
$greyColor2: rgb(216, 216 , 216);
    .Presentation {
        position: fixed;
        width: 100%;
        height: 100vh;
        top: 0;
        // partie text Dev web junior
        &Dev {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-top: 200px;
            width: 50%;
            &Word {
                font-family: 'Luthon Southard', serif;
                margin: 0 0 0 2%;
                font-size: 8vw;
                color: $mainColor;
                z-index: 2;
                user-select: none;
                // developpeur
                &.w1 {
                    transform: translateX(-150%);
                }
                //web
                &.w2 {
                    margin-left: 17%;
                    transform: translateX(650%);
                    color: black;
                }
                //junior
                &.w3 {
                    transform: translateX(-150%);
                }
            }
        }
        // partie Icon to scroll
        &Scroll {
            position: absolute;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 250px;
            left: calc(50% - 125px);
            bottom: 30px;
            opacity: 0;
            transform: translateY(-20px);
            user-select: none;
            // text scroll
            &Text {
                font-size: 2em;
                color: black;
            }
            // icon scroll
            & .fas {
                font-size: 3em;
                color: $greenColor;
                &.active {
                    animation: chevronMove 0.55s infinite alternate ease-in-out;
                }
            }
        }
    }
    @keyframes chevronMove {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(10px);
        }
    }
</style>