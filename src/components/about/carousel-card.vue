<template>

    <div class="carouselCard">
        <flickity class="flickity" ref="flickity" :options="flickityOptions" :key="key">
            <div class="carousel-cell" v-for="(skill, index) in skills" :key="skill">
                <Card 
                :name="skill.name"
                :path="skill.path"
                :alt="skill.alt"
                :genre="skill.genre + ' card' + index"
                />
            </div>
        </flickity>
    </div>

</template>

<script>
import Card from './card.vue';
// import { gsap } from "gsap";
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
                // freeScroll: true,
                draggable: false,
                autoPlay: 1500,
                selectedAttraction: 0.005,
                friction: 0.15,
                pauseAutoPlayOnHover: false,
                // freeScrollFriction: 1,
                on: {
                    // change: this.flickityChange,
                    // ready: this.flickityReady,
                    // settle: this.flickitySettle,
                    // dragStart: this.flickityDragStart,
                //     staticClick: this.clickEvent,
                }
            },
            skills: [
                {
                    name: 'HTML',
                    path: require('../../assets/images/html.svg'),
                    alt: 'image logo HTML',
                    genre: 'Skill',
                },
                {
                    name: 'CSS',
                    path: require('../../assets/images/css.svg'),
                    alt: 'image logo CSS',
                    genre: 'Skill',
                },
                {
                    name: 'Javascript',
                    path: require('../../assets/images/javascript.svg'),
                    alt: 'image logo Javascript',
                    genre: 'Skill',
                },
                {
                    name: 'Vuejs',
                    path: require('../../assets/images/vuejs.svg'),
                    alt: 'image logo Vuejs',
                    genre: 'Skill',
                },
                {
                    name: 'nodejs',
                    path: require('../../assets/images/nodejs.svg'),
                    alt: 'image logo Nodejs',
                    genre: 'Skill',
                },
                {
                    name: 'NPM',
                    path: require('../../assets/images/npm.svg'),
                    alt: 'image logo NPM',
                    genre: 'Skill',
                },
                {
                    name: 'MySQL',
                    path: require('../../assets/images/mysql.svg'),
                    alt: 'image logo MySQL',
                    genre: 'Skill',
                },
                {
                    name: 'MongoDB',
                    path: require('../../assets/images/mongodb.svg'),
                    alt: 'image logo MongoDB',
                    genre: 'Skill',
                },
            ],
            index: 0,
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
        // flickitySettle: function(index) {
        //     gsap.to(`.cardSkill.card${index}`, {
        //         scale: 1,
        //         duration: 0.2,
        //     });
        //     this.index = index;
        // },
        // flickityChange: function() {
        //     gsap.to(`.cardSkill.card${this.index}`, {
        //         scale: 0.8,
        //         duration: 0,
        //     });
        // },
        // flickityReady: function() {
        //     gsap.to(`.cardSkill.card${this.index}`, {
        //         scale: 1,
        //         duration: 0,
        //     });
        // },
        // flickityDragStart: function() {
        //     gsap.to(`.cardSkill.card${this.index}`, {
        //         scale: 0.8,
        //         duration: 0.2,
        //     })
        // },
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
        &.is-selected .cardSkill{
            transform: scale(1);
            transition: transform 0.5s ease-out;
        }
    }
    .cardSkill {
        transform: scale(0.8);
        transition: transform 0.5s ease-out;
    }

</style>