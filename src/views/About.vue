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
                        :height="bioHeight"
                    />
                </div>

                <div class="aboutMainPresentationText" v-if="language === 'Eng'">
                    Hey ! <br />
                    I am Quentin,<br />
                    a French and junior web developer located in the Bordeaux region. <br />
                    I am a dreamer, a gamer, curious and optimistic by nature, 
                    listen to others and let's not forget that<br />
                    I love cats !<br />
                    After a few years of researching myself,<br />
                    I immersed myself in the vast world of programming in 2021,
                    since then I have continued to increase my skills in this environment,<br />
                    An environment which is a passion,<br />
                    A passion that I love to cultivate and develop.<br />
                    So I'll let you discover the cards I have in my possession.
                </div>
                <div class="aboutMainPresentationText" v-else>
                    Hey ! <br />
                    C'est Quentin,<br />
                    un développeur web français et junior situé en région bordelaise. <br />
                    Je suis un rêveur, un joueur, curieux et optimiste de nature, 
                    à l’écoute des autres et n’oublions pas que j’aime les chats !<br />
                    Après quelques années de recherche sur moi-même,<br />
                    Je me suis plongé dans ce vaste monde qu'est la programmation en 2021,
                    depuis je ne cesse d’accroître mes compétences dans ce milieu,<br />
                    Un milieu qui est une passion,<br />
                    Une passion que j’aime cultiver et développer.<br />
                    Je vous laisse donc découvrir les cartes que j’ai en ma possession.
                </div>

                <div class="aboutMainPresentationSkill">
                    <CarouselCard />
                    <div class="aboutMainPresentationSkillOverlay"></div>
                </div>

                <div class="aboutMainPresentationText" v-if="language === 'Eng'">
                    Strongly looking for a first job in this environment,<br />
                    I am a full-stack <br /> developer with a preference for
                    the Front-end side and an appetite for UX / UI design.
                    Being a logical and careful person,
                    I like to solve problems and find solutions
                    most suitable while adopting a clean and maintainable code.<br />
                    I am Adaptable and I like to discover and learn new technologies, <br />
                    so if you are interested in my profile, I invite you to follow this link ...
                </div>
                <div class="aboutMainPresentationText" v-else>
                    Vivement à la recherche d’un premier emploi dans ce milieu,<br />
                    je suis un développeur <br />full-stack avec une préférence pour 
                    le côté Front-end et une appétence pour l'UX/UI design.
                    Etant une personne logique et minutieuse,
                    j'aime résoudre des problèmes et en trouver les solutions 
                    les plus adaptées tout en adoptant un code propre et maintenable.<br />
                    Je suis Adaptable et j'aime découvrir et apprendre de nouvelles technologies, <br />
                    alors si vous êtes intéressé par mon profil, je vous invite à suivre ce lien…
                </div>

                <div class="aboutMainPresentationContact">
                    <div class="aboutMainPresentationContactGear" @click="goToContact()">
                        <div class="aboutMainPresentationContactGearBump"></div>
                        <div class="aboutMainPresentationContactGearCenter">Contact</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="aboutArrow">
            <i class="fas fa-chevron-down"></i>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ButtonBack from "../components/app/button-back.vue";
import Card from "../components/app/card.vue";
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
            // props pour composant Card
            bio: {
                name: "Y4wee",
                path: require("../assets/images/buste3.png"),
                className: "cardY4wee",
                genre: "Ruler",
            },
            bioHeight: 50,
        };
    },
    mounted: function () {
        gsap.registerPlugin(ScrollTrigger);
        // animation en arrivant sur la page
        this.arriveTransition();

        // animation du carousel cardskill on scroll
        gsap.to(".aboutMainPresentationSkill, .carouselCard", {
            scrollTrigger: {
                scroller: ".aboutMainPresentation",
                trigger: ".aboutMainPresentationSkill",
                // markers: true,
                start: "80% 70%",
                end: "bottom 45%",
                scrub: 1,
            },
            transform: "translateY(0)",
        })
        // animation bouton contact on scroll
        ScrollTrigger.create({
            scroller: ".aboutMainPresentation",
            trigger: ".aboutMainPresentationContact",
            // markers: true,
            start: "15% 50%",
            end: "15% 50%",
            onEnter: this.gearEnter,
            onEnterBack: this.gearEnterBack,
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
        gearEnter: function () {
            gsap.to(".aboutMainPresentationContactGear", {
                transform: "scale(0.9) translateY(0) rotateZ(0deg)",
                duration: 0.4,
            })
            gsap.to(".aboutMainPresentationContactGearBump", {
                animationPlayState: "running",
            })
        },
        gearEnterBack: function () {
            gsap.to(".aboutMainPresentationContactGear", {
                transform: "scale(0.7) translateY(50%) rotateZ(-30deg)",
                duration: 0.4,
            })
            gsap.to(".aboutMainPresentationContactGearBump", {
                animationPlayState: "paused",
            })
        },
        goToContact: function () {
            let tl = gsap.timeline()

            tl.to(".aboutBack", {opacity: 0, duration: 0.5, ease: 'power1.out'})
            tl.to(".logo", {xPercent: 0, duration: 0.5, ease: 'power3.in'}, '-=0.45')
            tl.to("header", {xPercent: 0, duration: 0.5, ease: 'power3.in'}, '-=0.5')
            tl.to(".about", {yPercent: 100, duration: 0.4, ease: 'power4.in'}, '-=0.1')

            tl.then(() => {
                this.$router.push('/contact')
            })
        }
    },
    computed: {
        ...mapState({
            language: 'language',
        }),
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
$gearColor: rgb(227, 223, 223);
$mainFont: "Ultra";
$secondFont: "Righteous";
.about {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    user-select: none;
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
                height: 50%;
                max-width: 800px;
                // background-color: $thirdColor;
                border-bottom: 5px solid $thirdColor;
                overflow: hidden;
                transform: translateY(-50%);
                &Overlay {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                }
            }
            &Contact {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 70%;
                overflow: hidden;
                &Gear {
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 30vh;
                    height: 30vh;

                    transform: scale(0.7) translateY(50%) rotateZ(-30deg);
                    &Bump {
                        position: absolute;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 100%;
                        height: 100%;
                        background: linear-gradient(0deg,transparent 39%,$gearColor 39%,$gearColor 61%, transparent 61%),
                        linear-gradient(60deg,transparent 42%,$gearColor 42%,$gearColor 58%, transparent 58%),
                        linear-gradient(120deg,transparent 42%,$gearColor 42%,$gearColor 58%, transparent 58%);
                        border-radius: 50%;
                        -webkit-animation: gearRotateLeft 2s infinite linear;
                        animation: gearRotateLeft 2s infinite linear;
                        animation-play-state: paused;
                        &::before {
                            content: '';
                            // position: absolute;
                            width: 80%;
                            height: 80%;
                            border-radius: 50%;
                            background-color: $gearColor;
                        }
                    }
                    &Center {
                        position: absolute;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 70%;
                        height: 70%;
                        background: $mainColor;
                        border-radius: 50%;
                        color: $purpleColor;
                        font-family: $mainFont;
                        font-size: 1.5rem;
                    }
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
        &Skill {
            width: 80%;
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
@-webkit-keyframes gearRotateLeft {
  from { 
    transform: rotateZ(0deg);
  }
  to { 
    transform: rotateZ(360deg); 
  }
}
@keyframes gearRotateLeft {
  from { 
    transform: rotateZ(0deg);
  }
  to { 
    transform: rotateZ(360deg); 
  }
}
</style>
