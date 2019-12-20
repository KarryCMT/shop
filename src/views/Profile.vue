<template>
  <div>
    <van-tabs>
      <van-tab title="登录">
        <div class="titleCenter">
          <h1>test</h1>
        </div>
        <van-cell-group  class="vancellgroup">
          <van-field placeholder="请输入账号" required clearable v-model="loginUsername" label="用户名" left-icon="user-o" />
          <van-field type="password" placeholder="请输入密码" required clearable v-model="loginPassword" label="密 码" left-icon="closed-eye" />
        </van-cell-group>
        <div>
          <van-button type="primary" @click="loginHandler" size="large">登录</van-button>
        </div>
      </van-tab>

      <van-tab title="注册">
         <van-cell-group>
          <van-field placeholder="请输入账号" required clearable v-model="registUsername" label="用户名" left-icon="user-o" />
          <van-field type="password" placeholder="请输入密码" required clearable v-model="registPassword" label="密 码" left-icon="closed-eye" />
        </van-cell-group>
        <div>
          <van-button type="info" @click="registHandler" size="large">注册</van-button>
        </div>


      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import axios from 'axios';
import url from '@/service.config.js';
export default {
  data() {
    return {
      loginUsername:'',
      loginPassword:'',
      registUsername:'',
      registPassword:''
    };
  },
  methods:{
    //注册方法
    registHandler(){
      axios({
        url:url.registUser,
        method:'post',
        data:{
          userName:this.registUsername,
          password:this.registPassword
        }
      }).then(res =>{
        console.log(res);
          if (res.data.code == 200) {
            this.$toast.success('注册成功！');
            this.registUsername = this.registPassword = '';
          }else{
            this.$toast.fail('注册失败！');
          }
      }).catch(err =>{
            console.log(err);
            this.$toast.fail('注册失败！');
      });
    },
    loginHandler(){
      axios.get({
        url:url.loginUser,
        method:'post',
        data:{
          userName:this.loginUsername,
          password:this.loginPassword
        }
      }).then(res => {
        console.log(res);
        if (res.data.code == 200) {
          this.$toast.success('登录成功！')
          this.loginUsername = this.loginPassword = '';
        }else{
          this.$toast.fail('登录失败！');
        }
      }).catch(err => {
        console.log(err);
        this.$toast.fail('登录失败！');
      });
    },
  }
};
</script>
<style lang="scss">
.titleCenter{
  margin-top: 1rem;
  text-align: center;
}
.vancellgroup{
  margin-top: 1rem;
}
</style>
