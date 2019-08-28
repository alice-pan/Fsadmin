import Vue from "vue"
import Router from "vue-router"
import { publicRoute, protectedRoute } from "./config"

const routes = publicRoute.concat(protectedRoute)
Vue.use(Router)
const router = new Router({
  mode: "hash",
  linkActiveClass: "active",
  routes: routes
})

router.beforeEach((to, from, next) => {
  
  localStorage.setItem('token','ImLogin');
  const isLogin = localStorage.getItem('token') == 'ImLogin' ;
  if( isLogin ){
    next();
  } else {
    if( to.path !== '/auth/login')
      next('/auth/login');
    else
      next();
  }
})


export default router
