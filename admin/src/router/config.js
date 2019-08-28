

import baselayout from '@/components/layouts/baselayout.vue'
import AuthLayout from '@/components/layouts/authlayout.vue'
export const publicRoute = [

  {

    path: "/auth",
    name: "auth",
    component: AuthLayout,
    children: [
      {
        path: '/auth/login',
        component: () => import("@/views/auth/login.vue")
      }
    ]



  },
]

export const protectedRoute = [
  {
    path: '/',
    name: 'baselayout',
    component: baselayout,
    redirect: "/setup",
    children: [
      {
        path: "/setup",
        name: "setup",
        meta: "Setup",
        component: () => import("../views/system/setup.vue")
      },
      {
        path: "/menu",
        name: "menu",
        meta: "Menu Settings",
        component: () => import("../views/system/menu.vue")
      }
    ]
  }
]
