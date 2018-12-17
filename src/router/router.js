import Vue from 'vue'
import VRouter from 'vue-router'
Vue.use(VRouter)
export default new VRouter({
    routes:[
        {path:'/',redirect:'/index'},
        {path:'/index',component:resolve=>{require(['@/page/index'],resolve)}},
        {path:'/descovery',component:resolve=>{require(['@/page/descovery'],resolve)}},
        {path:'/order',component:resolve=>{require(['@/page/order'],resolve)}},
        {path:'/mine',component:resolve=>{require(['@/page/mine'],resolve)}}
    ]
})