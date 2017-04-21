import Vue from 'vue'
import routes from './routes.js'

new Vue({
  el: '#app',
  data: {
  	currentRoute: window.location.pathname
  },
  computed: {
    viewComponent: function() {
      const matchingView = routes[this.currentRoute]
      return matchingView ? require('./pages/' + matchingView + '.vue') : require('./pages/404.vue')
    }
  },
  render (h) {
    return h(this.viewComponent)
  }
});

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
});