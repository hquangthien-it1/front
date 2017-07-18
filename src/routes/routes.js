import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/feed',
            component: require('../components/Feed.vue'),
            meta: {
                forAuth: true
            }
        },
        {
            path: '/products/create',
            component: require('../components/product/Create.vue'),
            meta: {
                forAuth: true
            }
        },
        /*** START AUTH ROUTES ***/
        {
            path: '/login',
            name: 'login',
            component: require('../components/authentication/Login.vue'),
            meta: {
                forVisitors: true,
                title: 'Trang đăng nhập'
            }
        },
        {
            path: '/register',
            name: 'register',
            component: require('../components/authentication/Register.vue'),
            meta: {
                forVisitors: true,
                title: 'Trang đăng ký'
            }
        },
        /*** END AUTH ROUTES ***/

        /*** START ADMIN ROUTES ***/
        /*** route index ***/
            {
                path: '/admin',
                component: require('../components/admin/index/Index.vue'),
                name: 'admin.index.index',
                meta: {
                    forAuth: true,
                    title: 'Admin | Trang thống kê'
                }
            },
        /*** route index ***/

        /*** router user ***/
            {
                path: '/admin/user',
                name: 'admin.user.index',
                component: require('../components/admin/user/Index.vue'),
                meta: {
                    forAuth: true,
                    title: 'Quản lý người dùng'
                }
            },
            {
                path: '/admin/user/:id',
                name: 'admin.user.edit',
                component: require('../components/admin/user/Edit.vue'),
                meta: {
                    forAuth: true,
                    title: 'Quản lý người dùng'
                }
            },
            {
                path: '/admin/user/create',
                name: 'admin.user.create',
                component: require('../components/admin/user/Create.vue'),
                meta: {
                    forAuth: true,
                    title: 'Quản lý người dùng'
                }
            },
        /*** router user ***/

        /*** router cat ***/
        {
            path: '/admin/cat',
            name: 'admin.cat.index',
            component: require('../components/admin/cat/Index.vue'),
            meta: {
                forAuth: true,
                title: 'Quản lý danh mục'
            }
        },
        {
            path: '/admin/cat/:id',
            name: 'admin.cat.edit',
            component: require('../components/admin/cat/Edit.vue'),
            meta: {
                forAuth: true,
                title: 'Quản lý danh mục'
            }
        },
        {
            path: '/admin/cat/create',
            name: 'admin.cat.create',
            component: require('../components/admin/cat/Create.vue'),
            meta: {
                forAuth: true,
                title: 'Quản lý danh mục'
            }
        },
        /*** router cat ***/

        /*** router video ***/
        {
            path: '/admin/video',
            name: 'admin.video.index',
            component: require('../components/admin/video/Index.vue'),
            meta: {
                forAuth: true,
                title: 'Quản lý video'
            }
        },
        {
            path: '/admin/video/:id',
            name: 'admin.video.edit',
            component: require('../components/admin/video/Edit.vue'),
            meta: {
                forAuth: true,
                title: 'Quản lý video'
            }
        },
        {
            path: '/admin/video/create',
            name: 'admin.video.create',
            component: require('../components/admin/video/Create.vue'),
            meta: {
                forAuth: true,
                title: 'Quản lý video'
            }
        },
        /*** router video ***/

        /*** router music ***/
        {
            path: '/admin/music',
            name: 'admin.music.index',
            component: require('../components/admin/music/Index.vue'),
            meta: {
                forAuth: true,
                title: 'Quản lý bài hát'
            }
        },
        {
            path: '/admin/music/:id',
            name: 'admin.music.edit',
            component: require('../components/admin/music/Edit.vue'),
            meta: {
                forAuth: true,
                title: 'Quản lý bài hát'
            }
        },
        {
            path: '/admin/music/create',
            name: 'admin.music.create',
            component: require('../components/admin/music/Create.vue'),
            meta: {
                forAuth: true,
                title: 'Quản lý bài hát'
            }
        },
        /*** router music ***/

        /*** router contact ***/
        {
            path: '/admin/contact',
            name: 'admin.contact.index',
            component: require('../components/admin/contact/Index.vue'),
            meta: {
                forAuth: true,
                title: 'Quản lý liên hệ'
            }
        },
        {
            path: '/admin/contact/:id',
            name: 'admin.contact.edit',
            component: require('../components/admin/contact/Edit.vue'),
            meta: {
                forAuth: true,
                title: 'Quản lý liên hệ'
            }
        },
        {
            path: '/admin/contact/create',
            name: 'admin.contact.create',
            component: require('../components/admin/contact/Create.vue'),
            meta: {
                forAuth: true,
                title: 'Quản lý liên hệ'
            }
        },
        /*** router contact ***/

        /*** router adv ***/
        {
            path: '/admin/adv',
            name: 'admin.adv.index',
            component: require('../components/admin/adv/Index.vue'),
            meta: {
                forAuth: true,
                title: 'Quản lý quảng cáo'
            }
        },
        {
            path: '/admin/adv/:id',
            name: 'admin.adv.edit',
            component: require('../components/admin/adv/Edit.vue'),
            meta: {
                forAuth: true,
                title: 'Quản lý quảng cáo'
            }
        },
        {
            path: '/admin/adv/create',
            name: 'admin.adv.create',
            component: require('../components/admin/adv/Create.vue'),
            meta: {
                forAuth: true,
                title: 'Quản lý quảng cáo'
            }
        },
        /*** router adv ***/

        /*** START ADMIN ROUTES ***/
    ],

    linkActiveClass: 'active',

    mode: 'history'
})

export default router