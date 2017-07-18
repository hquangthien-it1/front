export default function (Vue) {
    let authenticatedUser = {}
    let authUser = {}

    Vue.auth = {
        setToken(token, expiration, response) {
            authUser.access_token = response.data.access_token
            authUser.refresh_token = response.data.refresh_token
            localStorage.setItem('token', token)
            localStorage.setItem('expiration', expiration)
            localStorage.setItem('authUser', JSON.stringify(authUser))
        },
        getToken () {
            var token = localStorage.getItem('token')
            var expiration = localStorage.getItem('expiration')

            if (! token || ! expiration)
                return null
            if (Date.now() > parseInt(expiration)){
                this.destroyToken()
                return null
            } else
                return token
        },

        destroyToken () {
            localStorage.removeItem('token')
            localStorage.removeItem('expiration')
        },

        isAuthenticated () {
            if (this.getToken())
                return true
            else
                return false
        },

        setAuthenticatedUser (data) {
            authenticatedUser = data
        },

        getAuthenticatedUser () {
            return authenticatedUser
        },

        getHeader () {
            const tokenData = JSON.parse(window.localStorage.getItem('authUser'))
            const headers = {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + tokenData.access_token
            }

            return headers
        },

        setUser (response) {
            authUser.email = response.body.email
            authUser.name = response.body.name
            localStorage.setItem('authUser', JSON.stringify(authUser))
        },

        getUser () {
            return authUser
        }
    }
    Object.defineProperties(Vue.prototype, {
        $auth: {
            get: () => {
                return Vue.auth
            }
        }
    })
}
