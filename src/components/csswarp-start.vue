<template>

    <div class="CssWarp">
        <div id='warped'>
            <span class='w0'>W</span>
            <span class='w1'>e</span>
            <span class='w2'>l</span>
            <span class='w3'>c</span>
            <span class='w4'>o</span>
            <span class='w5'>m</span>
            <span class='w6'>e</span>
        </div>
    </div>

</template>

<script>
export default {
    name: 'CssWarp',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    #warped {position: relative; display: block; width:300px; height:300px;color: darken($color: rgb(96, 96 , 96), $amount: 20%);}

    #warped>span[class^=w]:nth-of-type(n+0){display:block; position:absolute;
    -moz-transform-origin:50% 100%; -webkit-transform-origin:50% 100%; -o-transform-origin:50%
    100%; -ms-transform-origin:50% 100%; transform-origin:50% 100%; }

    #warped span{font-family: 'M PLUS 2', sans-serif;font-size:1.563em;font-weight:regular;font-style:normal;
    line-height:1.1; white-space:pre; overflow:visible; padding:0px;}

    #warped .w0 {-moz-transform: rotate(4.27rad);-webkit-transform: rotate(4.27rad);-o-transform:
    rotate(4.27rad);-ms-transform: rotate(4.27rad); transform: rotate(4.27rad);
    width: 24px; height: 28px; left: 29.14px; top: 172.5px;}

    #warped .w1 {-moz-transform: rotate(4.47rad);-webkit-transform: rotate(4.47rad);-o-transform:
    rotate(4.47rad);-ms-transform: rotate(4.47rad); transform: rotate(4.47rad);
    width: 14px; height: 28px; left: 26.28px; top: 149.87px;}

    #warped .w2 {-moz-transform: rotate(4.61rad);-webkit-transform: rotate(4.61rad);-o-transform:
    rotate(4.61rad);-ms-transform: rotate(4.61rad); transform: rotate(4.61rad);
    width: 9px; height: 28px; left: 26.06px; top: 133.61px;}

    #warped .w3 {-moz-transform: rotate(4.74rad);-webkit-transform: rotate(4.74rad);-o-transform:
    rotate(4.74rad);-ms-transform: rotate(4.74rad); transform: rotate(4.74rad);
    width: 12px; height: 28px; left: 24.06px; top: 118.13px;}

    #warped .w4 {-moz-transform: rotate(4.89rad);-webkit-transform: rotate(4.89rad);-o-transform:
    rotate(4.89rad);-ms-transform: rotate(4.89rad); transform: rotate(4.89rad);
    width: 15px; height: 28px; left: 24.57px; top: 99.76px;}

    #warped .w5 {-moz-transform: rotate(5.09rad);-webkit-transform: rotate(5.09rad);-o-transform:
    rotate(5.09rad);-ms-transform: rotate(5.09rad); transform: rotate(5.09rad);
    width: 23px; height: 28px; left: 27.34px; top: 76.77px;}

    #warped .w6 {-moz-transform: rotate(5.29rad);-webkit-transform: rotate(5.29rad);-o-transform:
    rotate(5.29rad);-ms-transform: rotate(5.29rad); transform: rotate(5.29rad);
    width: 14px; height: 28px; left: 42.77px; top: 56.01px;}
</style>