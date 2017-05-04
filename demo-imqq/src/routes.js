import index from './pages/index.vue'
import download from './pages/download.vue'
import news from './pages/news.vue'
import album from './pages/album.vue'

const Index = index;
const Download = download;
const News = news;
const Album = album;
const Home = {template: "<router-view></router-view>"};

export default {
  routes: [
    {path: '/', component: Index},
    {path: '/download', component: Download},
    {
      path: '/trends', 
      component: Home,
      children: [
        {path: '', redirect: 'album'},
        {path: 'album', component: Album},
        {path: 'news', component: News}
      ]
    }
  ],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
}