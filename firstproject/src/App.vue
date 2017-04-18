<template>
  <div id="app">
    <h4>This is a grid component built with vue-webpack-simple scaffolding!</h4>
    <div class="search-bar">
      search:
      <input v-model="query" class="query-input">
    </div>
    <simple-table 
      v-bind:tTitle="headList"
      v-bind:tData="fruitList"
      v-bind:tQuery="query"
    ></simple-table>
  </div>
</template>

<script>
import simpleTable from './component/simpleTable.vue';

export default {
  data () {
    return {
      query: '',
      headList: ['name','price'],
      fruitList: [
        {name: "Apple", price: "6.00"},
        {name: "Orange", price: "8.00"},
        {name: "Pear",   price: "6.00"},
        {name: "Strawberry", price: "12.00"}
      ]
    }
  },
  components: {
    'simple-table': simpleTable
  }
}
</script>

<style>
#app {
  font-family: 'Microsoft Yahei', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
  margin: 60px auto;
  max-width: 800px;
}

.query-input {
  width: 500px;
  height: 30px;
  outline: none;
  border: 1px solid #999;
  padding: 5px 15px;
}
.query-input:focus {
  border-color: #42b983;
}
</style>
