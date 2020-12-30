import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { LayoutPlugin, ButtonPlugin, JumbotronPlugin, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;

Vue.use(LayoutPlugin);
Vue.use(ButtonPlugin);
Vue.use(JumbotronPlugin);
Vue.use(IconsPlugin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
