<!--
 * @Author lizhenhua
 * @version 2017-08-10
 * @description $Title$
 -->
<template>
  <div class="add">
    <div class="avatar-uploader" @click="add">
      <i class="el-icon-plus avatar-uploader-icon"></i>
    </div>
    <box-card :list="list"></box-card>
  </div>
</template>
<script>
  import ElButton from "../../../vue-eface/node_modules/element-ui/packages/button/src/button";
  import boxCard from "@/components/boxCard"
  export default {
    components: {ElButton,boxCard},
    data: function () {
      return {
        list: [
          {
            id: 1,
            name: "张三",
            goods: {
              "橘子": 10,
              "苹果": 10,
              "芒果": 12,
              "雪梨": 50,
              "哈密瓜": 10,
            }

          },
          {
            id: 2,
            name: "李四",
            goods: {
              "橘子": 10,
              "苹果": 10,
              "芒果": 12,
              "雪梨": 50,
              "哈密瓜": 10,
            }
          },
          {
            id: 3,
            name: "黄五",
            goods: {
              "芒果": 12,
              "橘子": 10,
              "哈密瓜": 10,
              "苹果": 10,
              "雪梨": 50,
            }
          },
        ]
      }
    },
    methods: {
      add(){
        this.$router.push({path: '/page/addForm/null'});
      }
    },
  }
</script>
<style lang="scss">
  .add{
    .avatar-uploader {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }

    .avatar-uploader .el-upload:hover {
      border-color: #409EFF;
    }

    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 178px;
      height: 178px;
      line-height: 178px;
      text-align: center;
    }

    .avatar {
      width: 178px;
      height: 178px;
      display: block;
    }
  }

</style>
