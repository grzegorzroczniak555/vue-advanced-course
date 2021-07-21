<template>
  <div id="app">
    <TrainingOne title="Witaj"/>
  </div>
</template>

<script>
import TrainingOne from './components/TrainingOne.vue'

export default {
  name: 'app',
  components: {
    TrainingOne
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap; 
}

.special-square {
        width: 100px;
        height: 100px;
        transition: 1s;
        will-change: border-radius;
        background: red;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        margin: 20px;
        cursor: pointer;
    }

    .--toCircle {
        border-radius: 50%;
    }

    .--toBlue{
        background: blue;
    }
</style>