import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import App from './App.vue'
import "./styles/main.scss"

Vue.use(VueCompositionApi)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
