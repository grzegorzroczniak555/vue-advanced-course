<template>
  <div class="my-app">
      <b-container>
          <TheCardAdd @add="add2"/>

          <transition name="fade" mode="out-in">
              <div key="1" v-if="loading" class="d-flex justify-content-center my-5">
                <b-spinner variant="primary" />
              </div>

              <b-row key="2" v-else>
                <b-col sm="3">
                  <CardPlayer name="Darek" lastName="Nowy"/>
                </b-col>
                <b-col sm="3">
                  <CardPlayer name="Darek" lastName="Nowy"/>
                </b-col>
                <b-col sm="3">
                  <CardPlayer name="Darek" lastName="Nowy"/>
                </b-col>
                <b-col sm="3">
                  <CardPlayer name="Darek" lastName="Nowy"/>
                </b-col>
                <b-col sm="3">
                  <CardPlayer name="Darek" lastName="Nowy"/>
                </b-col>
              </b-row>
          </transition>
      </b-container>
  </div>
</template>

<script>
  import TheCardAdd from './components/TheCardAdd';
  import CardPlayer from './components/CardPlayer';
  export default {
    data(){
      return {
        loading: true
      };
    },
    components: {
      TheCardAdd,
      CardPlayer
    },
    methods: {
      add(userData){
        this.axios.post('https://adv-vue.firebaseio.com/players.json', userData)
        .then(response => {
          console.log('Sukces', response);
        })
        .catch(err => console.log('Err', err));
      },
      async add2(userData){
        try {
          let response = await this.axios.post('https://adv-vue.firebaseio.com/players.json', userData);
          console.log('Async Sukces', response);
        } catch(e) {
          console.log('Async Error', e)
        }
      }
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