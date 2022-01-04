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

                <div class="aboutMainPresentationPicture">
                    <div class="pictureCard">
                        <img src="../assets/images/buste0.png" alt="photo cartoon Quentin.jt">
                        <div class="pictureCardText">Ruler</div>
                    </div>
                </div>

                <div class="aboutMainPresentationText">
                    Hey ! <br /> 
                    je suis Quentin, un développeur web français et junior dans ce domaine. <br />
                    Je me suis plongé dans ce magnifique monde qu'est la programmation il y a peu, et j'ai découvert une véritable passion.<br />
                    Je suis une personne logique et j'aime donc résoudre des problèmes et trouver les solutions les plus adaptées,<br />
                    je suis minutieux et rigoureux dans mon travail, un code propre et maintenable est un bon code pour moi !<br />
                    Je suis donc à la recherche d'expérience dans ce milieu, 
                    développeur full-stack avec une préférence pour le côté Front-end et une appétence pour l'UX/UI design.<br />
                    Je suis Adaptable et j'aime découvrir et apprendre de nouvelles technologies !
                </div>

                <div class="aboutMainPresentationSkill">
                    <div
                    v-for="skill in skills"
                    :key="skill"
                    :class="'skill ' + skill.name"
                    >
                        <img :src="skill.path" :alt="'logo ' + skill.name">
                    </div>
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
            skills: [
                {
                    name: 'HTML',
                    path: require('../assets/images/html.svg')
                },
                {
                    name: 'CSS',
                    path: require('../assets/images/css.svg')
                },
                {
                    name: 'Javascript',
                    path: require('../assets/images/javascript.svg')
                },
                {
                    name: 'Vuejs',
                    path: require('../assets/images/vuejs.svg')
                },
                {
                    name: 'nodejs',
                    path: require('../assets/images/nodejs.svg')
                },
                {
                    name: 'NPM',
                    path: require('../assets/images/npm.svg')
                },
                {
                    name: 'MySQL',
                    path: require('../assets/images/mysql.svg')
                },
                {
                    name: 'MongoDB',
                    path: require('../assets/images/mongodb.svg')
                },
            ]
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
$mainFont: 'Ultra';
$secondFont: 'Righteous';
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
            &Picture {
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100%;
                width: 100%;
                // border-bottom: 5px solid $thirdColor;
                & .pictureCard {
                    width: 30vh;
                    height: 50vh;
                    background-color: $thirdColor;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    flex-direction: column;
                    overflow-x: hidden;
                    border: solid 5px $thirdColor;
                    border-radius: 10px;
                    box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
                    // animation: float 2s ease-in-out infinite;
                    & img {
                        height: 88%;
                    }
                    &Text {
                        display: flex;
                        justify-content: center;
                        align-items: flex-end;
                        height: 12%;
                        font-family: $secondFont;
                        font-size: 4vh;
                        color: $orangeColor;
                    }
                }
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
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100%;    
                background-color: rgba(242, 116, 5, 0.8);
                // border: 5px solid $thirdColor;
                & .skill {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 80px;
                    margin: 0 5px;
                    &.MySQL {
                        width: 80px;
                        border-radius: 50%;
                        background-color: $thirdColor;
                    }
                    &.MongoDB {
                        width: 80px;
                        border-radius: 50%;
                        background-color: $thirdColor;
                    }
                }
                & img {
                    height: 70%;
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
@keyframes float {
	0% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translateY(0%);
	}
	50% {
		box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
		transform: translateY(-3%);
	}
	100% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translateY(0%);
	}
}
</style>
