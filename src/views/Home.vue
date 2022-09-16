<template>
    <div class="home">
        <div class="homeLanguage" @click="changeLanguage()">
            {{ language }}
        </div>

        <div class="homeWords" v-if="language === 'Eng'">
            <div class="homeWords1">Developer</div>
            <div class="homeWords2">Web</div>
            <div class="homeWords3">Fron-tend</div>
        </div>
        <div class="homeWords" v-else>
            <div class="homeWords1">Développeur</div>
            <div class="homeWords2">Web</div>
            <div class="homeWords3">Fron-tend</div>
        </div>

        <div class="homeNav">
            <CarouselNav />
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { gsap } from "gsap";
import CarouselNav from "../components/home/carousel-nav.vue";

export default {
    name: "Home",
    components: {
        CarouselNav,
    },
    data() {
        return {
            words: [
                {
                    text: "Développeur",
                    animation: false,
                },
                {
                    text: "Web",
                    animation: false,
                },
                {
                    text: "Junior",
                    animation: false,
                },
            ],
        };
    },
    mounted: function () {
        this.animationBack();
    },
    methods: {
        animationBack: function () {
            if (this.buttonBack) {
                console.log("animation go")
                this.$store.commit("buttonBackState", false);
                let tl = gsap.timeline();

                tl.from(".home", {
                    yPercent: 100,
                    duration: 0.5,
                    ease: "power4.out",
                });
                tl.from(
                    ".homeWords",
                    { yPercent: 100, duration: 0.5, ease: "power4.out" },
                    "-=0.4"
                );
                tl.from(".homeWords", { scale: 0.75, duration: 0.3 }, "-=0.15");
            }
        },
        changeLanguage: function () {
            if (this.language === "Eng") {
                this.$store.commit("languageSwitch", "Fr");
            } else {
                this.$store.commit("languageSwitch", "Eng");
            }
        },
    },
    computed: {
        ...mapState({
            language: "language",
            buttonBack: "buttonBack",
        }),
        gearAngle() {
            return 180 / this.gears;
        },
    },
};
</script>

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

.home {
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    &Language {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 5px;
        left: 5px;
        font-family: $secondFont;
        font-size: 1.5rem;
        color: $purpleColor;
        border-bottom: solid 3px $purpleColor;
        cursor: pointer;
        user-select: none;
    }
    &Words {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-family: $mainFont;
        margin: 0 0 0 5%;
        user-select: none;
        font-size: 10vw;
        color: $thirdColor;
        &1 {
            margin-top: 120px;
            margin-left: 5px;
            z-index: 2;
        }
        &2 {
            margin: 15px 0 15px 47px;
            z-index: 2;
        }
        &3 {
            z-index: 2;
            color: rgba(242, 116, 5, 0.7);
        }
        &Bis {
            position: relative;
            font-family: $secondFont;
            font-size: 12vw;
            color: rgba(242, 116, 5, 0.7);
            transform: translate(22%, -50%);
        }
    }
    &Nav {
        z-index: 5;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        bottom: 15%;
        right: 0;
        height: 300vh;
        width: 35vw;
        min-width: 350px;
        background: $secondColor;
        transform-origin: bottom right;
        transform: rotateZ(45deg) translateY(53%);
        box-shadow: 5px 0 10px 0 rgba(0, 0, 0, 0.7),
            -5px 0 10px 0 rgba(0, 0, 0, 0.7);
        border: 5px solid $thirdColor;
        &Hover {
            position: absolute;
            z-index: 50;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            pointer-events: none;
        }
    }
}
@media all and (min-height: 701px) and (max-height: 800px) {
    .homeNav {
        min-width: 300px;
    }
}
@media all and (max-height: 700px) {
    .homeNav {
        min-width: 240px;
    }
    .homeWords {
        font-size: 2rem;
        margin: 0 0 0 8%;
        &Bis {
            font-size: 2.4rem;
        }
    }
}
@media all and (min-width: 701px) and (max-width: 1024px) {
}
@media all and (min-width: 1025px) {
    .homeWords {
        font-size: 7.9vw;
        &Bis {
            font-size: 9.4vw;
        }
    }
}
@media all and (min-width: 1500px) {
    .homeWords {
        font-size: 7vw;
        &Bis {
            font-size: 8.3vw;
        }
    }
}
</style>
