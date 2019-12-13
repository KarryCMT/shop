<template>
  <div id="app">
    <ul class="footer-bar">
      <li class="footer-bar-item">
       <router-link to="/">首页</router-link>
      </li>
      <li class="footer-bar-item">
       <router-link to="/category">分类</router-link>
      </li>
      <li class="footer-bar-item">
       <router-link to="/cart">购物车</router-link>
      </li>
      <li class="footer-bar-item">
       <router-link to="/profile">我的</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
.footer-bar{
  display: flex;
  position: fixed;
  bottom: 0;
  height: 1rem;
  width: 100%;
  line-height: 1rem;
  &-item{
    flex-grow: 1;//每个占一份
    text-align: center;
    font-size: 16px;
    background-color: #ccc;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
}
</style>
