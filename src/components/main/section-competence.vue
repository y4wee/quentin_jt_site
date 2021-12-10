<template>

    <div class="Competence sectionPin">
        <div class="CompetenceCadre">

        </div>
    </div>

</template>

<script>
export default {
    name: 'SectionCompetence',
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
    .Competence {
        display: flex;
        justify-content: center;
        align-items: center;
        // margin-top: 100vh;
        width: 100vw;
        height: 100vh;
        background-color: $greyColor2;
        &Cadre {
            // border: solid 5px black;
            box-shadow: 0 0 10px 0 $greyColor2;
            background-color: white;
            border-radius: 30px;
            width: 90%;
            height: 70vh;
            z-index: 2;
            transform: scale(0);
        }
    }
</style>