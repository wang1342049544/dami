/**
 *  路由文件
 *  引入[Vue, VueRouter]模块
 */
import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

import Header from '@/components/header'
import TicketList from '@/pages/ticketList'
import Index from '@/pages/index'
import Login from '@/pages/login'
import Register from '@/pages/register'
import TicketDesc from '@/pages/ticketDesc'
import OrderConfirm from '@/pages/orderconfirm'
import WeChatPay from '@/pages/wechatpay'
import OrderState from '@/pages/orderstate'
import PayMethod from '@/pages/paymethod'
import OrderList from '@/pages/orderlist'
import TicketChooseSeat from '@/pages/ticketChooseSeat'
import MultiplePage from '@/pages/multiplePage'
// 加载模块
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/header',
      name: 'Header',
      component: Header
    },
    {
      path: '/ticketList',
      name: 'TicketList',
      component: TicketList
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/ticketDesc',
      name: 'TicketDesc',
      component: TicketDesc
    },
    {
      path: '/paymethod',
      name: 'PayMethod',
      component: PayMethod
    },
    {
      path: '/wechatpay',
      name: 'WeChatPay',
      component: WeChatPay
    },
    {
      path: '/orderstate',
      name: 'OrderState',
      component: OrderState
    },
    {
      path: '/orderlist',
      name: 'OrderList',
      component: OrderList,
      // 需要登录
      // meta: { requireAuth: true }
    },
    {
      path: '/orderconfirm',
      name: 'OrderConfirm',
      component: OrderConfirm
      // 需要登录
      // meta: { requireAuth: true }
    },
    {
      path: '/ticketChooseSeat',
      name: 'TicketChooseSeat',
      component: TicketChooseSeat
    },
    {
      path: '/multiplePage',
      name: 'MultiplePage',
      component: MultiplePage
    }
  ]
})

// 获取当前页面路由信息
router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    let isLoginValid = false
    const isLogin = store.getters.gIsLogin

    if (isLogin) {
      const { genTime, extTime } = store.state.sLoginInfo
      isLoginValid = Date.now() - (genTime + extTime) * 1000 < 0
      if (!isLoginValid) store.commit('mLogout')
    }

    if (isLoginValid) {
      next()
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})

export default router
