<template>
  <div class='my-app'>
  <b-container>
    <b-form @submit="submit" @reset="reset">
      <b-form-group
        label="Adres email:"
        label-for="mail"
      >
        <b-form-input
          id="mail"
          type="email"
          v-model="email"
          placeholder="Wpisz email" />
      </b-form-group>

      <b-form-group label="Nazwa użytkownika:" label-for="name">
        <b-form-input
          id="name"
          type="text"
          v-model="name"
          placeholder="Wpisz nazwę użytkownika" />
      </b-form-group>

      <b-form-group label="Hasło:" label-for="password">
        <b-form-input
          id="password"
          type="password"
          v-model="password"
          placeholder="Wpisz hasło" />
      </b-form-group>

      <b-button type="submit" variant="primary">Wyślij</b-button> &nbsp;
      <b-button type="reset" variant="danger">Resetuj</b-button>
    </b-form>
  </b-container>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        name: '',
        email: '',
        password: ''
      };
    },
    methods: {
      submit(event){
        event.preventDefault();
      },
      reset(event){
        event.preventDefault();
        this.name = '';
        this.email = '';
        this.password = '';
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