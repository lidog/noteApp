<!--
 * @Author lizhenhua
 * @version 2017-08-10
 * @description $Title$
 -->
<template>
  <el-container>
    <el-header>
      <div class="left"><i class="el-icon-arrow-left" @click="goBack"></i></div>
      <div class="mid">Note</div>
      <div class="right"><i class="el-icon-more" @click="dataList"></i></div>
    </el-header>
    <el-main>
        <router-view></router-view>
    </el-main>
    <el-footer>© 版权所有LZH  系统版本1.0.0. </el-footer>
  </el-container>
</template>
<script>
    export default {
        data: function () {
            return {}
        },
      methods:{
        goBack(){
          this.$router.back(-1)
        },
        dataList(){
            this.$router.push({name:'dataList'})
        }
      }
    }
</script>
<style lang="scss">

</style>
