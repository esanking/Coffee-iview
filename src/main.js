import Vue from 'vue';
import ViewUI from 'view-design';
import App from './App.vue';
import router from './router';

// import style
import 'view-design/dist/styles/iview.css';

Vue.use(ViewUI);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
