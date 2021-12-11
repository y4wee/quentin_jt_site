<template>

    <div class="carousel">
        <div class="listLink">
            <div class="listLinkCard">one</div>
            <div class="listLinkCard">two</div>
            <div class="listLinkCard">three</div>
        </div>
    </div>

</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Draggable } from "gsap/ScrollTrigger";

export default {
    name: 'Carrousel',
    data() {
        return {
        
        }
    },
    mounted: function() {
        gsap.registerPlugin(ScrollTrigger);
    },
    methods: {
    }
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .carousel {
        width: 100%;
        height: 80vh;
        background-color: gray;
    }
    .listLink {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: white;
        width: 80%;
        &Card {
            position: relative;
            width: 150px;
            height: 150px;
            border-radius: 50%;
            background-color: black;
            margin: 50px 0;
        }
    }

</style>