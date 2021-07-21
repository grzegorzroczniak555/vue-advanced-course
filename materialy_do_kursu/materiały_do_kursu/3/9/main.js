import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

axios.defaults.baseURL = 'https://adv-vue.firebaseio.com';
axios.defaults.headers.common['Authorization'] = 'xxx';
axios.defaults.headers.get['Secret-Header'] = 'tajemnica';

const requestInterceptor = axios.interceptors.request.use(config => {
  console.log('Intercept request', config);
  return config;
});

const responseInterceptor = axios.interceptors.response.use(res => {
  console.log('Intercept response', res);
  return res;
});

axios.interceptors.request.eject(requestInterceptor);
axios.interceptors.response.eject(responseInterceptor);

Vue.use(BootstrapVue);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')
