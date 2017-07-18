<template>
    <div class="row">
        <div class="col-md-4 col-md-offset-4">
            <form class="form-signin">
                <h2 class="form-signin-heading text-center">Please register</h2>
                <label for="email" class="sr-only">Email address</label>
                <input type="email" id="email" class="form-control" v-model="email" placeholder="Email address" required autofocus>
                <br>
                <label for="password" class="sr-only">Password</label>
                <input type="password" v-model="password" id="password" class="form-control" placeholder="Password" required>
                <br>
                <label for="name" class="sr-only">Fullname</label>
                <input type="text" v-model="name" id="name" class="form-control" placeholder="Full name" required>
                <br />
                <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                email: '',
                password: '',
                name: '',
            }
        }
    }
</script>

<style>

</style>