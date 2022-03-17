import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Layout',
        component: () => import('../views/layout.vue'),
        redirect: 'System',
        children: [
            {
                path: 'system',
                name: 'System',
                component: () => import("../views/system.vue")
            },
            {
                path: 'systemAdd',
                name: 'SystemAdd',
                component: () => import("../views/system/systemAdd.vue")
            },
            {
                path: 'systemDetail',
                name: 'SystemDetail',
                component: () => import("../views/system/systemDetail.vue")
            },




            {
                path: 'user',
                name: 'User',
                component: () => import("../views/user.vue")
            },
            {
                path: 'userAdd',
                name: 'UserAdd',
                component: () => import("../views/user/userAdd.vue")
            },
            {
                path: 'userDetail',
                name: 'UserDetail',
                component: () => import("../views/user/userDetail.vue")
            },



            {
                path: 'role',
                name: 'Role',
                component: () => import("../views/role.vue")
            },
            {
                path: 'roleAdd',
                name: 'RoleAdd',
                component: () => import("../views/role/roleAdd.vue")
            },
            {
                path: 'roleDetail',
                name: 'RoleDetail',
                component: () => import("../views/role/roleDetail.vue")
            }

        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
