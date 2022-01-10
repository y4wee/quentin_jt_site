<template>

    <div class="carouselCard">
        <flickity class="flickity" ref="flickity" :options="flickityOptions" :key="key">
            <div class="carousel-cell" v-for="skill in skills" :key="skill">
                <Card 
                :name="skill.name"
                :path="skill.path"
                :className="skill.className"
                :genre="skill.genre"
                :height="skillHeight"
                />
            </div>
        </flickity>
    </div>

</template>

<script>
import Card from './card.vue';
import Flickity from 'vue-flickity'

export default {
    name: 'CarouselCard',
    components: {
        Card,
        Flickity,
    },
    data() {
        return {
            flickityOptions: {
                wrapAround: true,
                cellAlign: 'center',
                initialIndex: 0,
                prevNextButtons: false,
                pageDots: false,
                draggable: false,
                autoPlay: 1400,
                selectedAttraction: 0.005,
                friction: 0.15,
                pauseAutoPlayOnHover: false,
            },
            skills: [
                {
                    name: 'HTML',
                    path: require('../../assets/images/html0.png'),
                    className: 'cardHtml',
                    genre: 'Skill',
                },
                {
                    name: 'CSS',
                    path: require('../../assets/images/css0.png'),
                    className: 'cardCss',
                    genre: 'Skill',
                },
                {
                    name: 'Javascript',
                    path: require('../../assets/images/javascript0.png'),
                    className: 'cardJavascript',
                    genre: 'Skill',
                },
                {
                    name: 'Vuejs',
                    path: require('../../assets/images/vuejs0.png'),
                    className: 'cardVue',
                    genre: 'Skill',
                },
                {
                    name: 'nodejs',
                    path: require('../../assets/images/nodejs0.png'),
                    className: 'cardNode',
                    genre: 'Skill',
                },
                {
                    name: 'MySQL',
                    path: require('../../assets/images/mysql0.png'),
                    className: 'cardSql',
                    genre: 'Skill',
                },
                {
                    name: 'MongoDB',
                    path: require('../../assets/images/mongo0.png'),
                    className: 'cardMongo',
                    genre: 'Skill',
                },
            ],
            skillHeight: 30,
            key: 0,
        }
    },
    mounted: function() {
        window.addEventListener('resize', () => {
            this.reloadSize();
        });
    },
    methods: {
        reloadSize: function() {
            this.key++;
        },
    },
}
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
    .carouselCard {
        width: 100%;
        height: calc(100% - 5px);
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: $secondColor;
        border: 5px solid $thirdColor;
        border-bottom: none;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        transform: translateY(100%);
    }
    .flickity {
        width: 100%;
        height: 100%;
    }
    .carousel-cell {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        // transform: scale(0.8);
        // &.is-selected .cardSkill{
            // transform: scale(1);
            // transition: transform 0.5s ease-out;
        // }
    }
    .cardSkill {
        transform: scale(0.8);
        // transition: transform 0.5s ease-out;
    }

</style>