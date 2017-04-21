<template>
  <nav class="navbar navbar-default">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">{{logo}}</a>
    </div>

    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav navbar-right">
        <li v-for="fitem of navList" :class="fitem.sub ? 'dropdown' : ''">
          <a v-if="fitem.sub" href="#" class="dropdown-toggle" data-toggle="dropdown">{{fitem.fname}} <b class="caret"></b></a>
          <a v-else="!fitem.sub" :href="fitem.flink">{{fitem.fname}}</a>
          <ul v-if="fitem.sub" class="dropdown-menu">
            <li v-for="item of fitem.sub"><a :href="item.slink">{{item.sname}}</a></li>
          </ul>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </nav>
</template>

<script>
export default {
  data () {
    return {
      //navbar
      logo: 'MyBrand',
      navList: [
        {
          fname: 'Home', 
          flink: '###'
        },
        {
          fname: 'About', 
          flink: '###',
          sub: [
            {sname: 'item1', slink: '###'},
            {sname: 'item1', slink: '###'},
            {sname: 'item1', slink: '###'}
          ]
        },
        {
          fname: 'More', 
          flink: '###',
          sub: [
            {sname: 'item1', slink: '###'},
            {sname: 'item1', slink: '###'},
            {sname: 'item1', slink: '###'}
          ]
        },
        {
          fname: 'Login', 
          flink: '###',
          sub: [
            {sname: 'item1', slink: '###'},
            {sname: 'item1', slink: '###'}
          ]
        }
      ]
    }
  }
  
}
</script>