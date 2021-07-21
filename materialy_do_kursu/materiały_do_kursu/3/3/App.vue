<template>
  <div class="my-app">
      <b-container>
          <TheCardAdd/>
          <CardPlayer name="Darek" lastName="Nowy"/>
      </b-container>
  </div>
</template>

<script>
  import TheCardAdd from './components/TheCardAdd';
  import CardPlayer from './components/CardPlayer';
  export default {
    components: {
      TheCardAdd,
      CardPlayer
    }
  }
</script>

<style>
    .my-app{
      padding: 50px 0;
    }
</style>