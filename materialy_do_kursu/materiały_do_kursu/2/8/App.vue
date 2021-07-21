<template>
  <b-container>
      <b-alert show>
        <h2>Lazy Loading</h2>
        <div class="image-wrapper" v-lazyLoad="'https://upload.wikimedia.org/wikipedia/commons/d/d9/Big_Bear_Valley%2C_California.jpg'">
          <b-spinner variant="primary" label="Spinning" />
        </div>
      </b-alert>
  </b-container>
</template>

<script>
  export default {
    directives: {

    }
  }
</script>

<style>
  .image-wrapper > img{
    max-width: 50%;
  }

  .image-wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0 60px; 
  }
</style>