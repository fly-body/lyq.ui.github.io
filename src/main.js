import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import Button from './components/button/index.js';
import Icon from './components/icon/index.js'


Vue.use(Button).use(Icon);

Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
