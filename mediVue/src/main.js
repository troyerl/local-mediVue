import Vue from 'vue';
import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// plugins
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

import VueYoutube from 'vue-youtube';
Vue.use(VueYoutube);

import VueSocketIO from 'vue-socket.io'
Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:5000/'
}))

Vue.config.productionTip = false;

import router from './router';

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
