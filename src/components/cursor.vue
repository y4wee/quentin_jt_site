<template>

    <div class="Cursor" @click.once="turnCursorOn()"></div>

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
        window.addEventListener('mousemove', this.cursorMove)
    },
    methods: {
        turnCursorOn: function() {

            var tl = gsap.timeline()

            tl.to
            //this.$store.commit('cursorOn', true)
        },
        cursorMove: function(e) {
            if(this.$store.state.cursor) {
                gsap.to('.Cursor', {top: e.y, left: e.x, transform: "translate(-50%, -50%)", cursor:"none", duration: 0})
            }
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
    .Cursor {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: calc(50vh - 41px);
        left: calc(50vw - 41px);
        width: 80px;
        height: 80px;
        border: solid 2px rgb(210, 210 , 210);
        border-radius: 50%;
        cursor: pointer;
        mix-blend-mode: difference;
        opacity: 0;
    }
</style>