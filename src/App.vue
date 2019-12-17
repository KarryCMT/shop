<template>
  <div id="app">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="card" to="/category">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="manager" to="/profile">我的</van-tabbar-item>
    </van-tabbar>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    }
  }
}
</script>
<style lang="scss">
.footer-bar {
  display: flex;
  position: fixed;
  bottom: 0;
  height: 1rem;
  width: 100%;
  line-height: 1rem;
  &-item {
    flex-grow: 1; //每个占一份
    text-align: center;
    font-size: 16px;
    background-color: #ccc;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
}
</style>
