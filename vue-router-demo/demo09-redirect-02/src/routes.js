const Home = { template: '<router-view></router-view>' };
const Default = { template: '<div>default</div>' };
const Foo = { template: '<div>foo</div>' };
const Bar = { template: '<div>bar</div>' };
const Baz = { template: '<div>baz</div>' };
const WithParams = { template: '<div>{{ $route.params.id }}</div>' };


export default {
  routes: [{
    path: '/',
    component: Home,
    children: [
      {path: '', component: Default},
      {path: 'foo', component: Foo},
      {path: 'bar', component: Bar},
      {path: 'baz', name: 'baz', component: Baz},
      {path: 'with-params/:id', component: WithParams},
      {path: 'relative-redirect', redirect: 'foo'},
      {path: 'absolute-redirect', redirect: 'bar'},
      {path: 'named-redirect', redirect: { name: 'baz' }},
      {path: 'redirect-with-params/:id', redirect: 'with-params/:id'},
      {path: '*', redirect: '/'}
    ]
  },
  {
    path: '/dynamic-redirect/:id?',
    redirect: function(to) {
      const { hash, params, query } = to;
      if(query.to === 'foo') {
        return {path:'/foo',query:null};
      }
      if(hash === '#baz') {
        return {name: 'baz', hash: ''};
      }
      if(params.id) {
        return '/with-params/:id';
      } else {
        return '/bar';
      }
    }
  }]
}
