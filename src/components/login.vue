<!--
 * @Author lizhenhua
 * @version 2017-08-10
 * @description $Title$
 -->
<template>
      <el-container>
        <el-header>Note</el-header>
        <el-main>
          <el-card>
            <img :src="userImg">
            <el-input class="mb10" v-model="userName" placeholder="用户名"></el-input>
            <transition name="tips">
              <span class="err" v-if="userNameState.state">{{userNameState.text}}</span>
            </transition>
            <el-input class="mb10" v-model="password" placeholder="密码"></el-input>
            <transition name="tips">
              <span class="err" v-if="passwordState.state">{{passwordState.text}}</span>
            </transition>
            <br/>
            <el-button type="info" plain @click="login">登录</el-button>
          </el-card>
        </el-main>
        <el-footer>© 版权所有LZH  系统版本1.0.0. </el-footer>
      </el-container>
</template>
<script>
    export default {
      data: function () {
            return {
              userImg:require('@/assets/images/userPic.jpg'),
              userName:'',
              password:'',
              userNameState:{
                state:false,
                text:''
              },
              passwordState:{
                state:false,
                text:''
              }
            }
        },
      methods:{
        login(){
          var userName = this.userName.trim(), password = this.password.trim();
          var patrn=/^[A-Za-z0-9_]{1,16}$/;
          if(userName.length==0){
            this.userNameState.state = true;
            this.userNameState.text = "用户名不能为空";
            return
          }else {
            this.userNameState.state = false
            this.userNameState.text = "";
          }
          if(password.length==0){
            this.passwordState.state = true;
            this.passwordState.text = "密码不能为空";
            return
          }else {
            this.passwordState.state = false;
          }

          this.$router.push({path: 'page/add',});
        }
      },
    }
</script>
<style lang="scss">

  .tips-enter-active,.tips-leave-active{
    transition: all .5s;
  }
  .tips-enter{
    transform: translateX(-20px);
    opacity: 0;
  }
  .tips-leave-to{
    transform: translateX(100px);
    opacity: 0;
  }
  .tips-enter-to,.tips-leave{
    opacity: 1;
    transform: translateX(0px);
  }

  .el-card{
    background-color: transparent;
    border: none;
    img{
      width: 100px;height: 100px;border-radius: 50%;display: inline-block;margin-bottom: 30px;
    }
  }

  .err{
    font-size: 13px;
    color: #ac3a17;
    display: inline-block;
    margin-left: 10px;
    padding: 2px 5px;
    border-radius: 3px;
    border: 1px solid #667c7d;
    margin-bottom: 10px;
  }
</style>
