<template>
  <div class='my-app'>
  <b-container>
    <b-row>
<b-col sm="6">
      <h2>Rejestracja</h2>
      <b-form @submit="submit" @reset="reset">
        <b-form-group
          label="Adres email:"
          label-for="mail"
        >
          <b-form-input
            id="mail"
            type="email"
            v-model.trim="email"
            @input="$v.email.$model = $event.trim()"
            :state="!$v.email.$dirty ? null : !$v.email.$error"
            placeholder="Wpisz email" />
            <b-form-invalid-feedback>
              <p v-if="!$v.email.required">To pole jest wymagane!</p>
              <p v-if="!$v.email.email">Niepoprawny adres email!</p>
            </b-form-invalid-feedback>
            <b-form-valid-feedback>
              Wszystko jest okej!
            </b-form-valid-feedback>
        </b-form-group>

        <b-form-group label="Nazwa użytkownika:" label-for="name">
          <b-form-input
            id="name"
            type="text"
            v-model.trim="name"
            @input="$v.name.$model = $event.trim()"
            :state="!$v.name.$dirty ? null : !$v.name.$error"
            placeholder="Wpisz nazwę użytkownika" />
            <b-form-invalid-feedback>
              <p v-if="!$v.name.required">To pole jest wymagane!</p>
              <p v-if="!$v.name.minLength">Nazwa użytkownika musi się składać z conajmniej 5 znaków!</p>
            </b-form-invalid-feedback>
            <b-form-valid-feedback>
              Wszystko jest okej!
            </b-form-valid-feedback>
        </b-form-group>

        <b-form-group label="Hasło:" label-for="password">
          <b-form-input
            id="password"
            type="password"
            v-model="password"
            @input="$v.password.$model = $event"
            :state="!$v.password.$dirty ? null : !$v.password.$error"
            placeholder="Wpisz hasło" />
            <b-form-invalid-feedback>
              <p v-if="!$v.password.required">To pole jest wymagane!</p>
              <p v-if="!$v.password.minLength">Hasło musi się składać z conajmniej 8 znaków!</p>
            </b-form-invalid-feedback>
            <b-form-valid-feedback>
              Wszystko jest okej!
            </b-form-valid-feedback>
        </b-form-group>

        <b-form-group label="Powtórz hasło:" label-for="repeat_password">
          <b-form-input
            id="repeat_password"
            type="password"
            v-model="password"
            @input="$v.password.$model = $event"
            :state="!$v.password.$dirty ? null : !$v.password.$error"
            placeholder="Wpisz hasło" />
            <b-form-invalid-feedback>
              <p v-if="!$v.password.required">To pole jest wymagane!</p>
              <p v-if="!$v.password.minLength">Hasło musi się składać z conajmniej 8 znaków!</p>
            </b-form-invalid-feedback>
            <b-form-valid-feedback>
              Wszystko jest okej!
            </b-form-valid-feedback>
        </b-form-group>

        <b-button type="submit" variant="primary">Wyślij</b-button> &nbsp;
        <b-button type="reset" variant="danger">Resetuj</b-button>
      </b-form>
    </b-col>

    <b-col sm="6">
      <h2>Logowanie</h2>
      <b-form @submit="submit" @reset="reset">
        <b-form-group
          label="Adres email:"
          label-for="mail"
        >
          <b-form-input
            id="mail"
            type="email"
            v-model.trim="email"
            @input="$v.email.$model = $event.trim()"
            :state="!$v.email.$dirty ? null : !$v.email.$error"
            placeholder="Wpisz email" />
            <b-form-invalid-feedback>
              <p v-if="!$v.email.required">To pole jest wymagane!</p>
              <p v-if="!$v.email.email">Niepoprawny adres email!</p>
            </b-form-invalid-feedback>
            <b-form-valid-feedback>
              Wszystko jest okej!
            </b-form-valid-feedback>
        </b-form-group>

        <b-form-group label="Nazwa użytkownika:" label-for="name">
          <b-form-input
            id="name"
            type="text"
            v-model.trim="name"
            @input="$v.name.$model = $event.trim()"
            :state="!$v.name.$dirty ? null : !$v.name.$error"
            placeholder="Wpisz nazwę użytkownika" />
            <b-form-invalid-feedback>
              <p v-if="!$v.name.required">To pole jest wymagane!</p>
              <p v-if="!$v.name.minLength">Nazwa użytkownika musi się składać z conajmniej 5 znaków!</p>
            </b-form-invalid-feedback>
            <b-form-valid-feedback>
              Wszystko jest okej!
            </b-form-valid-feedback>
        </b-form-group>

        <b-form-group label="Hasło:" label-for="password">
          <b-form-input
            id="password"
            type="password"
            v-model="password"
            @input="$v.password.$model = $event"
            :state="!$v.password.$dirty ? null : !$v.password.$error"
            placeholder="Wpisz hasło" />
            <b-form-invalid-feedback>
              <p v-if="!$v.password.required">To pole jest wymagane!</p>
              <p v-if="!$v.password.minLength">Hasło musi się składać z conajmniej 8 znaków!</p>
            </b-form-invalid-feedback>
            <b-form-valid-feedback>
              Wszystko jest okej!
            </b-form-valid-feedback>
        </b-form-group>

        <b-button type="submit" variant="primary">Wyślij</b-button> &nbsp;
        <b-button type="reset" variant="danger">Resetuj</b-button>
      </b-form>
    </b-col>
    </b-row>
  </b-container>
  </div>
</template>

<script>
  import { required, minLength, email } from 'vuelidate/lib/validators';

  export default {
    data(){
      return {
        name: '',
        email: '',
        password: ''
      };
    },
    validations: {
      name: {
        required,
        minLength: minLength(5)
      },
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(8)
      }
    },
    methods: {
      submit(event){
        event.preventDefault();
        this.$v.$touch();
        if(this.$v.$invalid) {
          alert('Błąd!');
        } else {
          alert('Wysłano!');
        }
      
      },
      reset(event){
        event.preventDefault();
        this.name = '';
        this.email = '';
        this.password = '';

        this.$v.$reset();
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