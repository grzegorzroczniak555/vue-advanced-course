import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

const reaction = () => {
  alert('Kliknąłeś!');
};

Vue.directive('padding', {
  inserted(el) {
    el.parentNode.style.padding = '10%';
    el.parentNode.style.backgroundColor = 'yellow';
  },
  bind(el) {
    el.style.backgroundColor = '#fafafa';
    el.style.borderRadius = '30%';
    el.style.padding = '50%';
    el.style.textAlign = 'center';

    el.addEventListener('click', reaction);
  },
  unbind(el) {
    el.removeEventListener('click', reaction);
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
