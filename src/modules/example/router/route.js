// 路由懒加载
const test1 = () => import(/* webpackChunkName: "test" */ '../pages/test.vue')

exports.route = [
  { path: '/',
    name: 'home',
    component: test1
  }
]
