<template>
  <div class='my-app'>
    <b-container>
      <b-col sm="12">
        <h2>Dodawanie pytania</h2>
          <b-form @submit="onSubmit" @reset="onReset">
            <b-form-group
              label="Pytanie:"
              label-for="question"
              description="Przemyśl je dobrze ;)"
            >
              <b-form-input
                id="question"
                type="text"
                v-model.trim="question"
                @input="$v.question.$model = $event.trim()"
                :state="!$v.question.$dirty ? null : !$v.question.$error"
                placeholder="Treść pytania" />
                <b-form-invalid-feedback>
                  <p v-if="!$v.question.required">To pole jest wymagane!</p>
                  <p v-if="!$v.question.minLength">Pytanie musi mieć długość conajmniej 10 znaków</p>
                </b-form-invalid-feedback>
                <b-form-valid-feedback>
                  Wszystko jest okej!
                </b-form-valid-feedback>
            </b-form-group>

            <b-alert variant="danger" :show="!$v.answers.minLength || !$v.answers.required">Musisz dodać conajmniej 2 odpowiedzi!</b-alert>

            <b-row>
              <b-col sm="6" :key="`answ-${index}`" v-for="(answer, index) in answers">
                <b-form-group 
                  :label="`Odpowiedź ${index+1}`"
                  :label-for="`answer-${index+1}`"
                >
                  <b-form-input
                    id="`answer-${index+1}`"
                    type="text"
                    v-model.trim="answers[index]"
                    @input="$v.answers.$each[index].$model = $event.trim()"
                    :state="!$v.answers.$each[index].$dirty ? null : !$v.answers.$each[index].$error"
                    placeholder="Treść odpowiedzi" />

                    <b-form-invalid-feedback>
                      <p v-if="!$v.answers.$each[index].required">To pole jest wymagane!</p>
                      <p v-if="!$v.answers.$each[index].minLength">Odpowiedź musi składać się z conajmniej 5 znaków!</p>
                    </b-form-invalid-feedback>
                    <b-form-valid-feedback>
                      Wszystko jest okej!
                    </b-form-valid-feedback>
                </b-form-group>
              </b-col>
            </b-row>
     
            <b-button variant="primary" @click="answers.push('')">Dodaj nową odpowiedź</b-button>
            &nbsp; <b-button variant="danger" :disabled="answers.length < 1" @click="answers.pop()">Usuń ostatnią odpowiedź</b-button>
            &nbsp; <b-button variant="success" :disabled="$v.$invalid" type="submit">Wyślij</b-button>
          </b-form>
      </b-col>
    </b-container>
  </div>
</template>

<script>
  import { required, minLength } from 'vuelidate/lib/validators';

  export default {
    data(){
      return {
        question: '',
        answers: ['', '']
      };
    },
    validations: {
      question: {
        required,
        minLength: minLength(10)
      },
      answers: {
        required,
        minLength: minLength(2),
        $each: {
            required,
            minLength: minLength(5)
        }
      }
    },
    methods: {
      onSubmit(event){
        event.preventDefault();
        this.$v.$touch();
        if(this.$v.$invalid) {
          alert('Błąd!')
        } else {
          alert('Wysłano!')
        }
      },
      onReset(event){
        event.preventDefault();
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