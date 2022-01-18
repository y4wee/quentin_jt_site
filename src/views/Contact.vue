<template>

    <div class="contact">
        <div class="contactBack" >
            <ButtonBack 
            :name="name"
            :color="color" 
            />
        </div>
        <div class="contactMain">
            <div class="contactMainText" v-if="language === 'Eng'">
                Hey ! <br/>
                Don't hesitate to contact me, <br/>
                by sending me an @mail,<br/> 
                or with social networks whose links are <br/>
                located at the bottom left of your screen, <br/>
                see you soon.
            </div>
            <div class="contactMainText" v-else>
                Hey ! <br/>
                N'hésitez pas à me contacter, <br/>
                en m'envoyant un @mail,<br/> ou alors via les réseaux sociaux <br/>
                dont les liens se situent en bas à gauche de votre écran, <br/>
                à bientot.
            </div>
            <div class="contactMainEmail">
                <i class="fas fa-envelope"></i>
                <span>quentin.jambert@gmail.com</span>
            </div>
        </div>
        <img class="contactMainImage" src="../assets/images/contact0.png" alt="portrait" loading="eager" >
    </div>

</template>

<script>
import { mapState } from 'vuex';
import { gsap } from "gsap";
import ButtonBack from "../components/app/button-back.vue";

export default {
    name: 'Contact',
    components: {
    ButtonBack
    },
    data() {
        return {
            name: 'contact',
            color: 'rgba(245, 86, 226, 1)',
        }
    },
    mounted: function() {
        this.arriveTransition()  
    },
    methods: {
        arriveTransition: function() {
            let tl = gsap.timeline()

            tl.delay(0.25)

            tl.from('.contact', {yPercent: 100, duration: 0.4, ease: 'power4.out'})
            tl.to('header', {xPercent: -50, duration: 0.5, ease: 'power4.out'}, '-=0.1')
            tl.to('.logo', {xPercent: 50, duration: 0.5, ease: 'power4.out'}, '-=0.5')
            tl.from('.contactBack', {opacity: 0, duration: 0.5, ease: 'power1.in'}, '-=0.45')
            tl.from('.contactMainText', {opacity: 0, xPercent: -50, duration: 0.5, ease: 'power4.out'}, '-=0.5')
            tl.from('.contactMainEmail', {opacity: 0, xPercent: 50, duration: 0.5, ease: 'power4.out'}, '-=0.5')
        },
    },
    computed: {
        ...mapState({
            language: 'language',
        }),
    },
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
.contact {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    &Main {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90%;
        height: calc(100% - 75px);
        &Text {
            z-index: 2;
            background-color: $secondColor;
            color: $mainColor;
            margin-top: 2%;
            border-radius: 10px;
            font-family: $mainFont;
            font-size: 2.2vh;
            padding: 5px;
            user-select: none;
        }
        &Email {
            z-index: 2;
            display: flex;
            align-items: center;
            flex-direction: column;
            height: 50px;
            margin-top: 2%;
            color: $thirdColor;
            border-radius: 10px;
            font-family: $secondFont;
            font-size: 1.2rem;
            & .fas {
                font-size: 2rem;
                margin: 1% 0;
                color: $purpleColor;
            }
        }
        &Image {
            position: absolute;
            bottom: 0;
            height: 50%;
        }
    }
}
@media all and (max-height: 550px) {
    
}
@media all and (min-width: 701px) and (max-width: 1024px) {
    .contactMain {
        width: 75%;
    }
}
@media all and (min-width: 1025px) {
    .contactMain {
        width: 60%;
    }
}
</style>