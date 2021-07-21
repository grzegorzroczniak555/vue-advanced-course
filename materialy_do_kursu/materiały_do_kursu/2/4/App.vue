<template>
  <div id="app">
      <p v-padding v-if="visible">Hej, {{whichName ? 'Tomek' : 'Darek'}}!</p>
      Wyświetlić paragraf?: <input type="checkbox" v-model="visible"/>
      Tomek/Darek: <input type="checkbox" v-model="whichName"/>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        visible: true,
        whichName: true
      };
    }
  }
</script>

<style>
   
</style>