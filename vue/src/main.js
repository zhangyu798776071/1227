import Vue from 'vue'

import VueRouter from 'vue-router'
import store from './store/store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import axios from "axios";
import VueAxios from 'vue-axios';
import './assets/icon/iconfont.css';
// import { Actionsheet } from 'vux'

// Vue.component('actionsheet', Actionsheet)

require('./mock/mock.js')

Vue.use(VueAxios, axios)
Vue.config.debug = true;
Vue.use(VueRouter);

Vue.use(ElementUI);

import Second from './component/secondcomponent.vue';
import First from './component/firstcomponent.vue';
import Third from './component/thirdcomponent.vue';
import Four from './component/four.vue';
import Five from './component/five.vue';
import Layindex from './component/index.vue';
import Layout from './layout/layout.vue';

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [{
            path: '',
            component: Layout,
            redirect: 'home',
            children: [{
                path: 'home',
                name: 'home',
                component: Layindex,
                meta: {
                    title: 'home'
                }
            }]
        }, {
            path: '',
            component: Layout,
            redirect: 'first',
            children: [{
                path: 'first',
                name: 'first',
                component: First,
                meta: {
                    title: 'first'
                }
            }]
        },

        {
            path: '',
            component: Layout,
            redirect: 'second',
            children: [{
                path: 'second',
                name: 'second',
                component: Second,
                meta: {
                    title: 'second'
                }
            }]
        },
        {
            path: '',
            component: Layout,
            redirect: 'third',
            children: [{
                path: 'third',
                name: 'third',
                component: Third,
                meta: {
                    title: 'third'
                }
            }]
        },
        {
            path: '',
            component: Layout,
            redirect: 'four',
            children: [{
                path: 'four',
                name: 'four',
                component: Four,
                meta: {
                    title: 'four'
                }
            }]
        },
        {
            path: '',
            component: Layout,
            redirect: 'five',
            children: [{
                path: 'five',
                name: 'five',
                component: Five,
                meta: {
                    title: 'five'
                }
            }]
        },


    ]
})





new Vue({
    el: '#app',
    router: router,
    store,
    render: h => h(App)
})