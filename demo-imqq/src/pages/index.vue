<template>
  <div class="page">
    <!--轮播-->
    <carousel-box 
      v-bind:data="imglist"
      v-bind:boxhi="820"
      v-bind:controls="true"
    ></carousel-box>
    <!--内容-->
    <div class="col-1"></div>

    <section v-for="(item, index) in mainText">
      <div :class="'colbg colbg-'+(index+2)"></div>
      <div :class="'col col-'+(index+2)">
        <div class="w960">
          <div class="textwrap">
            <img :src="item.himg">
            <p>{{item.text}}</p>
            <p><a href="###">了解更多 ></a></p>
            <ul class="icon-list">
              <li v-for="(ss, i) in item.figs" :class="'icon-'+(i+1)">{{ss}}</li>
            </ul>
          </div>
          <div class="imgwrap">
            <transition-group
              tag="ul"
              class="icons"
              v-if="item.icons"
              v-on:before-enter="beforeEnter"
              v-on:enter="enter"
              v-on:leave="leave"
            >
              <li v-for="(icon, i) in item.icons"
                  v-bind:style="{backgroundImage: 'url('+icon+')'}"
                  v-bind:key="'fig'+i"
                  v-bind:data-index="i"
                  v-show="scrolltop > anitop"
              >
              </li>
            </transition-group>
          </div>
        </div>
      </div>
    </section>
  
  </div>
</template>

<script>
  //import main from '../layout/main.vue';
  import carousel from '../components/carousel.vue';

  export default {
    data () {
      return {
        imglist: [
          {
            img: require('../assets/images/carousel/pc_891_b.jpg'),
            btnimg: require('../assets/images/carousel/btn541b.png')
          },
          {
            img: require('../assets/images/carousel/tim_b.jpg'),
            btnimg: require('../assets/images/carousel/tim_down.png')
          }
        ],
        mainText: [
          {
            himg: require('../assets/images/qcall_txt.png'),
            text: '无论何时何地，你都能自由享受QQ在各类终端<br>上带来的高清通话，与好友一起想聊多久聊多久',
            figs: ['两人、多人通话','群组通话','屏幕分享']
          },
          {
            himg: require('../assets/images/txt.png'),
            text: '通过QQ,电脑和手机上的文件都能收发自如，<br>更有手机在线查阅，轻松你的工作和生活。',
            figs: ['文件漫游','多端互传','在线预览']
          },
          {
            himg: require('../assets/images/qblog_txt.png'),
            text: '即使世界很大，你也不会孤单，在兴趣部落<br>有和你一样的人，期待着和你一起发现精彩',
            figs: ['兴趣社区','附近热点','精彩图集'],
            icons: [
              require('../assets/images/qblog_fig1.png'),
              require('../assets/images/qblog_fig2.png'),
              require('../assets/images/qblog_fig3.png')
            ]
          }
        ],
        anitop: 0,
        scrolltop: 0
      }
    },
    components: {
      //'main-layout': main,
      'carousel-box': carousel
    },
    methods: {
      setScrollTop() {
        var vHeight = window.innerHeight;
        this.scrolltop = document.body.scrollTop + vHeight;
      },
      beforeEnter(el) {
        el.style.transform = 'scale(0)';
      },
      enter(el, done) {
        var delay = el.dataset.index*100+300;
        setTimeout(function(){
          Velocity(
            el, 
            "transition.bounceIn", 
            { 
              duration: 350,
              complete: done
            }
          );
        },delay);
      },
      leave(el, done) {
        var delay = el.dataset.index*10;
        setTimeout(function(){
          Velocity(
            el, 
            "transition.bounceOut", 
            { 
              duration: 100,
              complete: done
            }
          );
        },delay);
      }
    },
    mounted() {
      var col4top = document.querySelector(".col-4").offsetTop,
          phonetop = document.querySelector(".col-4 .imgwrap").offsetTop,
          ultop = document.querySelector(".icons").offsetTop;
      this.anitop = col4top + phonetop + ultop;
      
      this.setScrollTop();
      document.addEventListener('scroll', this.setScrollTop);
    }
  }
</script>

<style>
  @import url(../assets/style/index.css);
</style>