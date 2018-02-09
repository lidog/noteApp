<!--
 * @Author lizhenhua
 * @version 2017-08-10
 * @description $Title$
 -->
<template>
  <div class="item-box" getPrice="item">
    <i class="el-icon-remove" v-if="index==0?false:true" @click="remove"></i>
    <el-select v-model="item.goods" placeholder="选水果" clearable @change="transG">
      <el-option v-for="o in goodsUnit.goods" :value="typeof o=='object'?o.fruits:o"></el-option>
    </el-select>
    -
    <el-select v-if="!item.goods" value="选重量" disabled></el-select>
    <el-select v-else v-model="item.weight" placeholder="选重量" @change="transO">
      <el-option v-for="o in goodsUnit.weight" :value="o">
        <span style="float: left; color: #8492a6; font-size: 16px;font-weight: bolder;">{{o}}</span>
        <span style="float: right; color: #8492a6; font-size: 13px">斤</span>
      </el-option>
    </el-select>
    -
    <el-select v-if="!item.goods" value="选单价" disabled></el-select>
    <el-select v-else v-model="item.unit" placeholder="选单价" @change="transO">
      <el-option v-for="o in goodsUnit.unit" :value="o">
        <span style="float: left; color: #8492a6; font-size: 16px;font-weight: bolder;">{{o}}</span>
        <span style="float: right; color: #8492a6; font-size: 13px">元</span>
      </el-option>
    </el-select>
  </div>
</template>
<script>
  export default {
    data: function () {
      return {
        val: this.item,
        goods:this.item.goods,
        priceDefault: {
          fruits: [],
          price: []
        }
      }
    },
    props: {
      item: {
        type: Object,
        default: function () {
          return {
            goods: '',
            weight: '',
            unit: '',
          }
        }
      },
      index: {
        type:Number,
        default:0
      },
      goodsUnit: {
        type: Object,
        default: function () {
          return {
            goods: [{fruits: '苹果', price: 4.5}, {fruits: '西瓜', price: 5}, '香蕉', '榴莲', '雪梨', '哈密瓜', '芒果', '车厘子'],
            weight: ['1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5', '5.5'],
            unit: ['1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5', '5.5'],
          }
        }
      }
    },
    methods: {
      renderUnit(){
        var goods = this.goodsUnit.goods;
        var priceDefault = this.priceDefault;
        goods.forEach(function (o, i) {
          if (typeof o == "object") {
            priceDefault.fruits.push(o.fruits)
            priceDefault.price.push(o.price)
          }
        })
      },
      remove(){
        this.$emit('remove',this.index)
      },
      transG(val){
        var index = this.priceDefault.fruits.indexOf(val);
        if (index !== -1) {
          this.item.unit = this.priceDefault.price[index];
        }else {
          this.item.unit = '';
        }
        this.$emit('input', this.val);
      },
      transO(){
        this.$emit('input', this.val);
      },
    },
    watch: {
      goods(newVal){
        var index = this.priceDefault.fruits.indexOf(item.fruits);
        if (index !== -1) {
          item.price = this.priceDefault.price[index];
        }
      }
    },
    mounted() {
      this.renderUnit();
    }
  }
</script>
<style lang="scss">
  .item-box {
    text-align: right;
    margin-bottom: 10px;
    .el-select {
      width: 28%;
    }

    .el-icon-circle-plus {
      font-size: 30px;
      margin-top: 20px;
      cursor: pointer;
    }

    .el-icon-remove {
      color: red
    }

    .el-select .el-input__inner {
      background-color: #1d1d1d;
      color: #fff;
      border: none;
      font-weight: lighter;
    }

    .button-tools {
      margin-top: 20px;
    }

    .el-input.is-disabled .el-input__inner {
      background-color: rgba(46, 46, 46, 0.6);
    }
  }



</style>
