<template>
  <div>
    <AnchoredHeader :level="1">Test</AnchoredHeader>
  </div>
</template>
 
<script>
import AnchoredHeader from './components/AnchoredHeader.vue'

export default {
  name: 'app',
  components: {
    AnchoredHeader
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
}
</style>
