<!--
 * @Author lizhenhua
 * @version 2017-08-10
 * @description $Title$
 -->
<template>
  <div class="data-list">
    <div class="search">
      <!-- 搜索输入框 -->
      <el-input v-model="keyword" @keyup.enter.native="doSearch" placeholder="请输入内容">
        <i class="el-icon-search el-input__icon" slot="suffix" @click="doSearch"></i>
      </el-input>
    </div>
    <div class="list">
      <el-card class="box-card" v-for="(item,index) in listData">
        <div slot="header" class="clearfix">
          <span>{{item.time}}</span>
          <el-button style="float: right; padding: 3px" type="text" @click="toggleShow(item)">{{item.on?'收起':'展开'}}</el-button>
        </div>
        <el-collapse-transition>
          <box-card v-if="item.on" :list="item.list"></box-card>
        </el-collapse-transition>
      </el-card>
    </div>
  </div>
</template>
<script>
  import boxCard from "@/components/boxCard.vue"
  export default {
    components:{boxCard},
    data: function () {
      return {
        keyword: '',
        listData: [
          {
            time: '2018-02-09',
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
            ],
            on:true
          },
          {
            time: '2018-02-09',
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
            ],
            on:false
          },
          {
            time: '2018-02-09',
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
            ],
            on:false
          },
          {
            time: '2018-02-09',
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
            ],
            on:false
          },
          {
            time: '2018-02-09',
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
            ],
            on:false
          }
        ]
      }
    },
    methods: {
      doSearch(){},
      toggleShow(item){
        item.on = !item.on;
      },
    }
  }
</script>
<style lang="scss">
  .data-list{
    width: 100%;
    .search{
    }
    .list{
      padding:10px 0;
    }
    .el-card{
      margin-top: 0;
      background-color: transparent;
      border: none;
      .el-card__body{
        padding: 5px 0;
      }
      .el-card__header{
        padding:5px;
        line-height: 25px;
        text-align: left;
        color: #a2a2a2;
        border-bottom: 1px solid #6D6D6D;
      }
    }
  }

</style>
