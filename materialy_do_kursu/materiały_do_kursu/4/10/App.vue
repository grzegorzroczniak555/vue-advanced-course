<template>
  <div class='my-app'>
    <b-container>
      <b-col sm="12">
        <h2>Dodawanie lokacji</h2>
          <b-form @submit="onSubmit" @reset="onReset">
            <b-form-group
              label="Nazwa lokacji:"
              label-for="loc_name"
            >
              <b-form-input
                id="loc_name"
                type="text"
                v-model.trim="locName"
                :state="!$v.locName.$dirty ? null : !$v.locName.$error"
                @input="$v.locName.$model = $event.trim()"
                placeholder="Nazwa lokacji" />
                <b-form-invalid-feedback>
                  <p v-if="!$v.locName.required">To pole jest wymagane!</p>
                  <p v-if="!$v.locName.minLength">Nazwa lokacji musi mieć długość conajmniej 5 znaków</p>
                </b-form-invalid-feedback>
                <b-form-valid-feedback>
                  Wszystko jest okej!
                </b-form-valid-feedback>
            </b-form-group>

            <b-form-group
              label="Minimalny poziom:"
              label-for="loc_minlevel"
            >
              <b-form-input
                id="loc_minlevel"
                type="number"
                v-model.trim="locMinLvl"
                :state="!$v.locMinLvl.$dirty ? null : !$v.locMinLvl.$error"
                @input="$v.locMinLvl.$model = $event.trim()"
                placeholder="Minimalny poziom lokacji" />
                <b-form-invalid-feedback>
                  <p v-if="!$v.locMinLvl.required">To pole jest wymagane!</p>
                  <p v-if="!$v.locMinLvl.minLevel">Minimalny poziom dodawanej lokacji to 10</p>
                </b-form-invalid-feedback>
                <b-form-valid-feedback>
                  Wszystko jest okej!
                </b-form-valid-feedback>
            </b-form-group>

            <b-form-group
              label="Czy ma opis:"
              label-for="loc_hasDesc"
            >
              <b-form-checkbox
                switch
                id="loc_hasDesc"
                v-model="hasDescription" />
            </b-form-group>

            <b-form-group
              v-if="hasDescription"
              label="Opis lokacji:"
              label-for="loc_desc"
            >
              <b-form-input
                id="loc_desc"
                type="text"
                v-model.trim="locDesc"
                @input="$v.locDesc.$model = $event.trim()"
                :state="!$v.locDesc.$dirty ? null : !$v.locDesc.$error"
                placeholder="Opis lokacji" />
                <b-form-invalid-feedback>
                  <p v-if="!$v.locDesc.required">To pole jest wymagane!</p>
                  <p v-if="!$v.locDesc.minLength">Opis musi mieć długość conajmniej 10 znaków</p>
                </b-form-invalid-feedback>
                <b-form-valid-feedback>
                  Wszystko jest okej!
                </b-form-valid-feedback>
            </b-form-group>
            &nbsp; <b-button variant="success" type="submit">Dodaj</b-button>
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
        locName: '',
        hasDescription: false,
        locDesc: '',
        locMinLvl: null
      };
    },
    validations() {
      if(this.hasDescription) {
        return {
          locName: {
            required,
            minLength: minLength(5)
          },
          locDesc: {
            required,
            minLength: minLength(10)
          },
          locMinLvl: {
            required
          }
        };
      } else {
          return {
            locName: {
              required,
              minLength: minLength(5)
            },
            locMinLvl: {
              required
            }
          };
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