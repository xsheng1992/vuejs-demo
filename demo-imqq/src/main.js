import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.js'
import main from './layout/main.vue'

Vue.use(VueRouter);

const router = new VueRouter(routes);


new Vue({
  router,
  render: h => h(main)
}).$mount("#app");
