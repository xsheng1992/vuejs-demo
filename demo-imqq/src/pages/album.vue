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
    
    <div class="w981 allalbum">
      <h1>所有专题</h1>
      <ul class="albs">
        <li v-for="item in albumlist"
            v-bind:style="{background: 'url('+item.img+') no-repeat center'}"
        >
          <a :href="item.href">
            <h3>{{item.title}}</h3>
            <p>{{item.text}}</p>
            <span v-if="item.href" class="goto">
              查看专题<i class="icon-zt"></i>
            </span>
            <a v-else="" :href="item.video" class="goto">
              观看视频<i class="icon-vd"></i>
            </a>
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
          {img: require('../assets/images/carousel/news_banner_0720.jpg')}
        ],
        albumlist: [
          {
            img: require('../assets/images/album/alb_1.jpg'),
            title: 'QQ音视频',
            text: '随时随地，随心沟通',
            href: 'javascript:void(0)'
          },
          {
            img: require('../assets/images/album/alb_2.jpg'),
            title: 'QQ八大办公技巧',
            text: '必学办公技能，你get到了吗？',
            href: 'javascript:void(0)'
          },
          {
            img: require('../assets/images/album/alb_3.jpg'),
            title: 'QQ音视频会议',
            text: '支持多人语音，多人视频以及屏幕分享',
            href: 'javascript:void(0)'
          },
          {
            img: require('../assets/images/album/alb_4.jpg'),
            title: 'QQ传文件',
            text: '收发自如，随心分享',
            href: 'javascript:void(0)'
          },
          {
            img: require('../assets/images/album/alb_5.jpg'),
            title: 'QQ概念版视频',
            text: '未来不至于想象；也许，就是明天',
            video: 'javascript:void(0)'
          },
          {
            img: require('../assets/images/album/alb_6.jpg'),
            title: '兴趣部落',
            text: 'QQ兴趣聚合社区',
            href: 'javascript:void(0)'
          }
        ]
      }
    },
    components: {
      'main-layout': main,
      'carousel-box': carousel
    }
  }
</script>
