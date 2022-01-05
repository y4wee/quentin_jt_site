<template>

    <div class="social" >
        <div :class="'socialLink ' + link.name" v-for="link in socialLinks" :key="link">
            <a :href="link.hash" target="_blank" :class="'socialLinkGear ' + link.rotate"></a>
            <div class="socialLinkText">
                <i :class="link.class"></i>
            </div>
        </div>
    </div>

</template>

<script>
// import { gsap } from "gsap";

export default {
    name: 'Social',
    data() {
        return {
            socialLinks: [
                {
                    name: 'github',
                    class: 'fab fa-github',
                    hash: 'https://github.com/y4wee',
                    rotate: 'left',
                },
                {
                    name: 'linkedIn',
                    class: 'fab fa-linkedin-in',
                    hash: 'https://www.linkedin.com/in/quentin-jambert-4488ab209/',
                    rotate: 'right',
                },
                {
                    name: 'twitter',
                    class: 'fab fa-twitter',
                    hash:'https://twitter.com/Quentin_Jt',
                    rotate: 'left',
                }
            ]
        }
    },
    methods: {
        
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$gearColor: white;
$mainColor: rgb(28, 32, 32);
$secondColor: rgb(233, 222, 190);
$thirdColor: rgb(227, 223, 223);
$greenColor: rgb(86, 245 , 105);
$purpleColor: rgb(245, 86, 226);
$orangeColor: rgb(242, 116, 5);
$testColorGray: rgb(61, 61, 61);
$mainFont: 'Ultra';
$secondFont: 'Righteous';
.social {
    display: flex;
}
.socialLink {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    &.github {
        bottom: 64px;
    }
    &.linkedIn {
        bottom: 14.5px;
        left: 28px;
    }
    &.twitter {
        bottom: 14.5px;
        left: 85px;
    }
    &Gear {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        background: $gearColor;
        border-radius: 50%;
        &.right {
            -webkit-animation: gearRotateLeft 2s infinite linear;
            animation: gearRotateLeft 2s infinite linear;
        }
        &.left {
            -webkit-animation: gearRotateRight 2s infinite linear;
            animation: gearRotateRight 2s infinite linear;
        }
        &::before {
            content:"";
            position: absolute;
            width: 64px;
            height: 64px;
            background: linear-gradient(0deg,transparent 39%,$gearColor 39%,$gearColor 61%, transparent 61%),
            linear-gradient(60deg,transparent 42%,$gearColor 42%,$gearColor 58%, transparent 58%),
            linear-gradient(120deg,transparent 42%,$gearColor 42%,$gearColor 58%, transparent 58%);
            border-radius: 50%;
        }
        &::after {
            content:"";
            position: absolute;
            width: 42px;
            height: 42px;
            background: $gearColor;
            border-radius: 50%;
        }
    }
    &Text {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Ultra';
        font-size: 2rem;
        user-select: none;
        color: black;
        pointer-events: none;
    }
}
@-webkit-keyframes gearRotateLeft {
  from { 
    transform: rotateZ(30deg);
  }
  to { 
    transform: rotateZ(390deg); 
  }
}
@keyframes gearRotateLeft {
  from { 
    transform: rotateZ(30deg);
  }
  to { 
    transform: rotateZ(390deg); 
  }
}
@keyframes gearRotateRight {
  from { 
    transform: rotateZ(0deg);
  }
  to { 
    transform: rotateZ(-360deg); 
  }
}
@keyframes gearRotateRight {
  from { 
    transform: rotateZ(0deg);
  }
  to { 
    transform: rotateZ(-360deg); 
  }
}
@-webkit-keyframes gearRotateRight {
  from { 
    transform: rotateZ(0deg);
  }
  to { 
    transform: rotateZ(-360deg); 
  }
}
</style>