<template>
  <footer>
    <div class="ft-container clearfix">
      <div class="platbox float-left">
        <h3>了解热门产品</h3>
        <div class="plat-item icon-mb">
          <a href="javascript:void(0)">QQ 手机版</a>
        </div>
        <div class="plat-item icon-pc">
          <a href="javascript:void(0)">QQ PC版</a>
        </div>
        <div class="plat-item icon-mac">
          <a href="javascript:void(0)">QQ Mac版</a>
        </div>
        <div class="plat-item icon-pad">
          <a href="javascript:void(0)">QQ Pad版</a>
        </div>
      </div>
      <div class="map-nav float-left" v-for="list in maplist">
        <h3>{{list.title}}</h3>
        <ul class="item-list">
          <li v-for="item in list.sub"><a href="javascript:void(0)">{{item}}</a></li>
        </ul>
      </div>
    </div>
    <div class="ft-bottom">
      <p>Copyright © 1998- 2017. All Rights Reserved.<br>XX公司 版权所有</p>
    </div>
  </footer>
</template>

<script>
  export default {
    data() {
      return {
        maplist: [
          {
            title: 'QQ安全',
            sub: ['安全中心','冻结帐号','举报恶意行为','恢复好友和群']
          },
          {
            title: '帮助反馈',
            sub: ['腾讯客服','反馈问题','腾讯微博','新浪微博']
          },
          {
            title: '友情链接',
            sub: ['兴趣部落','QQ群','QQ音乐','QQ浏览器','来电']
          },
          {
            title: '友情链接',
            sub: ['腾讯视频','腾讯体验中心','腾讯电脑管家','企鹅FM','星钻']
          }
        ]
      }
    }
  }
</script>