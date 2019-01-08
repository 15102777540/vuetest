import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Tabbar from '@/components/Tabbar'
import Logistics from '@/components/Logistics'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [      
    {
      path: '/',
      name: 'Tabbar',
      component: Tabbar
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Logistics',
      name: 'Logistics',
      component: Logistics
    }
  ]
})
