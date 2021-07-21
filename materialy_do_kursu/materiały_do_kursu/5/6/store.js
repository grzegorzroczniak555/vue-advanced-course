import Vue from 'vue'
import Vuex from 'vuex'
import authAxios from './auth-axios';
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    userId: null,
    students: null
  },
  getters:{
    isAuth: state => state.token !== null
  },
  mutations: {
    auth(state, payload) {
      state.token = payload.token;
      state.userId = payload.userId;
    },
    setStudents(state, payload) {
      state.students = payload;
    }
  },
  actions: {
    async login({commit}, payload) {
      try {
        let response = await authAxios.post(
          'verifyPassword?key=AIzaSyDNz_WU0sr2adhmTSnEVVUcC3HbjRUJf38', payload);
        commit('auth', {
          token: response.data.idToken, 
          userId: response.data.localId
        })
      } catch(e) {
        console.log(e);
      }
    },
    async register({commit}, payload) {
      try {
        let response = await authAxios.post(
          'signupNewUser?key=AIzaSyDNz_WU0sr2adhmTSnEVVUcC3HbjRUJf38', payload);
        commit('auth', {
            token: response.data.idToken, 
            userId: response.data.localId
        })
      } catch(e) {
        console.log(e);
      }
    },
    async getStudents({commit, state}, payload) {
      if(state.userId == null) {
        return;
      }

      try {
        let {data} = await axios.get('https://adv-vue.firebaseio.com/players.json?auth=' + state.token);
        commit('setStudents', Object.values(data))
      } catch(e) {
        console.log(e)
      }
    }
  }
})
