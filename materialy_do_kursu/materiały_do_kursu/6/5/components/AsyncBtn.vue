<template>
    <div>
        <button @click="getData">Wczytaj dane</button>
        <span>{{bestPlayer}}</span>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                bestPlayer: null
            };
        },
        methods: {
            async getData(){ 
                let {data} = await this.$http.get('http://api.icndb.com/jokes/random');
                this.bestPlayer = data.player;
            }
        }
    };
</script>

<style>

</style>