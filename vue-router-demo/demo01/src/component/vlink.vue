<template>
  <a :href="href"
     @click="go"
  >
    <slot></slot>
  </a>
</template>

<script>
import routes from '../routes.js'

export default {
  props: {
    href: String
  },
  methods: {
    go: function() {
      event.preventDefault();
      this.$root.currentRoute = this.href;
      window.history.pushState(
        null,
        routes[this.href],
        this.href
      );
    }
  }
}
</script>