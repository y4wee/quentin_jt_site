<template>

    <div :class="'card card' + genre">
        <img :src="path" :alt="alt">
        <div class="cardText">{{ name }}</div>
    </div>

</template>

<script>
export default {
    name: 'Card',
    props: ['name', 'path', 'alt', 'genre'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$mainColor: rgb(28, 32, 32);
$secondColor: rgb(233, 222, 190);
$thirdColor: rgb(227, 223, 223);
$greenColor: rgb(86, 245 , 105);
$purpleColor: rgb(245, 86, 226);
$orangeColor: rgb(242, 116, 5);
$testColorGray: rgb(61, 61, 61);
$mainFont: 'Ultra';
$secondFont: 'Righteous';
    .card {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        width: 30vh;
        height: 50vh;
        overflow: hidden;
        background-color: $thirdColor;
        border: solid 5px $thirdColor;
        border-radius: 10px;
        box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
        & img {
            height: 88%;
        }
        &Text {
            display: flex;
            justify-content: center;
            align-items: flex-end;
            height: 12%;
            font-family: $secondFont;
            font-size: 4vh;
            color: $orangeColor;
        }
    }
</style>