<template>
  <div class="my-app">
      <b-container>
          <transition name="fade" mode="out-in">
              <div key="1" v-if="loading" class="d-flex justify-content-center my-5">
                <b-spinner variant="primary" />
              </div>

              <b-row v-else>
                <b-col sm="12">
                  <b-card
                    title="Autor cytatu"
                    tag="article"
                    class="my-2"
                  >
                    <div sm="12"><p>Treść cytatu</p></div>
                
                    <b-button variant="primary" size="sm" @click='getNewOne(index)'>Losuj kolejny</b-button>
                
                  </b-card>
              </b-col>
              </b-row>
        
          </transition>
      </b-container>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        loading: true,
        quotes: []
      };
    },
    methods: {
      async getNewOne(index){
        const url = `http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&timestamp=${new Date().getTime()}`;
      } 
    },
    async created(){
      this.loading = false;
    }
  }
</script>

<style>
    .my-app{
      padding: 50px 0;
    }

    /* Fade transition */
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
      opacity: 0;
    }
</style>