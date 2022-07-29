<template>
    <div class="work">
        <div class="workBack">
            <ButtonBack :name="name" :color="color" />
        </div>
        <div class="workMain">
            <div class="inProgress" v-if="language === 'Eng'">
                Looking <br />
                for <br />
                work...
            </div>
            <div class="inProgress" v-else>
                En <br />
                recherche <br />
                d'emploi...
            </div>
            <Card
                :name="cardWork.name"
                :path="cardWork.path"
                :className="cardWork.className"
                :genre="cardWork.genre"
                :height="cardHeight"
                :link="cardWork.link"
            />
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { gsap } from "gsap";
import ButtonBack from "../components/app/button-back.vue";
import Card from "../components/app/card.vue";

export default {
    name: "Work",
    components: {
        ButtonBack,
        Card,
    },
    data() {
        return {
            name: "work",
            color: "rgba(242, 116, 5, 1)",
            cardHeight: 50,
            cardWork: {
                name: "L'Orée",
                path: require("../assets/images/screenlansot.jpg"),
                className: "cardLink",
                genre: "Work",
                link: "https://loreedelansot.com/",
            },
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
            tl.from(
                ".cardWork",
                { opacity: 0, duration: 0.5, ease: "power1.in" },
                "-=0.5"
            );
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
        width: 90%;
        height: calc(100% - 75px);
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
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
    // font-weight: bold;
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
