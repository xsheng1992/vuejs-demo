import Vue from 'vue'
import App from './App.vue'

console.log(window.location.pathname);
new Vue({
  el: '#app',
  render: h => h(App)
})
