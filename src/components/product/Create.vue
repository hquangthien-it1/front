<template>
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-body">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" v-model="product.name" class="form-control">
                    </div>

                    <div class="form-group">
                        <label>Price</label>
                        <input type="text" v-model="product.price" class="form-control">
                    </div>

                    <div class="form-group">
                        <label>Description</label>
                        <textarea v-model="product.description" class="form-control"></textarea>
                    </div>

                    <button @click="create()" v-show="product.name && product.price && product.description" class="btn btn-success pull-right">Create</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                product: {
                    name: '',
                    price: 0,
                    description: ''
                }
            }
        },

        methods: {
            create () {
                this.$http.post('api/products', this.product)
                    .then(response => {
                        this.$router.push('/feed')
                    })
            }
        }
    }
</script>