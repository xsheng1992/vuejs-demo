<template>
  <div class="carousel-box" 
    v-bind:style="{height: boxhi+'px'}"
    v-on:mouseover="stopCarousel"
    v-on:mouseleave="startCaousel"
  >
    <div class="topshd" v-show="topshadow"></div>
    <transition-group
      tag="ul"
      class="img-list"
      name="carousel-fade"
    >
      <li v-for="(item, index) in data" 
          v-bind:key="index"
          v-show="index === activeIndex"
      >
        <div class="carousel-img" v-bind:style="{backgroundImage: 'url('+item.img+')'}">
          <a href="###" 
             v-bind:class="'btn'+index"
             v-bind:style="{background: 'url('+item.btnimg+') no-repeat'}"
             target="_blank"
          ></a>
        </div>
      </li>
    </transition-group>
    <div class="controls" v-show="controls">
      <ul class="control-bar">
        <li v-for="(item, index) in data">
          <a href="javascript:void(0)"
             v-on:mouseover="controlOver(index)"
             v-bind:class="{active: index === activeIndex}"
          ></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      data: Array,
      boxhi: Number,
      controls: Boolean,
      topshadow: Boolean
    },
    data() {
      return {
        activeIndex: 0,
        maxIndex: this.data.length-1,
        int: null
      }
    },
    methods: {
      changeIndex() {
        if(this.activeIndex === this.maxIndex) this.activeIndex = 0;
        else this.activeIndex++;
      },
      stopCarousel() {
        clearInterval(this.int);
      },
      startCaousel() {
        var vm = this;
        this.int = setInterval(function(){
          vm.changeIndex();
        }, 4000);
      },
      controlOver(index) {
        this.activeIndex = index;
      }
    },
    mounted() {
      if(this.maxIndex === 0) return;
      this.startCaousel();
    }
  }
</script>