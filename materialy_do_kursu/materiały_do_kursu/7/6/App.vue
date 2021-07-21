<template>
  <div id="app">
    <Functional class="special-clk" :name="name"/>
    <input type="text" v-model="name"/>
  </div>
</template>

<script>
import Functional from './components/Functional.js'

export default {
  name: 'app',
  data(){
    return {
      name: 'Amadeusz'
    };
  },
  components: {
    Functional
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