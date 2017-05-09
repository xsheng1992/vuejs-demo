<template>
  <div id="app">
    <nav-bar></nav-bar>
    <slot>
      <router-view></router-view>
    </slot>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
  import navbar from '../components/navbar.vue';
  import footer from '../components/footer.vue';

  export default {
    components: {
      'nav-bar': navbar,
      'footer-bar': footer
    }
  }
</script>

<style>
  @import url(../assets/style/base.css);
</style>