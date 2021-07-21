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
                v-model="question"
                placeholder="Treść pytania" />
            </b-form-group>
            <b-row>
              <b-col sm="6" :key="`answ-${index}`" v-for="(answer, index) in answers">
                <b-form-group 
                  :label="`Odpowiedź ${index+1}`"
                  :label-for="`answer-${index+1}`"
                >
                  <b-form-input
                    id="`answer-${index+1}`"
                    type="text"
                    v-model="answers[index]"
                    placeholder="Treść odpowiedzi" />
                </b-form-group>
              </b-col>
            </b-row>
            <b-button variant="primary" @click="answers.push('')">Dodaj nową odpowiedź</b-button>
            &nbsp; <b-button variant="danger" @click="answers.pop()">Usuń ostatnią odpowiedź</b-button>
            &nbsp; <b-button variant="success" type="submit">Wyślij</b-button>
          </b-form>
      </b-col>
    </b-container>
  </div>
</template>

<script>
  //import { required, minLength, email, sameAs } from 'vuelidate/lib/validators';

  export default {
    data(){
      return {
        question: '',
        answers: ['', '']
      };
    },
    validations: {
      
    },
    methods: {
      onSubmit(event){
        event.preventDefault();
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