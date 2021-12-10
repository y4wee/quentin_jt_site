<template>

    <div class="Accueil sectionPin">
        <section class="AccueilDev">
            <h2 class="AccueilDevWord w1">Développeur</h2>
            <h2 class="AccueilDevWord w2">Web</h2>
            <h2 class="AccueilDevWord w3">Junior</h2>
        </section>

        <div class="AccueilScroll">
            <span class="AccueilScrollText">- Scroll down -</span>
            <i class="fas fa-chevron-down"></i>
        </div>

        <div class="AccueilNav"></div>
    </div>

</template>

<script>
import { gsap } from "gsap";
import { mapState } from 'vuex';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
    name: 'SectionAccueil',
    mounted: function() {
        gsap.registerPlugin(ScrollTrigger);
        this.$store.commit('sectionAccueilOn', true);
    },
    methods: {
        // animation Accueil On
        accueilDevOn: function() {
            var tl = gsap.timeline()

            tl.delay(0.3)

            tl.from('.w1', {xPercent: -200,ease: "back.out", duration: 0.5})
            tl.from('.w3', {xPercent: -300,ease: "back.out", duration: 0.5}, "=-0.5")
            tl.from('.w2', {xPercent: 800,ease: "back.out", duration: 0.5}, "=-0.5")

            tl.to('.fa-chevron-down', {opacity: 1, transform: "translatex(0)" ,duration: 0.3, onComplete: function() {
                document.querySelector('.fa-chevron-down').classList.add("active");
            }})
            tl.to('.AccueilScrollText',
                {opacity: 1, transform: "translatex(0)", duration: 0.3, onComplete: this.accueilScroll}, "-=0.3")
        },
        // fonction pour particules en background
        accueilParticles: function() {
            // pallette de couleur dispo
            const colors = ["#D8D8D8", "#56F569", "#A3A9A4", "#606060", "#f556e2"];

            const numBalls = 20;
            // boucle creation des balls
            for (let i = 0; i < numBalls; i++) {
                let ball = document.createElement("div");

                ball.classList.add('AccueilBall');
                // animation gsap rendu des balls
                gsap.fromTo(ball, {
                    position: "absolute",
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    left: `${Math.floor(Math.random() * 100)}vw`,
                    top: `${Math.floor(Math.random() * 100)}vh`,
                    transform: "scale(0)",
                    backgroundColor: colors[Math.floor(Math.random() * colors.length)],
                    mixBlendMode: "difference",
                    opacity: 0,
                }, {
                    transform: `scale(${Math.random()})`,
                    opacity: 0.5,
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
                document.querySelector('.Accueil').append(ball);
            }
        },
        accueilScroll: function() {
            console.log("scroll ok")
            gsap.utils.toArray(".sectionPin").forEach(section => {
                ScrollTrigger.create({
                    trigger: section,
                    pin: true,
                    pinSpacing: false,
                    start: "top top",
                })
            })
            gsap.timeline({
                scrollTrigger: {
                    trigger: ".AccueilDev",
                    start: "top top",
                    end: "top top",
                    toggleActions: "play none reverse none",
                }
            })
            .to('.w1', {xPercent: -200, ease: "back.in", duration: 0.5})
            .to('.w3', {xPercent: -300, ease: "back.in", duration: 0.5}, "-=0.5")
            .to('.w2', {xPercent: 800, ease: "back.in", duration: 0.5}, "-=0.5")
            .to('.AccueilScroll', {opacity: 0, ease: "power4.out", duration: 0.3}, "-=0.2")
        },
    },
    watch: {
        sectionAccueil(newValue) {
            console.log("watch ok")
            if(newValue === true) {
                this.accueilDevOn();
                this.accueilParticles();
            }
        }
    },
    computed: {
        ...mapState({
            sectionAccueil: 'sectionAccueil',
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
    .Accueil {
        
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        // partie text Dev web junior
        &Dev {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            width: 50%;
            position: relative;
            top: 200px;
            &Word {
                font-family: 'Luthon Southard', serif;
                margin: 0 0 0 2%;
                font-size: 8vw;
                color: $mainColor;
                z-index: 2;
                user-select: none;
                //web
                &.w2 {
                    margin-left: 17%;
                    color: black;
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
            z-index: 2;
            user-select: none;
            // text scroll
            &Text {
                font-size: 2em;
                color: black;
                transform: translateX(-50px);
                opacity: 0;
            }
            // icon scroll
            & .fas {
                transform: translateX(50px);
                font-size: 3em;
                color: $greenColor;
                opacity: 0;
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