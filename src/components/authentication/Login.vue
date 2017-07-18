<template>
    <div class="row">
        <div class="col-md-4 col-md-offset-4">
            <form action="javascript:void(0)" class="form-signin">
                <h2 class="form-signin-heading text-center">Please sign in</h2>
                <label for="inputEmail" class="sr-only">Email address</label>
                <input type="email" id="inputEmail" class="form-control" v-model="email" placeholder="Email address" required autofocus>
                <br>
                <label for="inputPassword" class="sr-only">Password</label>
                <input type="password" v-model="password" id="inputPassword" class="form-control" placeholder="Password" required>
                <br />
                <button @click="login" class="btn btn-lg btn-primary btn-block">Sign in</button>
            </form>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        data () {
            return {
                email: '',
                password: ''
            }
        },
        computed: mapState({
            userStore: state => state.userStore
        }),

        methods: {
            login () {
                var data  = {
                    client_id: 2,
                    client_secret: 'KDiroyuTsj04zTtJHGiDHYAVnG4TT5nXnMAPu7mC',
                    grant_type: 'password',
                    username: this.email,
                    password: this.password
                }

                this.$http.post('oauth/token', data)
                    .then(response => {
                        this.$auth.setToken(response.body.access_token, response.body.expires_in + Date.now(), response)
                        this.$http.get('api/user', {headers: this.$auth.getHeader()})
                            .then(response => {
                                this.$auth.setUser(response)
                            })
                        this.$store.dispatch('setUserObj', this.$auth.getUser())
                        this.$router.push({name: 'admin.index.index'})
                    })
            }
        }
    }
</script>

<style>

</style>