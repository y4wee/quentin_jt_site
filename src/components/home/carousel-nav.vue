<template>

    <div class="carouselNav">
        <flickity class="flickity" ref="flickity" :options="flickityOptions" :key="key">
            <div class="carousel-cell" v-for="(link, index) in links" :key="link">
                <div class="carouselNavContainer">
                    <div :class="'link link'+ index">

                        <div class="linkBackground" :style="{ height: height + 'px', width: height + 'px' }">
                            <div class="gear" 
                            v-for="gear in gears" 
                            :key="gear" 
                            :style="{ 
                                height: height + 15 + 'px',
                                transform: `rotateZ(${gearAngle * gear}deg)`
                            }"></div>
                        </div>

                        <div 
                        :class="'linkText '+ link.hash" 
                        :style="{
                            height: height - 15 + 'px',
                            width: height - 15 + 'px',
                            backgroundColor: link.color
                        }"> {{ language === "Eng" ? link.text[0] : link.text[1] }} </div>

                        <div :class="'linkArrow linkArrow' + index">
                            <i class="fas fa-chevron-left linkArrowLeft"></i>
                            <i class="fas fa-chevron-right linkArrowRight"></i>
                        </div>

                    </div>
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
                    ready: this.flickityReady,
                    select: this.flickitySelect,
                    staticClick: this.clickEvent,
                    settle: this.flickitySettle,
                    dragStart: this.flickityDragStart,
                }
            },
            links: [
                {
                    text: ['About me', 'Me connaître'],
                    hash: 'about',
                    color: 'rgba(86, 245 , 105, 1)',
                },
                {
                    text: ['My work', 'Mon travail'],
                    hash: 'work',
                    color: 'rgba(242, 116, 5, 1)',
                },
                {
                    text: ['Contact me', 'Contactez moi'],
                    hash: 'contact',
                    color: 'rgba(245, 86, 226, 1)',
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
        });
    },
    methods: {
        clickEvent: function( event, pointer, cellElement, cellIndex ) {
            if ( !cellElement || cellIndex === null) {
                return;
            }
            let hash = this.links[cellIndex].hash;
            let target = event.target.classList[1];
            if(target === hash) {
                let tl = gsap.timeline();

                tl.to('.homeWords', {scale: 0.75, duration: 0.3})
                tl.to('.homeWordsBlockSlide', {yPercent: 100, duration: 0.5, ease: 'power4.in'}, '-=0.15')
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
        flickityReady: function() {
            gsap.to(`.link${this.$store.state.carouselIndex} .linkBackground`, {
                animationPlayState: 'running'
            });
            gsap.to(`.linkArrow${this.$store.state.carouselIndex}`, {
                opacity: 1,
                duration: 0,
            });
        },
        flickitySelect: function(index) {
            gsap.to(`.link${this.$store.state.carouselIndex} .linkBackground`, {
                animationPlayState: 'paused'
            });
            gsap.to(`.link${index} .linkBackground`, {
                animationPlayState: 'running',
                onComplete: this.$store.commit('activeIndex', index),
            });
        },
        flickitySettle: function(index) {
            gsap.to(`.linkArrow${index}`, {
                opacity: 1,
                duration: 1,
                ease: "power1.in"
            });
        },
        flickityDragStart: function() {
            gsap.killTweensOf(`.linkArrow${this.$store.state.carouselIndex}`)
            gsap.to(`.linkArrow${this.$store.state.carouselIndex}`, {
                opacity: 0,
                duration: 0.2,
                ease: "power1.out"
            });
        },
    },
    computed: {
        ...mapState({
            carouselIndex: 'carouselIndex',
            language: 'language',
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
$thirdColor: rgb(227, 223, 223);
$greenColor: rgb(86, 245 , 105);
$purpleColor: rgb(245, 86, 226);
$orangeColor: rgb(242, 116, 5);
$testColorGray: rgb(61, 61, 61);
$mainFont: 'Ultra';
$secondFont: 'Righteous';
a {
    text-decoration: none;
}
.carouselNavContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    transform-origin: center;
    height: 360px;
    width: 360px;
    transform: scale(0.7);
}
.link {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    transform-origin: center;
    // transform: scale(0.4);
    height: 360px;
    width: 360px;
    border-radius: 50%;
    &Background {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        -webkit-animation: rotate360 14s infinite linear;
        animation: rotate360 14s infinite linear;
        animation-play-state: paused;
        background-color: $mainColor;
        & .gear {
            position: absolute;
            width: 14px;
            transform-origin: center;
            background-color: $mainColor;
        }
    }
    &Text {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: rotateZ(45deg) translateZ(1000px);
        font-family: $mainFont;
        font-size: 2rem;
        color: $mainColor;
        border-radius: 50%;
    }
    &Arrow {
        position: absolute;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 130%;
        transform: rotateZ(45deg);
        pointer-events: none;
        opacity: 0;
        & .fas {
            font-size: 2.5rem;
            color: rgb(22, 33, 65);
        }
        &Left {
            animation: pulseLeft 0.8s infinite alternate ease-in-out;
        }
        &Right {
            animation: pulseRight 0.8s infinite alternate ease-in-out;
        }
    }
}
.flickity {
    transform: rotateZ(-90deg);
    height: 35vw;
    min-height: 350px;
    width: 140vh;
}

.carousel-cell {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
//animation pulse arrowLeft
@keyframes pulseLeft {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-50%);
    }
}
@-webkit-keyframes pulseLeft {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-50%);
    }
}
//animation pulse arrowRight
@keyframes pulseRight {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(50%);
    }
}
@-webkit-keyframes pulseRight {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(50%);
    }
}
// animation rotation gears 
@-webkit-keyframes rotate360 {
    from {
        transform: rotateZ(0deg);
    }
    to {
        transform: rotateZ(360deg);
    }
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
  .carouselNavContainer {
      transform: scale(0.6);
  }
}
@media all and (max-height: 700px) {
  .flickity {
    min-height: 240px;
  }
  .carouselNavContainer {
      transform: scale(0.5);
  }
}
@media all and (min-width: 1250px) {
    .carouselNavContainer {
      transform: scale(0.8);
  }
}
@media all and (min-width: 1400px) {
    .carouselNavContainer {
      transform: scale(0.9);
  }
}
@media all and (min-width: 1550px) {
    .carouselNavContainer {
      transform: scale(1);
  }
}
</style>