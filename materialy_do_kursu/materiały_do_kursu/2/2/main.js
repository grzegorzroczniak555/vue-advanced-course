import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.directive('padding', {
  inserted(el) {
    el.style.padding = '10%';
    el.style.backgroundColor = 'cyan';
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
