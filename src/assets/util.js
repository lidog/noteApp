/*
 * @Author lizhenhua
 * @version 2018-02-06
 * @description
 */


export default {
  /**
   * 功能：产生一个指定方位的随机整数 或数组
   * @param {int} arrLength  ,为1时 产生一随机数，>1 时 产生一个次长度的数据
   * @param {arr} range  ,一个有两个元素的数组，第一个元素为最小可能值，第二个为最大可能值；
   * @Author lzh
   */
  randomArr(arrLength,range) {
    var arr = [];
    var choices = range[1] - range[0] + 1;
    for(var i=0;i<arrLength;i++){
      var k = Math.floor(Math.random()*choices+range[0]);
      arr.push(k);
    };

    if(arrLength==1){
      return arr[0];
    }else {
      return arr
    }
  },


  hasClass(elem, cls) {
    cls = cls || '';
    if (cls.replace(/\s/g, '').length == 0) return false; //当cls没有参数时，返回false
    return new RegExp(' ' + cls + ' ').test(' ' + elem.className + ' ');
  },


  extend(){
    function isPlainObject(obj) {

      // 用来存放 toString 映射结果的对象
      var class2type = {};

      // 相当于 Object.prototype.toString
      var toString = class2type.toString;

      // 相当于 Object.prototype.hasOwnProperty
      var hasOwn = class2type.hasOwnProperty;

      var proto, Ctor;

      // 排除掉明显不是obj的以及一些宿主对象如Window
      if (!obj || toString.call(obj) !== "[object Object]") {
        return false;
      }

      /**
       * getPrototypeOf es5 方法，获取 obj 的原型
       * 以 new Object 创建的对象为例的话
       * obj.__proto__ === Object.prototype
       */
      proto = Object.getPrototypeOf(obj);

      // 没有原型的对象是纯粹的，Object.create(null) 就在这里返回 true
      if (!proto) {
        return true;
      }

      /**
       * 以下判断通过 new Object 方式创建的对象
       * 判断 proto 是否有 constructor 属性，如果有就让 Ctor 的值为 proto.constructor
       * 如果是 Object 函数创建的对象，Ctor 在这里就等于 Object 构造函数
       */
      Ctor = hasOwn.call(proto, "constructor") && proto.constructor;

      // 在这里判断 Ctor 构造函数是不是 Object 构造函数，用于区分自定义构造函数和 Object 构造函数
      return typeof Ctor === "function" && hasOwn.toString.call(Ctor) === hasOwn.toString.call(Object);
    }

    // 默认不进行深拷贝
    var deep = false;
    var name, options, src, copy, clone, copyIsArray;
    var length = arguments.length;
    // 记录要复制的对象的下标
    var i = 1;
    // 第一个参数不传布尔值的情况下，target 默认是第一个参数
    var target = arguments[0] || {};
    // 如果第一个参数是布尔值，第二个参数是 target
    if (typeof target == 'boolean') {
      deep = target;
      target = arguments[i] || {};
      i++;
    }
    // 如果target不是对象，我们是无法进行复制的，所以设为 {}
    if (typeof target !== "object" && !isFunction(target)) {
      target = {};
    }

    // 循环遍历要复制的对象们
    for (; i < length; i++) {
      // 获取当前对象
      options = arguments[i];
      // 要求不能为空 避免 extend(a,,b) 这种情况
      if (options != null) {
        for (name in options) {
          // 目标属性值
          src = target[name];
          // 要复制的对象的属性值
          copy = options[name];

          // 解决循环引用
          if (target === copy) {
            continue;
          }

          // 要递归的对象必须是 plainObject 或者数组
          if (deep && copy && (isPlainObject(copy) ||
            (copyIsArray = Array.isArray(copy)))) {
            // 要复制的对象属性值类型需要与目标属性值相同
            if (copyIsArray) {
              copyIsArray = false;
              clone = src && Array.isArray(src) ? src : [];

            } else {
              clone = src && isPlainObject(src) ? src : {};
            }

            target[name] = this.extend(deep, clone, copy);

          } else if (copy !== undefined) {
            target[name] = copy;
          }
        }
      }
    }
    return target;
  }
}


