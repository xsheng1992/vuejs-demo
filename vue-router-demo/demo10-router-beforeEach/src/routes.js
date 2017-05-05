const Home = { template: '<router-view></router-view>' }
const Default = { template: '<div class="box"></div>' };
const Red = { template: '<div class="box red"></div>' };
const Yellow = { template: '<div class="box yellow"></div>' };
const Blue = { 
  template: '<div class="box blue"></div>',
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当钩子执行前，组件实例还没被创建
    next(vm => {
      // 通过 `vm` 访问组件实例
      console.log(`to: ${to}, from: ${from}`);
    });
  }
};


export default {
  routes: [{
    path: '/',
    component: Home,
    children: [
      {path: '', component: Default},
      {path: 'red', component: Red},
      {path: 'yellow', component: Yellow},
      {path: 'blue', component: Blue},
      {path: '*', redirect: '/'}
    ]
  }]
}