import bearer from '@websanova/vue-auth/drivers/auth/bearer'
import axios from '@websanova/vue-auth/drivers/http/axios.1.x'
import router from '@websanova/vue-auth/drivers/router/vue-router.2.x'

/**
 * Authentication configuration, some of the options can be override in method calls
 */
const config = {
    auth: bearer,
    http: axios,
    router: router,
    tokenDefaultName: 'token',
    tokenStore: ['localStorage'],
    loginData: {
        url: 'login',
        method: 'POST',
        redirect: '',
    },
    registerData: {
        url: 'auth/register',
        method: 'POST',
        redirect: '/login'
    },
    logoutData: {
        url: 'logout',
        method: 'POST',
        redirect: '/logout',
        makeRequest: false
    },
    fetchData: {
        url: 'me',
        method: 'GET',
        enabled: false,
        makeRequest: false
    },
    refreshData: {
        url: 'refresh',
        method: 'GET',
        enabled: false,
        makeRequest: false,
        interval: 60
    },
    parseUserData(data) {
        return data || {};
    }
}

export default config
