<template>
  <div class="fullname">
    {{ fullname }}
  </div>
</template>

<script>
export default {
  name: "VuexFullname",

  computed: {
    fullname() {
      return this.$store.getters.fullname
    }
  }
}
</script>