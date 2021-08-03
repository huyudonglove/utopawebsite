import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import('@/components/home'),
    },
    {
      path: '/productscase',
      name: 'productscase',
      component: ()=>import('@/components/productscase'),
    },
    {
      path:'/LocusAR',
      name:'LocusAR',
      component:()=>import('@/components/LocusAR'),
    },
    {
      path:'/aboutus',
      name:'Xaboutus',
      component:()=>import('@/components/Xaboutus'),
    },
    {
      path:'/details',
      name:'Xdetails',
      component:()=>import('@/components/Xdetails'),
    },
    {
      path:'/test',
      name:'test',
      component:()=>import('@/components/test'),
    },
    {
      path:'/locus',
      name:'locus',
      component:()=>import('@/components/locus')
    }
  ]
})
