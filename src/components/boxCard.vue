<!--
 * @Author lizhenhua
 * @version 2017-08-10
 * @description $Title$
 -->
<template>
  <el-card class="box-card">
    <div v-for="item in list" :key="item.id" class="text item clearfix" :id="item.id" @click="editList(item.id)">
      <p class="fl item-name">{{item.name}}</p>
      <p class="fl item-content"><span v-for="(good,key) in item.goods">{{key}}:{{good}}</span></p>
    </div>
  </el-card>
</template>
<script>
    export default {
        data: function () {
            return {
            }
        },
      props:['list'],
      methods:{
        editList(id){

        }
      },
    }
</script>
<style lang="scss">
  .box-card{
    .text {
      font-size: 14px;
    }
    .item {
      padding: 10px;
      font-size: 16px;
      text-align: left;
      .item-name{
        width: 25%;
      }
      .item-content{
        width: 75%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        span{
          margin-right: 10px;
          font-size: 14px;
          color:#c0c0c0;
        }
      }
    }
    .item:hover{
      background-color: #373b3b;
    }
    .item:last-child{
      border-bottom: 1px solid #505050;
    }
  }
  .el-card{
    background-color: transparent;
    color:#fff;
    border: none;
  }
</style>
