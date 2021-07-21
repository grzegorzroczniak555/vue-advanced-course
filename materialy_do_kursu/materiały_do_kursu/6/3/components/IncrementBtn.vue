<template>
    <div>
        <h1 class="super-header">Licznik</h1>
        <button @click="increment">{{counter}}</button>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                counter: 0
            };
        },
        methods: {
            increment(){
                this.counter++;
            }
        }
    };
</script>

<style>

</style>