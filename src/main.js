import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
// import axios from 'axios'

Vue.config.productionTip = true

// let url = "http://localhost:8000/user/"; // 장고 서버 주소

// axios.get(url)
// .then(function(response){
//   console.log(response);
// })
// .catch(function(response){
//   console.log(response);
// })

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
