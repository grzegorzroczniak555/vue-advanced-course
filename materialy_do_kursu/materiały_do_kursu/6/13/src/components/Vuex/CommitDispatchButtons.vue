<template>
  <div>
    <button 
      class="commit" 
      @click="commitMutation">
      Commit
    </button>

    <button 
      class="dispatch" 
      @click="dispatchAction">
      Dispatch
    </button>
  </div>
</template>

<script>
export default {
  name: "CommitDispatchButtons",
  methods: {
    commitMutation(){
      this.$store.commit("myMutation", { secretMsg: "So much code!" })
    },
    dispatchAction(){
      this.$store.dispatch("myAction", { secretMsg: "Less code!" })
    }
  }
}
</script>