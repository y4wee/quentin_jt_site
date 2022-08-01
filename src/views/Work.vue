<template>
    <div class="work">
        <div class="workBack">
            <ButtonBack :name="name" :color="color" />
        </div>
        <div class="workMain">
            <div class="workNav">
                <div
                    class="workNavButton workNavButtonLeft"
                    @click="clickButton(-360)"
                >
                    <i class="fas fa-caret-left" :style="{ color: color }"></i>
                </div>
                <div class="workNavDetail">{{ work[nameIndex].name }}</div>
                <div
                    class="workNavButton workNavButtonRight"
                    @click="clickButton(360)"
                >
                    <i class="fas fa-caret-right" :style="{ color: color }"></i>
                </div>
            </div>

            <div class="workInfo">
                {{ work[nameIndex].detail }}
            </div>

            <div class="workContainer">
                <div class="workContainerCard">
                    <div class="workContainerCardGear"></div>
                    <div class="workContainerCardDetail">
                        <div class="workContainerCardDetailImage">
                            <img
                                :src="work[workActive].path"
                                :alt="'image de ' + work[workActive].name"
                                :style="{
                                    objectPosition:
                                        work[workActive].imgPosition,
                                }"
                                width="270"
                            />
                        </div>
                        <a
                            :href="work[workActive].link"
                            target="_blank"
                            rel="noreferrer noopener"
                            class="workContainerCardButton"
                            >{{ language === "Eng" ? "Visit" : "Visiter" }}</a
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { gsap } from "gsap";
import ButtonBack from "../components/app/button-back.vue";
// import Card from "../components/app/card.vue";

export default {
    name: "Work",
    components: {
        ButtonBack,
        // Card,
    },
    data() {
        return {
            name: "work",
            color: "rgba(242, 116, 5, 1)",
            cardHeight: 50,
            work: [
                {
                    name: "L'Orée de Lansot",
                    path: require("../assets/images/screenlansot.jpg"),
                    detail: "Site vitrine de chambres dhôtes en Nuxtjs",
                    link: "https://loreedelansot.com/",
                    imgPosition: "0 -25px",
                },
                {
                    name: "WZstats",
                    path: require("../assets/images/screenwzstats.jpg"),
                    detail: "Site en Reactjs utilisant une API",
                    link: "https://warzone-stats-pi.vercel.app/",
                    imgPosition: "center",
                },
            ],
            colorActive: "rgba(242, 116, 5, 1)",
            nameIndex: 0,
            workActive: 0,
            currentRotate: 0,
        };
    },
    mounted: function () {
        this.arriveTransition();
    },
    methods: {
        arriveTransition: function () {
            let tl = gsap.timeline();

            tl.delay(0.25);

            tl.from(".work", {
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
                ".workBack",
                { opacity: 0, duration: 0.5, ease: "power1.in" },
                "-=0.45"
            );
        },
        clickButton: function (way) {
            this.currentRotate += way;
            this.changeWorkName(way);
            let tl = gsap.timeline();

            tl.to(".workContainerCardDetail", {
                opacity: 0,
                duration: 0.3,
                ease: "power1.in",
            });
            tl.to(
                ".workContainerCardGear",
                {
                    rotateZ: this.currentRotate,
                    duration: 1,
                    ease: "power1.out",
                },
                "<"
            );
            tl.to(
                ".workContainer",
                {
                    rotateZ: this.currentRotate,
                    duration: 0.6,
                    ease: "power1.inOut",
                    onComplete: this.changeWorkIndex,
                    onCompleteParams: [way],
                },
                "<"
            );
            tl.to(
                ".workContainerCardDetail",
                {
                    opacity: 1,
                    duration: 0.2,
                    ease: "power1.inOut",
                },
                "-=0.2s"
            );
        },
        changeWorkName: function (way) {
            let indexMax = this.work.length - 1;
            if (way > 0) {
                if (this.nameIndex === indexMax) {
                    this.nameIndex = 0;
                } else {
                    this.nameIndex++;
                }
            } else if (way < 0) {
                if (this.nameIndex === 0) {
                    this.nameIndex = indexMax;
                } else {
                    this.nameIndex--;
                }
            }
        },
        changeWorkIndex: function (way) {
            let indexMax = this.work.length - 1;
            if (way > 0) {
                if (this.workActive === indexMax) {
                    this.workActive = 0;
                } else {
                    this.workActive++;
                }
            } else if (way < 0) {
                if (this.workActive === 0) {
                    this.workActive = indexMax;
                } else {
                    this.workActive--;
                }
            }
        },
    },
    computed: {
        ...mapState({
            language: "language",
        }),
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$mainColor: rgb(28, 32, 32);
$gearColor: rgb(233, 222, 190);
$secondColor: rgb(233, 222, 190);
$thirdColor: rgb(227, 223, 223);
$greenColor: rgb(86, 245, 105);
$purpleColor: rgb(245, 86, 226);
$orangeColor: rgb(242, 116, 5);
$testColorGray: rgb(61, 61, 61);
$mainFont: "Ultra";
$secondFont: "Righteous";
.work {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    &Main {
        position: relative;
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: calc(100% - 75px);
        overflow: hidden;
    }
    &Nav {
        display: flex;
        justify-content: space-between;
        width: 300px;
        // margin-top: 5vh;
        &Detail {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 50px;
            width: 156px;
            background: $thirdColor;
            color: $mainColor;
            font-family: $mainFont;
            font-size: 1.3rem;
        }
        &Button {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 50px;
            width: 70px;
            background: $thirdColor;
            font-size: 2.5rem;
            cursor: pointer;
            &Left {
                border-top-left-radius: 15px;
                border-bottom-left-radius: 15px;
            }
            &Right {
                border-top-right-radius: 15px;
                border-bottom-right-radius: 15px;
            }
        }
    }
    &Info {
        min-height: 100%;
        width: 90%;
        max-width: 600px;
        padding: 20px 0;
        font-family: $mainFont;
        font-size: 1.3rem;
        color: $thirdColor;
        line-height: 170%;
    }
    &Container {
        position: absolute;
        display: flex;
        justify-content: center;
        bottom: -500px;
        width: 900px;
        min-height: 900px;
        transform-origin: center;
        &Card {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 300px;
            height: 300px;
            border-radius: 50%;
            &Detail {
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 260px;
                height: 260px;
                border-radius: 50%;
                color: white;
                overflow: hidden;
                &Image {
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    &::after {
                        content: "";
                        position: absolute;
                        width: 260px;
                        height: 260px;
                        border-radius: 50%;
                        background-color: rgba(0, 0, 0, 0.5);
                        pointer-events: none;
                    }
                }
            }
            &Button {
                position: absolute;
                left: 0;
                bottom: 50px;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 40px;
                background: $orangeColor;
                text-decoration: none;
                color: $thirdColor;
                font-family: $mainFont;
                font-size: 1.3rem;
            }
            &Gear {
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 280px;
                height: 280px;
                background: $gearColor;
                border-radius: 50%;
                &::before {
                    content: "";
                    position: absolute;
                    width: 320px;
                    height: 320px;
                    background: linear-gradient(
                            0deg,
                            transparent 39%,
                            $gearColor 39%,
                            $gearColor 61%,
                            transparent 61%
                        ),
                        linear-gradient(
                            60deg,
                            transparent 42%,
                            $gearColor 42%,
                            $gearColor 58%,
                            transparent 58%
                        ),
                        linear-gradient(
                            120deg,
                            transparent 42%,
                            $gearColor 42%,
                            $gearColor 58%,
                            transparent 58%
                        );
                    border-radius: 50%;
                }
                &::after {
                    content: "";
                    position: absolute;
                    width: 260px;
                    height: 260px;
                    background: $mainColor;
                    border-radius: 50%;
                }
            }
        }
    }
}
.inProgress {
    display: flex;
    justify-content: center;
    align-items: center;
    top: 20%;
    width: 30vh;
    height: 14vh;
    font-family: $mainFont;
    font-size: 2.2vh;
    color: $mainColor;
    background-color: $secondColor;
    border-radius: 10px;
    margin-bottom: 7vh;
}
// keyframes animation
@keyframes float {
    0% {
        box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.8);
        transform: translateY(0);
    }
    50% {
        box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.4);
        transform: translateY(-5vh);
    }
    100% {
        box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.8);
        transform: translateY(0);
    }
}
</style>
