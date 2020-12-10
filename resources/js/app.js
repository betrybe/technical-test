import 'es6-promise/auto'
import axios from 'axios'
import Vue from 'vue'
import VueAxios from "vue-axios"
import VueAuth from '@websanova/vue-auth'
import VueRouter from 'vue-router'
import VueToastr from "vue-toastr";

import router from './router'
import auth from  './auth'

window.Vue = Vue

require('bootstrap/js/src/index');

Vue.router = router
Vue.use(VueRouter)


Vue.use(VueToastr);

Vue.use(VueAxios, axios)
axios.defaults.baseURL = '/api'

Vue.use(VueAuth, auth)

Vue.component('index', require('./index.vue').default);

const app = new Vue({
    el: '#app',
    router
});
