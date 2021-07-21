import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

Vue.directive('shadow', {
  bind(el, binding) {
    el.style.boxShadow = '10px 10px 36px 0px rgba(0,0,0,0.75)';

    if(binding.modifiers['red']){
      el.style.boxShadow = '10px 10px 36px 0px rgba(255,0,0,0.75)';
    }
  }
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')
