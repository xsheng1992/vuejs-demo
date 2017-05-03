<template>
  <nav class="navbar" :class="{white: isTrends(staicpath), fixedtop: scrolltop>scrollheight}">
  	<div class="container clearfix">
  		<div class="brand float-left">
  			<a href="index.html"></a>
  		</div>
  		<ul class="nav-list float-left" @mouseleave="mleave">
  			<li :class="{active: curpath === '/'}" @mouseover="curpath = '/'"><router-link to="/">首页</router-link></li>
  			<li :class="{active: curpath === '/download'}" @mouseover="curpath = '/download'"><router-link to="/download">下载</router-link></li>
  			<li :class="{active: isTrends(curpath)}" @mouseover="curpath = '/trends'">
          <router-link to="/trends">动态</router-link>
          <ul class="sublist" v-show="isTrends(staicpath)">
            <li :class="{active: staicpath === '/trends/album'}"><router-link to="/trends/album">精品专题</router-link></li>
            <li :class="{active: staicpath === '/trends/news'}"><router-link to="/trends/news">热门资讯</router-link></li>
          </ul>
        </li>
  		</ul>
  		<div class="right-box float-right">
  			<a href="javascript:void(0)" class="register float-left"></a>
  			<div class="float-right">
	  			<ul class="tool-top">
	  				<li><a href="javascript:void(0)">QQ会员</a></li>
	  				<li><a href="javascript:void(0)">QQ安全</a></li>
	  				<li><a href="javascript:void(0)">登录</a></li>
	  			</ul>
	  			<a href="javascript:void(0)" class="online-info">当前在线人数：236,225,825</a>
  			</div>
  		</div>
  	</div>
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        staicpath: '/',
        curpath: '/',
        scrollheight: 0,
        scrolltop: 0
      }
    },
    methods: {
      mleave(str) {
        this.curpath = this.staicpath;
      },
      fetchdata(str) {
        this.staicpath = str;
        this.curpath = str;

        //设置显示导航条的滚动高度
        if(str === '/') {
          this.scrollheight = 800;
        } else if(str === '/download') {
          this.scrollheight = 600;
        } else if(this.isTrends(str)) {
          this.scrollheight = 550;
        }
      },
      isTrends(str) {
        return str.split('/')[1] === 'trends';
      }
    },
    watch: {
      '$route'(to, from) {
        this.fetchdata(this.$route.path);
      }
    },
    mounted() {
      var vm = this;
      this.fetchdata(this.$route.path);
      document.addEventListener('scroll', function(){
        vm.scrolltop = document.body.scrollTop;
      });
    }
  }
</script>
