import Vue from 'vue'
import Vuex from 'vuex'
import authAxios from './auth-axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    userId: null
  },
  mutations: {
    auth(state, payload) {
      state.token = payload.token;
      state.userId = payload.userId;
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
    }
  }
})
