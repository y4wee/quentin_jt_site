<template>
    <div :class="'card card' + genre + ' ' + className"
    :style="{
        height: `${height}vh`,
        width: `${height * 3 / 5}vh`
    }">

        <div class="cardImage"
        :style="{
            backgroundImage: `url(${path})`,
        }"
        >
        </div>

        <div class="cardText"
        :style="{
            fontSize: `${height / 10}vh`,
        }"
        >{{ name }}</div>

    </div>
</template>

<script>
export default {
    name: "Card",
    props: ["name", "path", "className", "genre", "height"],
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
.card {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    // width: 30vh;
    // height: 50vh;
    background-color: $thirdColor;
    border: solid 5px $thirdColor;
    border-radius: 10px;
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.8);
    &Image {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 88%;
        width: calc(100% - 6px);
        border: solid 3px $mainColor;
        border-radius: 10px;
        background-size: auto 100%;
        background-repeat: no-repeat;
    }
    &Text {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        height: 12%;
        font-family: $secondFont;
        // font-size: 4vh;
        color: $mainColor;
    }
}
.cardRuler {
    & .cardImage {
        background-position: 63% 50%;
    }
}
.cardSkill {
    & .cardImage {
        // background-size: 50% 50%;
        background-position: 50% 75%;
        // animation: levitation 6s infinite ease-in-out;
    }
}
.cardWork {
    & .cardImage {
        background-position: 30% 50%;
    }
}
</style>
