import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.js'
import main from './main.vue'

Vue.use(VueRouter);

const router = new VueRouter(routes);
/*
router.beforeEach((to, from, next) => {
  console.log(`to: ${to}, from: ${from}`);
  next();
});*/

new Vue({
  router,
  render: h => h(main)
}).$mount("#app");
