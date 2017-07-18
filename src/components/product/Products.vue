<template>
    <div>
        <my-product v-for="product in products" :product="product" :authenticatedUser="authenticatedUser" :key="product.name">

        </my-product>
    </div>
</template>

<script>
    import Product from './Product.vue'

    export default {
        data () {
            return {
                products: []
            }
        },

        computed :{
            authenticatedUser () {
                return this.$auth.getAuthenticatedUser()
            }
        },

        components: {
            'my-product': Product
        },
        created () {
            this.$http.get('api/products')
                .then(response => {
                    this.products = response.body
                })
        }
    }
</script>