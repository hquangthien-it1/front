import Vue from 'vue'
import App from './App.vue'
import Router from './routes/routes.js'
import {apiDomain} from './config.js'

import VueResource from 'vue-resource'
import store from './store.js'

import Auth from './packages/auth/Auth.js'

Vue.use(VueResource)
Vue.use(Auth)

Vue.http.options.root = apiDomain
Vue.http.headers.common['Authorization'] = 'Bearer ' + Vue.auth.getToken()

Router.beforeEach(
    (to, from, next) => {
        let title = to.meta.title
        if (title != '')
            document.title = title
        else
            document.title = to.params.slug

        if (to.matched.some(record => record.meta.forVisitors)){
            if (Vue.auth.isAuthenticated()) {

                next({
                    path: '/feed'
                })
            } else next()
        }

        else if (to.matched.some(record => record.meta.forAuth)){
            if (! Vue.auth.isAuthenticated()) {

                next({
                    path: '/login'
                })
            } else next()
        }

        else next()
    }
)

new Vue({
    el: '#wrapper',
    render: h => h(App),
    router: Router,
    store
}).$mount('#wrapper')



