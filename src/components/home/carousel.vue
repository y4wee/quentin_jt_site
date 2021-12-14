<template>

    <div class="carousel">
        <flickity class="flickity" ref="flickity" :options="flickityOptions" :key="key">
            <div class="carousel-cell" v-for="(link, index) in links" :key="link">
                <div :class="'link link'+ index">
                    <div class="linkBackground" :style="{ height: height + 'px', width: height + 'px' }">

                        <div class="gear" 
                        v-for="gear in gears" 
                        :key="gear" 
                        :style="{ 
                            height: height + 12 + 'px',
                            transform: `rotateZ(${gearAngle * gear}deg)`
                         }"></div>

                        <div class="center" :style="{ 
                            height: height - 12 + 'px',
                            width: height - 12 + 'px',
                         }"></div>

                    </div>
                    <router-link :to="link.hash" :class="'linkText text'+ index" :style="{ color: link.color }">{{ link.text }}</router-link>
                </div>
            </div>
        </flickity>
    </div> 

</template>

<script>
import { gsap } from "gsap";
import Flickity from 'vue-flickity'

export default {
    name: 'Carrousel',
    components: {
        Flickity
    },
    data() {
        return {
            flickityOptions: {
                cellAlign: 'center',
                initialIndex: 0,
                prevNextButtons: true,
                wrapAround: true,
                on: {
                    change: this.flickityChange,
                    ready: this.flickityReady,
                    select: this.flickitySelect,
                    settle: this.flickitySettle,
                    scroll: this.flickityScroll,
                    dragStart: this.flickityDragStart,
                }
            },
            links: [
                {
                    text: 'About me',
                    hash: '/about',
                    color: 'rgb(86, 245 , 105)',
                },
                {
                    text: 'My work',
                    hash: '/work',
                    color: '#f556e2',
                },
                {
                    text: 'Contact me',
                    hash: '/contact',
                    color: 'rgb(28, 32, 32)',
                }
            ],
            gears: 20,
            height: 375,
            key: 0,
            currentIndex: 0,
        }
    },
    mounted: function() {
        window.addEventListener('resize', () => {
            this.reloadSize();
        })
        
    },
    methods: {
        reloadSize: function() {
            this.key++
        },
        flickityChange: function(index) {
            console.log('change ON'+ index)
        },
        flickityReady: function() {
            console.log('Ready ON')
            gsap.to(`.link${this.currentIndex}`, {
                scale: 1,
                duration: 0,
            })
        },
        flickitySelect: function(index) {
            console.log(index)
        },
        flickitySettle: function(index) {
            console.log('Settle ON' + index)
            this.currentIndex = index
            gsap.to(`.link${index}`, {
                scale: 1,
                duration: 0.2,

            })
        },
        flickityScroll: function() {
            // console.log(progress)
        },
        flickityDragStart: function() {
            console.log('draged')
            gsap.to(`.link${this.currentIndex}`, {
                scale: 0.4,
                duration: 0.2,
            })
        }
    },
    computed: {
        gearAngle(){
            return 180 / this.gears
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$mainColor: rgb(28, 32, 32);
$secondColor: rgb(233, 222, 190);
$greenColor: rgb(86, 245 , 105);
$purpleColor: #f556e2;
$testColorGray: rgb(61, 61, 61);
a {
    text-decoration: none;
}
.link {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    transform-origin: center;
    transform: scale(0.4);
    &Background {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        animation: rotate360 14s infinite linear;
        // animation-play-state: paused;
        background-color: $mainColor;
        & .gear {
            position: absolute;
            width: 10px;
            transform-origin: center;
            background-color: $mainColor;
        }
        & .center {
            position: absolute;
            border-radius: 50%;
            background-color: $secondColor;
        }
    }
    &Text {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: rotateZ(45deg);
        font-family: 'Ultra';
        font-size: 2rem;
    }
}
.flickity {
    transform: rotateZ(-90deg);
    height: 35vw;
    min-height: 350px;
    width: 120vh;
}

.carousel-cell {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: scale(0.7);
}
@keyframes rotate360 {
    from {
        transform: rotateZ(0deg);
    }
    to {
        transform: rotateZ(360deg);
    }
}
</style>