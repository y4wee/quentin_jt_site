<template>

    <div class="Cursor"></div>

</template>

<script>
import { gsap } from "gsap";
import { mapState } from 'vuex';

export default {
    name: 'Cursor',
    data() {
        return {
            ok: true,
        }
    },
    mounted: function() {
        // event pour cursor souris 
        window.addEventListener('mousemove', this.cursorMove)
        // applique event hover pour chaque link du site et modifit le cursor
        document.querySelectorAll('.link').forEach(link => {
            link.addEventListener('mouseenter', this.cursorLinkOn)
            link.addEventListener('mouseleave', this.cursorLinkOff)
        })
    },
    methods: {
        cursorMove: function(e) {
            gsap.to('.Cursor', {top: e.y, left: e.x, xPercent:-50, yPercent:-50, duration: 0})
        },
        cursorLinkOn: function() {
            gsap.to('.Cursor', {width: "500px",height: "500px",backgroundColor: "transparent",borderColor: "#f556e2", mixBlendMode: "normal", duration: 0.3})
        },
        cursorLinkOff: function() {
            gsap.to('.Cursor', {width: "30px",height: "30px",backgroundColor: "rgb(210, 210 , 210)",borderColor: "rgb(210, 210 , 210)", mixBlendMode: "difference", duration: 0.3})
        }
    },
    computed: {
        ...mapState({
            cursor: 'cursor'
        }),
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$mainColor: darken($color: rgb(96, 96 , 96), $amount: 20%);
$greenColor: rgb(86, 245 , 105);
$purpleColor: #f556e2;
$greyColor: rgb(216, 216 , 216);
    .Cursor {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: calc(50vh - 41px);
        left: calc(50vw - 41px);
        width: 30px;
        height: 30px;
        background-color: rgb(210, 210 , 210);
        border: solid 2px rgb(210, 210 , 210);
        border-radius: 50%;
        mix-blend-mode: difference;
        z-index: 10000;
        pointer-events: none;
    }
</style>