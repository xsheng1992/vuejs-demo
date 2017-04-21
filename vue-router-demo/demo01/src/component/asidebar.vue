<template>
  <div class="aside-bar">
    <ul class="list-group">
      <li class="list-group-item">
        <v-link href="/">Home</v-link>
      </li>
      <li class="list-group-item">
        <v-link href="/about">About</v-link>
      </li>
    </ul>
  </div>
</template>

<script>
import vlink from './vlink.vue'

export default {
  components: {
    'v-link': vlink
  }
}
</script>