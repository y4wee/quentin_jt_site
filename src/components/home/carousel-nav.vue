<template>

    <div class="carouselNav">
        <flickity class="flickity" ref="flickity" :options="flickityOptions" :key="key">
            <div class="carousel-cell" v-for="(link, index) in links" :key="link">
                <div :class="'link link'+ index">
                    <div class="linkBackground" :style="{ height: height + 'px', width: height + 'px' }">

                        <div class="gear" 
                        v-for="gear in gears" 
                        :key="gear" 
                        :style="{ 
                            height: height + 15 + 'px',
                            transform: `rotateZ(${gearAngle * gear}deg)`
                         }"></div>

                        <div class="center" :style="{ 
                            height: height - 15 + 'px',
                            width: height - 15 + 'px',
                         }"></div>

                    </div>
                    <div 
                    :class="'linkText '+ link.hash" 
                    :style="{
                        height: height - 15 + 'px',
                        width: height - 15 + 'px',
                        backgroundColor: link.color
                    }"> {{ link.text }} </div>
                </div>
            </div>
        </flickity>
    </div>

</template>

<script>
import { mapState } from 'vuex';
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
                prevNextButtons: false,
                wrapAround: true,
                on: {
                    change: this.flickityChange,
                    ready: this.flickityReady,
                    settle: this.flickitySettle,
                    dragStart: this.flickityDragStart,
                    staticClick: this.clickEvent,
                }
            },
            links: [
                {
                    text: 'About me',
                    hash: 'about',
                    color: 'rgba(86, 245 , 105, 0.7)',
                },
                {
                    text: 'My work',
                    hash: 'work',
                    color: 'rgba(242, 116, 5, 0.6)',
                },
                {
                    text: 'Contact me',
                    hash: 'contact',
                    color: 'rgba(245, 86, 226, 0.6)',
                }
            ],
            gears: 20,
            height: 375,
            key: 0,
        }
    },
    created: function() {
        this.flickityOptions.initialIndex = this.$store.state.carouselIndex;
    },
    mounted: function() {
        window.addEventListener('resize', () => {
            this.reloadSize();
        })
        
    },
    methods: {
        clickEvent: function( event, pointer, cellElement, cellIndex ) {
            if ( !cellElement || cellIndex === null) {
                return;
            }
            let hash = this.links[cellIndex].hash;
            let target = event.target.classList[1];
            if(target === hash) {
                this.$store.commit('cursorHoverState', { state: false, type: '' });
                let tl = gsap.timeline();

                tl.to('.homeWords', {scale: 0.75, duration: 0.3})
                tl.to('.homeWords', {yPercent: 100, duration: 0.5, ease: 'power4.in'}, '-=0.15')
                tl.to('.home', {yPercent: 100, duration: 0.5, ease: 'power4.in'}, '-=0.4')

                tl.then(() => {
                    this.$router.push(hash);
                })
            } else {
                return;
            }
        },
        reloadSize: function() {
            this.key++;
            this.flickityOptions.initialIndex = this.$store.state.carouselIndex;
        },
        flickityChange: function() {
            gsap.to(`.link${this.$store.state.carouselIndex}`, {
                scale: 0.4,
                duration: 0,
            })
        },
        flickityReady: function() {
            gsap.to(`.link${this.$store.state.carouselIndex}`, {
                scale: 0.7,
                duration: 0,
            })
        },
        flickitySettle: function(index) {
            this.$store.commit('activeIndex', index);
            gsap.to(`.link${index}`, {
                scale: 0.7,
                duration: 0.2,

            })
        },
        flickityDragStart: function() {
            gsap.to(`.link${this.$store.state.carouselIndex}`, {
                scale: 0.4,
                duration: 0.2,
            })
        },
    },
    computed: {
        ...mapState({
            carouselIndex: 'carouselIndex',
        }),
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
$purpleColor: rgb(245, 86, 226);
$orangeColor: rgb(242, 116, 5);
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
        background-color: $mainColor;
        & .gear {
            position: absolute;
            width: 14px;
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
        color: $mainColor;
        border-radius: 50%;
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
    // transform: scale(0.7);
}
@keyframes rotate360 {
    from {
        transform: rotateZ(0deg);
    }
    to {
        transform: rotateZ(360deg);
    }
}
@media all and (min-height: 701px) and (max-height: 800px) {
  .flickity {
    min-height: 300px;
  }
  .carousel-cell {
    //   transform: scale(0.6);
  }
}
@media all and (max-height: 700px) {
  .flickity {
    min-height: 240px;
  }
  .carousel-cell {
    //   transform: scale(0.5);
  }
}
@media all and (min-width: 1250px) {
  .carousel-cell {
    //   transform: scale(0.8);
  }
}
@media all and (min-width: 1400px) {
  .carousel-cell {
    //   transform: scale(0.9);
  }
}
@media all and (min-width: 1550px) {
  .carousel-cell {
    //   transform: scale(1);
  }
}
</style>