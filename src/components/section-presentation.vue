<template>

    <div class="Presentation">
        <div class="PresentationDev">
            <h2 class="PresentationDevWord w1 cursorReveal">Développeur</h2>
            <h2 class="PresentationDevWord w2 cursorReveal">Web</h2>
            <h2 class="PresentationDevWord w3 cursorReveal">Junior</h2>
        </div>

    </div>

</template>

<script>
import { gsap } from "gsap";
import { mapState } from 'vuex';

export default {
    name: 'SectionPresentation',
    methods: {
        presentationDevOn: function() {
            var tl = gsap.timeline()

            tl.delay(0.3)

            tl.to('.w1', {transform: "translateX(0)",ease: "slow", duration: 0.4})
            tl.to('.w2', {transform: "translateX(0)",ease: "slow", duration: 0.9}, "=-0.3")
            tl.to('.w3', {transform: "translateX(0)",ease: "slow", duration: 0.5}, "=-0.4")
        }
    },
    watch: {
        header(newValue) {
            if(newValue === true)
            this.presentationDevOn()
            console.log("ok")
        }
    },
    computed: {
        ...mapState({
            header: 'header',
        }),
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$mainColor: darken($color: rgb(96, 96 , 96), $amount: 20%);
    .Presentation {
        width: 100%;
        height: 100%;
        &Dev {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-top: 200px;
            &Word {
                margin: 0 0 0 2%;
                font-size: 7vw;
                color: $mainColor;
                &.w1 {
                    transform: translateX(-150%);
                }
                &.w2 {
                    margin-left: 10.5%;
                    transform: translateX(610%);
                }
                &.w3 {
                    transform: translateX(-150%);
                }
            }
        }
    }
</style>