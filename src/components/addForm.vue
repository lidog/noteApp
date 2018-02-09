<!--
 * @Author lizhenhua
 * @version 2017-08-10
 * @description $Title$
 -->
<template>
  <div style="height: 100%;" class="add-form">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="客户">
        <el-autocomplete
          popper-class="my-autocomplete"
          :fetch-suggestions="querySearch"
          placeholder="请输入姓名" v-model="form.name">
          <template slot-scope="props">
            <div class="name">{{ props.item.value }}</div>
          </template>
        </el-autocomplete>
      </el-form-item>
      <div class="list-box">
        <listBox v-for="(item,index) in form.list" :goodsUnit="goodsUnit" :item="item" :index="index"
                 @remove="removeGoods"></listBox>
      </div>
      <i class="el-icon-circle-plus" @click="addGoods"></i>
    </el-form>
    <div class="button-tools">
      <el-button type="primary" @click="onSubmit" size="mini">确定</el-button>
      <el-button size="mini" @click="cancel">取消</el-button>
    </div>
  </div>
</template>
<script>
  import listBox from '@/components/listBox.vue'
  export default {
    components: {
      listBox
    },
    data() {
      return {
        id:'',
        form: {
          restaurants: [],
          list: [
            {
              goods: '',
              weight: '',
              unit: '',
            }
          ],
        },
        goodsUnit: {
          //goods[0].price 代表默认价格
          goods: [{fruits: '苹果', price: 4.5}, {fruits: '西瓜', price: 5}, '香蕉', '榴莲', '雪梨', '哈密瓜', '芒果', '车厘子'],
          weight: ['1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5', '5.5'],
          unit: ['1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5', '5.5'],
        }
      }
    },
    methods: {
      querySearch(queryString, cb) {
        cb(this.restaurants);
      },
      loadAll() {
        return [
          {"value": "张三"},
          {"value": "李四"},
          {"value": "王五"},
        ];
      },
      onSubmit() {
        console.log(this.form)
      },
      addGoods(){
        var obj = {
          goods: '',
          weight: '',
          unit: '',
        };
        this.form.list.push(obj);
      },
      removeGoods(index){
        if (this.form.list.length == 1) {
          this.$message({
            message: '必须剩下一条记录',
            type: 'warning',
          });
          return
        }
        this.form.list.splice(index, 1);
      },
      cancel(){
          this.$router.back(-1);
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
      console.log(this.$route.params)
      this.id = this.$route.params.id;
      if(this.id){

      }
    }
  }
</script>
<style lang="scss">
  .add-form {
    .el-form-item__label {
      font-size: 16px;
      color: #fff;
    }
    .el-form {
      height: 90%;
      overflow-y: auto;
      box-sizing: border-box;
      .list-box {
        max-height: 75%;
        overflow-y: auto;
      }
    }
    .el-icon-circle-plus {
      font-size: 30px;
      margin-top: 20px;
      cursor: pointer;
    }
    .button-tools {
      margin-top: 20px;
    }
  }


</style>
