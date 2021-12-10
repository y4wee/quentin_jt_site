<template>

    <div class="Presentation sectionPin">
        <div class="PresentationCadre">

        </div>
    </div>

</template>

<script>
// import { mapState } from 'vuex';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
    name: 'SectionPresentation',
    mounted: function() {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({

        })
        gsap.timeline({
                scrollTrigger: {
                    trigger: ".Presentation",
                    start: "top top",
                    end: "top top",
                    toggleActions: "play none reverse none",
                    markers: true,
                }
            })
            .from('.PresentationCadre', {x: "500px", opacity: 0, ease: "power4.out", duration: 0.5})
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
        display: flex;
        justify-content: center;
        align-items: center;
        // margin-top: 100vh;
        width: 100vw;
        height: 100vh;
        background-color: white;
        &Cadre {
            // border: solid 5px black;
            box-shadow: 0 0 10px 0 $greyColor2;
            background-color: white;
            border-radius: 30px;
            width: 50%;
            min-width: 330px;
            height: 70vh;
            z-index: 2;
        }
    }
</style>