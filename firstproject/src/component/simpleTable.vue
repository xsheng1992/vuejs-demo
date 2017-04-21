<template>
  <table class="f-table">
    <thead>
      <tr>
        <th v-for="item in tTitle">{{item}}</th>
      </tr>
    </thead>
    <transition-group 
      tag="tbody"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:leave="leave"
    >
      <tr v-for="(row, index) in computedList" v-bind:key="row.name" v-bind:data-index="index">
        <td v-for="item in tTitle">{{row[item]}}</td>
      </tr>
    </transition-group>
  </table>
</template>

<script>
//import Velocity from 'velocity-animate'
import Velocity from 'velocity-animate'

var hasString = function(origin, string) {
  return origin.toLowerCase().indexOf(string.toLowerCase()) !== -1;
};

export default {
  props: {
    tTitle: Array,
    tData: Array,
    tQuery: String
  },
  computed: {
    computedList: function() {
      var vm = this;
      return this.tData.filter(function(row){
        return hasString(row.name, vm.tQuery) || hasString(row.price, vm.tQuery);
      });
    }
  },
  methods: {
    beforeEnter: function(el) {
      el.style.opacity = 0;
      el.style.height = 0;
    },
    enter: function(el, done) {
      var delay = el.dataset.index*100;
      setTimeout(function(){
        Velocity(el,
          {opacity:1, height: '31px'},
          {complete: done}
        );
      }, delay);
    },
    leave: function(el, done) {
      var delay = el.dataset.index*100;
      setTimeout(function(){
        Velocity(el,
          {opacity:0, height: 0},
          {complete: done}
        );
      }, delay);
    }
  }
  
}
</script>

<style>
.f-table {
  width: 600px;
  margin: 20px auto;
  border: 1px solid #bbb;
  border-collapse: collapse;
}
.f-table>thead>tr>th, .f-table>tbody>tr>td {
  border: 1px solid #bbb;
}
.f-table>thead>tr>th {
  width: 50%;
  padding: 10px 15px;
  font-size: 14px;
  font-weight: normal;
  color: #fff;
  background-color: #42b983;
}
.f-table>tbody>tr>td {
  padding: 5px 15px;
  line-height: 20px;
}
.f-table>tbody>tr:nth-child(odd) {
  background-color: #eee;
}
</style>
