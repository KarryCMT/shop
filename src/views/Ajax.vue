<template>
  <div>
    <van-button type="primary" @click="getData">获取数据</van-button>
    <van-button type="default">清除数据</van-button>
  </div>
</template>

<script>
export default {
    data () {
        return {
             list:[]   
        }
    },
  methods: {
    ajax() {
      //ajax 原理
      let movieUrl = "https://bird.ioliu.cn/v2?url=https://api.douban.com/v2/movie/top250";
      //创建HMLhttpRuquest对象
      let xmlhttp;
      if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
      } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
      }
      //发送请求  第一个参数： 请求方式 GET 第二个参数： 请求地址 movieUrl 第三个参数：true 异步的
      xmlhttp.open("GET", movieUrl, true);
      //请求发送
      xmlhttp.send();

      //判断服务器端的响应
      xmlhttp.addEventListener("readystatechange", () => {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          let obj = JSON.parse(xmlhttp.responseText);
          console.log(obj);
          //对返回的数据的进行操作
          this.list =obj.subjects;
        }
      });
    },
    getData() {
      this.ajax();
    },
  }
};
</script>

<style lang="scss">
</style>
