<template>

    <div class="about">
        <div class="aboutBack" >
            <ButtonBack 
            :name="name"
            :color="color" 
            />
        </div>
        <div class="aboutMain">
            <div class="aboutMainPresentation">

                <div class="aboutMainPresentationPhoto">
                    <img src="../assets/images/portrait.png" alt="photo de moi">
                </div>
                <div class="aboutMainPresentationText">
                    Hey ! <br /> 
                    je suis quentin, un développeur web franç ais et junior dans ce domaine. <br />
                    Je me suis plongé dans ce magnifique monde qu'est la programmation il y a peu, et j'ai découvert une véritable passion.<br />
                    Je suis une personne logique et j'aime donc résoudre des problèmes et trouver les solutions les plus adaptées,<br />
                    je suis minutieux et rigoureux dans mon travail, un code propre et maintenable est un bon code pour moi !<br />
                    Je suis donc à la recherche d'expérience dans ce milieu, 
                    développeur full-stack avec une préférence pour le côté Front-end et une appétence pour l'UX/UI design.<br />
                    Je suis Adaptable et j'aime découvrir et apprendre de nouvelles technologies !
                </div>

            </div>
        </div>
    </div>

</template>

<script>
import { gsap } from "gsap";
import ButtonBack from "../components/app/button-back.vue";

export default {
    name: 'About',
    components: {
    ButtonBack
    },
    data() {
        return {
            name: 'about',
            color: 'rgba(86, 245 , 105, 1)',
        }
    },
    mounted: function() {
        this.arriveTransition()
    },
    methods: {
        arriveTransition: function() {
            let tl = gsap.timeline()

            tl.from('.about', {yPercent: 100, duration: 0.4, ease: 'power4.out'})
            tl.to('header', {xPercent: -50, duration: 0.5, ease: 'power4.out'}, '-=0.1')
            tl.to('.logo', {xPercent: 50, duration: 0.5, ease: 'power4.out'}, '-=0.5')
            // tl.from('.aboutMainPresentation', {height: 0, duration: 0.5, ease: 'power4.out'}, '-=0.5')
            tl.from('.aboutBack', {opacity: 0, duration: 0.5, ease: 'power1.in'}, '-=0.45')
        },
    },
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
.about {
    position: relative;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: flex-end;
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
            &::-webkit-scrollbar {
                display: none;
            }
            &Photo {
                display: flex;
                justify-content: center;
                align-items: flex-end;
                height: 100%;
                width: 100%;
                border-bottom: 5px solid $thirdColor;
                & img {
                    height: 50%;
                }
            }
            &Text {
                min-height: 100%;
                max-width: 600px;
                padding: 20px 0;
                border-bottom: 5px solid $thirdColor;
                font-family: 'Ultra';
                font-size: 1.3rem;
                color: $thirdColor;
                line-height: 170%;
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
}
@media all and (min-width: 1025px) {
    .aboutMain {
        width: 60%;
        &PresentationText {
            font-size: 2rem;
            line-height: 170%;
        }
    }
}
</style>
