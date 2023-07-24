import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue"

const routes = [
  {
    path: '/',
    redirect: "/home"
  },
  {
    name: "home",
    path: '/home',
    component: Home,
    /**
     * meta: 自定义数据, 可以通过 route.meta 获取自定义数据
     * 作用:
     *  1. 路由守卫：使用`meta`定义权限信息，控制导航权限。
     *  2. 标题和元数据：通过`meta`字段更新页面标题和元数据。
     *  3. 动态路由：将动态数据存储在`meta`中传递给路由组件。
     *  4. 权限控制：使用`meta`字段指定权限级别，限制访问。 
     */
    meta: {
      name: "kobe",
      age: 99
    }
  },
  {
    name: "login",
    path: '/login',
    component: () => import('../views/Login.vue')
  },
  {
    name: "order",
    path: '/order',
    component: () => import('../views/Order.vue')
  },
  {
    name: "user",
    path: '/user/:id',
    component: () => import('../views/User.vue')
  },
  {
    name: "userQuery",
    path: '/userQuery',
    component: () => import('../views/UserQuery.vue')
  },
  {
    path: '/law',
    name: 'law',
    component: () => import(/* webpackChunkName: "about" */ '../views/Law.vue'),
    children: [
      {
        path: "/law",
        redirect: "/law/legalRegulations"
      },
      {
        path: 'legalRegulations',
        component: () => import('../views/law/LegalRegulations.vue')
      },
      {
        path: 'industryStandards',
        component: () => import('../views/law/IndustryStandards.vue')
      },
      {
        path: 'nationalStandards',
        component: () => import('../views/law/NationalStandards.vue')
      }
    ]
  },
  {
    name: 'compliance',
    path: '/compliance',
    component: () => import('../views/Compliance.vue'),
    children: [
      {
        path: '/compliance',
        redirect: '/compliance/active'
      },
      {
        path: 'active',
        component: () => import('../views/compliance/Active.vue'),
      },
      {
        path: 'active1',
        component: () => import('../views/compliance/Active1.vue'),
      },
      {
        path: 'active2',
        component: () => import('../views/compliance/Active2.vue'),
      },
      {
        path: 'active3',
        component: () => import('../views/compliance/Active3.vue'),
      },
      {
        path: 'active4',
        component: () => import('../views/compliance/Active4.vue'),
      },
      {
        path: 'active5',
        component: () => import('../views/compliance/Active5.vue'),
      },
    ]
  },
  {
    // 尾部添加*, 将会把 $route.params.pathMatch 转成数组
    // path: '/:pathMatch(.*)*', 
    path: '/:pathMatch(.*)',
    component: () => import(/* webpackChunkName: "about" */ '../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// 路由守卫
router.beforeEach((to, from) => {
  // 如果token不存在并且是跳转到登录页面, 则重定向到登录页
  const token = localStorage.getItem("token")
  if(!token && to.path === "/order") {
    return "/login"
  }
})

export default router
