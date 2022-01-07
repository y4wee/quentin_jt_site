<template>

    <div class="carouselCard">
        <flickity class="flickity" ref="flickity" :options="flickityOptions" :key="key">
            <div class="carousel-cell" v-for="skill in skills" :key="skill">
                <Card 
                :name="skill.name"
                :path="skill.path"
                :className="skill.className"
                :genre="skill.genre"
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
                    path: require('../../assets/images/html.svg'),
                    className: 'cardHtml',
                    genre: 'Skill',
                },
                {
                    name: 'CSS',
                    path: require('../../assets/images/css.svg'),
                    className: 'cardCss',
                    genre: 'Skill',
                },
                {
                    name: 'Javascript',
                    path: require('../../assets/images/javascript.svg'),
                    className: 'cardJavascript',
                    genre: 'Skill',
                },
                {
                    name: 'Vuejs',
                    path: require('../../assets/images/vuejs.svg'),
                    className: 'cardVue',
                    genre: 'Skill',
                },
                {
                    name: 'nodejs',
                    path: require('../../assets/images/nodejs.svg'),
                    className: 'cardNode',
                    genre: 'Skill',
                },
                {
                    name: 'NPM',
                    path: require('../../assets/images/npm.svg'),
                    className: 'cardNpm',
                    genre: 'Skill',
                },
                {
                    name: 'MySQL',
                    path: require('../../assets/images/mysql.svg'),
                    className: 'cardSql',
                    genre: 'Skill',
                },
                {
                    name: 'MongoDB',
                    path: require('../../assets/images/mongodb.svg'),
                    className: 'cardMongo',
                    genre: 'Skill',
                },
            ],
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
    .carouselCard {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
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