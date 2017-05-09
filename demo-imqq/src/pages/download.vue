<template>
  <div class="page">
    <!--轮播-->
    <carousel-box 
      v-bind:data="imglist"
      v-bind:boxhi="618"
      v-bind:controls="false"
    ></carousel-box>
    <!--内容-->
    
    <div class="w980 downwrap">
      <div class="downbox1 clearfix">
        <div class="bigbox">
          <img src="../assets/images/pctab.png">
          <h2>
            <a href="###">QQ PC版</a>
            <span class="small">8.9.2</span>
          </h2>
          <div class="dtext">
            <p>- 全新视觉，简约界面乐享沟通</p>
            <p>- 消息列表支持自由调整，简约体验轻松聊天</p>
            <p>- 面板新增游戏中心入口，无需安装即时畅玩</p>
            <p>- 视频通话趣味聊，动态挂件，乐趣不断</p>
          </div>
          <div class="dbtns">
            <p class="date">2017-04-27</p>
            <a href="javascript:void(0)" class="dn-btn">
              <i class="icon-pc"></i>下载
            </a>
          </div>
        </div>
        <div class="bigbox mobile">
          <img src="../assets/images/mbtab.png">
          <h2>
            <a href="###">QQ手机版</a>
            <span class="small" :class="{active: mbtype}" @mouseover="mbtype = false">Android6.7.1</span>
            /
            <span class="small" :class="{active: !mbtype}" @mouseover="mbtype = true">iPhone6.7.1</span>
          </h2>
          <div class="dtext">
            <p>- 聊天时点击图片，可直接编辑并发送</p>
            <p>- 可将手机中连拍照片生成动图，发表到说说</p>
            <p>- 短视频拍摄时间延长至10秒，记录更完整</p>
            <p>- 转发多条消息时，可选择逐条转发或合并转发</p>
          </div>
          <div class="dbtns">
            <div class="lbtn">
              <p class="date">2017-03-27</p>
              <div @mouseleave="dlist = false">
                <a href="javascript:void(0)" class="dn-btn" @mouseover="mbtype = false; dlist = true">
                  <i class="icon-and"></i>下载
                </a>
                <transition v-on:before-enter="beforeEnter"
                            v-on:enter="enter"
                            v-on:leave="leave"
                >
                  <ul class="dropdown" v-show="dlist">
                    <li></li>
                    <li class="its">XX下载</li>
                    <li class="its">XX商店下载</li>
                    <li class="its">XX商店下载</li>
                  </ul>
                </transition>
              </div>
            </div>
            <div class="rbtn">
              <p class="date">2017-03-28</p>
              <a href="javascript:void(0)" class="dn-btn" @mouseover="mbtype = true">
                <i class="icon-ios"></i>下载
              </a>
            </div>
          </div>
        </div>
        <div class="bigbox">
          <img src="../assets/images/tim.jpg">
          <h2>
            <a href="###">TIM</a>
            <span class="small">1.0.5</span>
          </h2>
          <div class="dtext">
            <p>- 熟悉的QQ习惯，好友、消息完全同步</p>
            <p>- 高效Word、Excel处理，支持多人协同编辑</p>
            <p>- 免费的音视频通话，支持多人通话及会议预定</p>
            <p>- 创建日程，安排事务，还能做会议邀请</p>
          </div>
          <div class="dbtns">
            <p class="date">2017-03-15</p>
            <a href="javascript:void(0)" class="dn-btn">下载</a>
          </div>
        </div>
      </div>

      <div class="downbox2">
        <h1>其他产品</h1>
        <ul class="otherlist">
          <li v-for="item in otherlist"
              v-bind:style="{background: 'url('+item.icon+') no-repeat 30px center'}"
          >
            <h3>
              {{item.title}}<span class="small">{{item.time}}</span>
            </h3>
            <p>{{item.text}}</p>
            <a href="javascript:void(0)" class="dn-btn">下载</a>
          </li>
        </ul>
      </div>

      <div class="downbox3">
        <h1>更多下载</h1>
        <ul class="moredown">
          <li v-for="item in morelist">
            <a :href="item.deskhref" v-if="item.deskhref" class="proname">{{item.name}}</a>
            <p v-else="" class="proname">{{item.name}}</p>
            <a :href="item.downhref" class="prodown">{{item.downtext}}</a>
            <p class="protime">{{item.time}}</p>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
  //import main from '../layout/main.vue';
  import carousel from '../components/carousel.vue';

  const r_mac = require('../assets/images/mac_icon.png');
  const r_and = require('../assets/images/and_icon.png');
  const r_wp = require('../assets/images/wp_icon.png');
  const r_logo = require('../assets/images/logo.png');

  export default {
    data () {
      return {
        imglist: [{
          img: require('../assets/images/carousel/tim_s.jpg')
        }],
        otherlist: [
          {
            icon: r_mac,
            title: 'QQ Mac版',
            time: '2017-03-28',
            text: '遇见不同，简而不凡。'
          },
          {
            icon: r_logo,
            title: 'QQ国际PC版',
            time: '2014-01-22',
            text: '跨语言沟通无障碍。'
          },
          {
            icon: r_mac,
            title: 'QQ国际iPhone版',
            time: '2016-12-22',
            text: '沟通无国界，沟通就在你身边。'
          },
          {
            icon: r_and,
            title: 'QQ国际Android版',
            time: '2016-12-26',
            text: '全球通话，祝您好友遍天下。'
          },
          {
            icon: r_logo,
            title: 'QQ轻聊PC版',
            time: '2015-12-01',
            text: '轻快简洁，高效沟通。'
          },
          {
            icon: r_logo,
            title: 'QQ轻聊Android版',
            time: '2016-06-27',
            text: '超小安装包，省内存，聊天更畅快！'
          },
          {
            icon: r_wp,
            title: 'QQ Windows Phone版',
            time: '2015-06-12',
            text: 'Light设计，轻快简洁。'
          },
          {
            icon: r_wp,
            title: 'QQ Windows Pad版',
            time: '2015-06-12',
            text: '全新版本，轻快、简洁、个性化！'
          }
        ],
        morelist: [
          {
            name: 'TM2013',
            deskhref: 'javascript:void(0)',
            time: '2014-10-16',
            downhref: 'javascript:void(0)',
            downtext: '下载'
          },
          {
            name: 'QQ S60V5版',
            time: '2013-08-06',
            downhref: 'javascript:void(0)',
            downtext: '下载'
          },
          {
            name: 'QQ语音S60V3版',
            time: '2013-09-12',
            downhref: 'javascript:void(0)',
            downtext: '下载'
          },
          {
            name: 'QQ S60V3版',
            time: '2013-06-04',
            downhref: 'javascript:void(0)',
            downtext: '下载'
          },
          {
            name: 'QQ BlackBerry版',
            time: '2012-02-29',
            downhref: 'javascript:void(0)',
            downtext: '下载'
          },
          {
            name: 'Smart QQ',
            deskhref: 'javascript:void(0)',
            time: '无须下载，打开网页直接聊天',
            downhref: 'javascript:void(0)',
            downtext: '打开'
          }
        ],
        mbtype: false,
        dlist: false
      }
    },
    components: {
      //'main-layout': main,
      'carousel-box': carousel
    },
    methods: {
      beforeEnter(el) {
        el.style.height = 0;
      },
      enter(el, done) {
        Velocity(el, 
          {
            height: '128px'
          }, 
          { 
            duration: 200,
            complete: done
          }
        );
      },
      leave(el, done) {
        Velocity(el, 
          {
            height: 0
          }, 
          { 
            duration: 200,
            complete: done
          }
        );
      }
    }
  }
</script>

<style>
@import url(../assets/style/download.css);
</style>