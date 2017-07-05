<template>
    <div class="row">
        <div class="col-md-4 col-md-offset-4">
            <form class="form-signin">
                <h2 class="form-signin-heading">Please sign in</h2>
                <label for="inputEmail" class="sr-only">Email address</label>
                <input type="email" id="inputEmail" class="form-control" v-model="email" placeholder="Email address" required autofocus>
                <br>
                <label for="inputPassword" class="sr-only">Password</label>
                <input type="password" v-model="password" id="inputPassword" class="form-control" placeholder="Password" required>
                <div class="checkbox">
                    <label>
                        <input type="checkbox" value="remember-me"> Remember me
                    </label>
                </div>
                <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            </form>
        </div>
        <pre>
            {{ $data }}
        </pre>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                email: '',
                password: ''
            }
        }
    }
</script>

<style>

</style>