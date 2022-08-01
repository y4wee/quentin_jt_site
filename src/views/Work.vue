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
                    <i class="fas fa-arrow-left" :style="{ color: color }"></i>
                </div>
                <div class="workNavDetail">{{ work[nameIndex].name }}</div>
                <div
                    class="workNavButton workNavButtonRight"
                    @click="clickButton(360)"
                >
                    <i class="fas fa-arrow-right" :style="{ color: color }"></i>
                </div>
            </div>

            <div class="workContainer">
                <div class="workContainerCard">
                    <div class="workContainerCardGear"></div>
                    <div class="workContainerCardDetail">
                        <img
                            :src="work[workActive].path"
                            :alt="'image de ' + work[workActive].name"
                            width="270"
                        />
                        <div class="workContainerCardButton">Visiter</div>
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
                    detail: "Site vitrine de chambres dhôtes",
                    link: "https://loreedelansot.com/",
                    imgPosition: "objectPosition: center top",
                },
                {
                    name: "WZstats",
                    path: require("../assets/images/screenwzstats.jpg"),
                    detail: "Site stats warzone avec API",
                    link: "https://warzone-stats-pi.vercel.app/",
                    imgPosition: "objectPosition: center top",
                },
            ],
            colorActive: "rgba(242, 116, 5, 1)",
            nameIndex: 0,
            workActive: 0,
            currentRotate: 45,
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
                    rotateZ: this.currentRotate - 45,
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
            tl.to(".workContainerCardDetail", {
                opacity: 1,
                duration: 0.3,
                ease: "power1.inOut",
            });
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
$gearColor: rgb(227, 223, 223);
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
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: calc(100% - 75px);
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
        overflow: hidden;
    }
    &Nav {
        display: flex;
        justify-content: space-between;
        width: 300px;
    }
    &Container {
        position: relative;
        top: 50%;
        width: 900px;
        min-height: 900px;
        transform-origin: center;
        transform: rotateZ(45deg);
        &Card {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 300px;
            height: 300px;
            border-radius: 50%;
            transform: rotateZ(-45deg);
            &Detail {
                position: absolute;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 260px;
                height: 260px;
                border-radius: 50%;
                color: white;
                overflow: hidden;
                & img {
                    object-fit: cover;
                    object-position: center 80%;
                }
                &::after {
                    content: "";
                    position: absolute;
                    width: 260px;
                    height: 260px;
                    border-radius: 50%;
                    background-color: rgba(0, 0, 0, 0.5);
                }
            }
            &Button {
                position: absolute;
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
                // -webkit-animation: gearRotateRight 20s infinite linear;
                // animation: gearRotateRight 20s infinite linear;
                &::before {
                    content: "";
                    position: absolute;
                    width: 330px;
                    height: 330px;
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
// .cardWork {
// animation: float 6s ease-in-out infinite;
// }
@media all and (min-width: 701px) and (max-width: 1024px) {
    .workMain {
        width: 75%;
    }
}
@media all and (min-width: 1025px) {
    .workMain {
        width: 60%;
    }
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
