<template>
    <div 
        class="special-square" 
        @mouseover="mouseOver = true"
        @mouseout="mouseOver = false"
        @click="clicked = !clicked"
        :class="{'--toCircle': mouseOver, '--toBlue': clicked}"></div>
</template>

<script>
    export default {
        data(){
            return {
                mouseOver: false,
                clicked: false
            };
        }
    } 
</script>

<style>
    .special-square {
        width: 100px;
        height: 100px;
        transition: 1s;
        will-change: border-radius;
        background: red;
        
    }

    .--toCircle {
        border-radius: 50%;
    }

    .--toBlue{
        background: blue;
    }
</style>