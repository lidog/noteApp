import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login.vue'
import add from '@/components/add.vue'
import addForm from '@/components/addForm.vue'
import page from '@/components/page.vue'
import dataList from '@/components/dataList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path:'/page',
      name: 'page',
      component: page,
      children:[
        {
          path: 'add',
          name: 'add',
          component: add,
        },
        {
          path: 'addForm/:id',
          name: 'addForm',
          component: addForm,
        },
        {
          path: 'dataList',
          name: 'dataList',
          component: dataList,
        },
      ]
    },
  ]
})
