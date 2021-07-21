<template>
    <div class='name'>
      {{ username }}
    </div>
</template>

<script>
export default {
  name: "VuexUsername",

  data() {
    return {
      username: this.$store.state.username
    }
  }
}
</script>