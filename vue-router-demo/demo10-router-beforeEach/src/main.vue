<template>
  <div id="app">
    <h1>Redirect</h1>
    <ul>
      <li>
        <router-link to="/red">Red</router-link>
      </li>
      <li>
        <router-link to="/yellow">Yellow</router-link>
      </li>
      <li>
        <router-link to="/blue">Blue</router-link>
      </li>
    </ul>
    <router-view class="view"></router-view>
  </div>
</template>

<style>
.box {
  width: 100px;
  height: 100px;
  background-color: #eee;
}
.box.red {
  background-color: red;
}
.box.yellow {
  background-color: yellow;
}
.box.blue {
  background-color: blue;
}
</style>