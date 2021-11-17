<template>
    <div class="Cursor CursorOff" @click="turnCursorOn()">
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'Cursor',
    computed: {
        ...mapState({
            cursorOff: 'cursorOff'
        }),
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .Cursor {
        display: none;
        position: absolute;
        top: calc(50vh - 50px);
        left: calc(50vw - 40px);
        width: 80px;
        height: 80px;
        border: solid 2px darken($color: rgb(96, 96 , 96), $amount: 15%);
        border-radius: 50%;
        z-index: 6;
        transition: all 0.3s ease-out;
        &Off {
            //display: flex;
            justify-content: center;
            align-items: center;
            background-color: inherit;
            cursor: pointer;
            &::after {
                position: absolute;
                content: "Click";
                font-family: 'M PLUS 2', sans-serif;
                font-size: 1.5em;
                color: darken($color: rgb(96, 96 , 96), $amount: 15%);
                user-select: none;
            }
            &:hover {
                transform: scale(1.4) rotateZ(360deg);
            }
        }
        &On {
            cursor: none;
            background-color: transparent;
        }
    }
</style>