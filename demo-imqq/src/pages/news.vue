<template>
  <div class="page">
    <!--轮播-->
    <carousel-box 
      v-bind:data="imglist"
      v-bind:boxhi="555"
      v-bind:controls="false"
      v-bind:topshadow="true"
    ></carousel-box>
    <!--内容-->
    
    <div class="w980 trends">
      <ul class="newslist">
        <li v-for="item in newslist">
          <a :href="item.href" target="_blank">
            <p class="topinfo">
              <span class="time float-left">{{item.time}}</span>
              <span class="author float-right">{{item.author}}</span>
            </p>
            <h3>{{item.title}}</h3>
            <p class="text">{{item.text}}</p>
          </a>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
  import main from '../layout/main.vue';
  import carousel from '../components/carousel.vue';

  export default {
    data () {
      return {
        imglist: [
          {img: require('../assets/images/carousel/news_banner_1215.jpg')},
          {img: require('../assets/images/carousel/alb_bn.jpg')}
        ],
        newslist: Array.apply(null, { length: 20 }).map(item=>{
          return {
            time: '2016-12-12',
            author: '站长之家',
            title: '短视频双人动态挂件上线，手机QQ V6.6.1欢乐也成双',
            text: '手机QQ一直在用户的娱乐化体验上不断发力。在版本V6.6.1中更是基于短视频自动识别双人人脸的技术，增添了更多双人动态挂件。支持“樱桃小丸子”“黑人爆炸头”等数十种不同风格的实时动态挂件，随挂件还配有不同的配音，更添加几分趣味。',
            href: 'http://www.chinaz.com/news/2016/1212/626251.shtml'
          }
        })
      }
    },
    components: {
      'main-layout': main,
      'carousel-box': carousel
    }
  }
</script>

<style>
  @import url(../assets/style/trends.css);
</style>