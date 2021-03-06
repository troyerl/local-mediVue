import Vue from 'vue';
import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// plugins
import { BootstrapVue, BootstrapVueIcons  } from 'bootstrap-vue';
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

import VueYoutube from 'vue-youtube';
Vue.use(VueYoutube);

import store from './store/index';

import VueSocketIO from 'vue-socket.io';
Vue.use(new VueSocketIO({
  debug: false,
  connection: 'http://localhost:5000/',
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_'
  },
}))

Vue.config.productionTip = false;

import VueApollo from 'vue-apollo';
import apolloClient from './store/apollo';
Vue.use(VueApollo);
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

import router from './router';

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App),
}).$mount('#app')
