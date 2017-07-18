<template>
    <div class="col-md-3">
        <div class="thumbnail">
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/ce54bf11889067.562541ef7cde4.png" alt="">
            <div class="cation">
                <p>{{ product.user_id }}</p>
                <h3 style="height: 40px"> {{ product.name }} </h3>
                <h3> {{ product.price }} </h3>
                <hr>
                <p>
                    <a href="#" class="btn btn-default">
                        Wish list
                    </a>
                    <a href="#" class="btn btn-success">
                        Buy now
                    </a>
                </p>
                <hr>
                <p>
                    <a href="#" @click="deleteProduct" class="btn btn-danger" role="button">Delete</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import swal from 'sweetalert'

    export default {
        props: ['product', 'authenticatedUser'],
        methods: {
            deleteProduct (){
                swal({
                        title: "Are you sure?",
                        text: "You will not be able to recover this product!",
                        type: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#DD6B55",
                        confirmButtonText: "Yes, delete it!",
                        closeOnConfirm: false
                    },

                    function(){
                        this.$http.delete('api/products/' + this.product.id)
                            .then(response => {
                                console.log(response)
                            })
                        swal("Deleted!", "Your product has been deleted.", "success");
                    }.bind(this)
                );

            }
        }
    }
</script>