<template>
    <div class="about">
        <div class="aboutBack">
            <ButtonBack :name="name" :color="color" />
        </div>
        <div class="aboutMain">
            <div class="aboutMainPresentation">
                <div class="aboutMainPresentationPicture">
                    <Card
                        :name="bio.name"
                        :path="bio.path"
                        :className="bio.className"
                        :genre="bio.genre"
                    />
                </div>

                <div class="aboutMainPresentationText">
                    Hey ! <br />
                    C'est Quentin, un développeur web français et junior dans ce
                    domaine. <br />
                    Je me suis plongé dans ce magnifique monde qu'est la
                    programmation il y a peu, et j'ai découvert une véritable
                    passion.<br />
                    Etant une personne logique, j'aime donc résoudre des
                    problèmes et trouver les solutions les plus adaptées.<br />
                    Je suis minutieux et rigoureux dans mon travail, un code
                    propre et maintenable est selon moi, un bon code !<br />
                    Vivement à la recherche d'expériences dans ce milieu,
                    développeur full-stack avec une préférence pour le côté
                    Front-end et une appétence pour l'UX/UI design.<br />
                    Je suis Adaptable et j'aime découvrir et apprendre de
                    nouvelles technologies !
                </div>

                <div class="aboutMainPresentationSkill">
                    <CarouselCard />
                    <div class="aboutMainPresentationSkillOverlay"></div>
                </div>
            </div>
        </div>
        <div class="aboutArrow">
            <i class="fas fa-chevron-down"></i>
        </div>
    </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ButtonBack from "../components/app/button-back.vue";
import Card from "../components/about/card.vue";
import CarouselCard from "../components/about/carousel-card.vue";

export default {
    name: "About",
    components: {
        ButtonBack,
        Card,
        CarouselCard,
    },
    data() {
        return {
            name: "about",
            color: "rgba(86, 245 , 105, 1)",
            bio: {
                name: "Quentin",
                path: require("../assets/images/buste2.png"),
                className: "cardQuentin",
                genre: "Ruler",
            },
        };
    },
    mounted: function () {
        // animation en arrivant sur la page
        this.arriveTransition();
        gsap.registerPlugin(ScrollTrigger);

        //animation opacité overlay en scroll
        gsap.to(".aboutMainPresentationSkillOverlay", {
            scrollTrigger: {
                scroller: ".aboutMainPresentation",
                trigger: ".aboutMainPresentationSkill",
                // markers: true,
                start: "top center",
                end: "center center",
                scrub: 1,
            },
            opacity: 0,
        })
    },
    methods: {
        arriveTransition: function () {
            let tl = gsap.timeline();

            tl.delay(0.25);

            tl.from(".about", {
                yPercent: 100,
                duration: 0.4,
                ease: "power4.out",
            });
            tl.to(
                "header",
                { xPercent: -50, duration: 0.5, ease: "power4.out" },
                "-=0.1"
            );
            tl.to(
                ".logo",
                { xPercent: 50, duration: 0.5, ease: "power4.out" },
                "-=0.5"
            );
            tl.from(
                ".aboutBack",
                { opacity: 0, duration: 0.5, ease: "power1.in" },
                "-=0.45"
            );
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$mainColor: rgb(28, 32, 32);
$secondColor: rgb(233, 222, 190);
$thirdColor: rgb(227, 223, 223);
$greenColor: rgb(86, 245, 105);
$purpleColor: rgb(245, 86, 226);
$orangeColor: rgb(242, 116, 5);
$testColorGray: rgb(61, 61, 61);
$mainFont: "Ultra";
$secondFont: "Righteous";
.about {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    &Arrow {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        bottom: 4%;
        right: 5%;
        width: 65px;
        height: 65px;
        font-size: 2.2rem;
        color: $purpleColor;
        animation: float 1.4s infinite ease-in-out;
    }
    &Main {
        width: 90%;
        height: calc(100% - 75px);
        display: flex;
        &Presentation {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            width: 100%;
            height: calc(100% - 150px);
            margin-top: 10px;
            border-top: 5px solid $secondColor;
            border-bottom: 5px solid $secondColor;
            overflow-y: scroll;
            scrollbar-width: none;
            &::-webkit-scrollbar {
                display: none;
            }
            &Picture {
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100%;
                width: 100%;
            }
            &Text {
                min-height: 100%;
                max-width: 600px;
                padding: 20px 0;
                // border-bottom: 5px solid $thirdColor;
                font-family: $mainFont;
                font-size: 1.3rem;
                color: $thirdColor;
                line-height: 170%;
            }
            &Skill {
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100%;
                background-color: rgba(242, 116, 5, 0.8);
                border: 5px solid $secondColor;
                border-bottom: none;
                &Overlay {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background-color: $orangeColor;
                    opacity: 1;
                }
            }
        }
    }
}
@media all and (max-height: 500px) {
    .aboutMainPresentation {
        height: calc(100% - 10px);
        &Text {
            width: 60%;
        }
    }
}
@media all and (min-width: 701px) and (max-width: 1024px) {
    .aboutMain {
        width: 75%;
    }
    .aboutArrow {
        right: 12.5%;
    }
}
@media all and (min-width: 1025px) {
    .aboutMain {
        width: 60%;
        &PresentationText {
            font-size: 2rem;
            line-height: 170%;
        }
    }
    .aboutArrow {
        right: 20%;
    }
}
@keyframes float {
    0% {
        transform: translateY(0%);
    }
    50% {
        transform: translateY(30%);
    }
    100% {
        transform: translateY(0%);
    }
}
</style>
