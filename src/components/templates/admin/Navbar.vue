<template>
    <nav class="navbar navbar-default" v-if="userStore.authUser !== null && userStore.authUser.access_token">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">Project name</a>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
                <ul class="nav navbar-nav navbar-right">
                    <router-link tag="li" to="/login" v-if="userStore.authUser === null">
                        <a>Login</a>
                    </router-link>
                    <router-link tag="li" to="/register" v-if="userStore.authUser === null">
                        <a>Register</a>
                    </router-link>

                    <router-link tag="li" to="/feed" v-if="userStore.authUser !== null">
                        <a>Feed</a>
                    </router-link>

                    <router-link tag="li" to="/products/create" v-if="userStore.authUser !== null">
                        <a>Products</a>
                    </router-link>

                    <router-link tag="li" to="/logout" v-if="userStore.authUser !== null">
                        <a>Logout</a>
                    </router-link>
                </ul>
            </div><!--/.nav-collapse -->
        </div><!--/.container-fluid -->
    </nav>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        data () {
            return {
                isAuth: null
            }
        },
        computed: mapState({
            userStore: state => state.userStore
        })
    }
</script>
