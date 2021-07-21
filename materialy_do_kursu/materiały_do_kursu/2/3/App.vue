<template>
  <div id="app">
      <p v-padding v-if="visible">Hej!</p>
      Wyświetlić paragraf?: <input type="checkbox" v-model="visible"/>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        visible: true
      };
    }
  }
</script>

<style>
   
</style>