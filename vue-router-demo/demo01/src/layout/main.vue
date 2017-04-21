<template>
  <div class="main">
    <nav-bar></nav-bar>
    <div class="container">
      <div class="col-md-3">
        <aside-bar></aside-bar>
      </div>
      <div class="col-md-9">
        <content-panel>
          <slot></slot>
        </content-panel>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '../component/navbar.vue';
import asidebar from '../component/asidebar.vue';
import content from '../component/content.vue';

export default {
  components: {
    'nav-bar': navbar,
    'aside-bar': asidebar,
    'content-panel': content
  }
}
</script>