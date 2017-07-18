<template>
    <div class="content">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="card-box">

                        <h4 class="header-title m-t-0 m-b-30">Thêm sản phẩm</h4>

                        <div class="row">
                            <div class="col-lg-12">
                                <form id="create_news" class="form-horizontal" action="" method="POST" enctype="multipart/form-data">
                                    <div class="form-group">
                                        <label class="col-md-2 control-label">Tên sản phẩm (*)</label>
                                        <div class="col-md-10">
                                            <input type="text" class="form-control" name="name" placeholder="Nhập tên sản phẩm...">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-md-2 control-label" for="example-email">Giá sản phẩm (*)</label>
                                        <div class="col-md-10">
                                            <input type="text" id="price" name="price" class="form-control" placeholder="Nhập giá sản phẩm...">
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label class="col-md-2 control-label" for="">Tình trạng sản phẩm (*)</label>
                                        <div class="col-md-10">
                                            <input type="text" name="new" class="form-control" placeholder="Tình trạng sản phẩm (mới, cũ, like new ...)">
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label class="col-md-2 control-label" for="example-email">Từ khóa</label>
                                        <div class="col-md-10">
                                            <input type="text" name="tags" value="" data-role="tagsinput" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-md-2 control-label" for="picture">Ảnh sản phẩm</label>
                                        <div class="col-md-10">
                                            <input type="file" name="picture" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-md-2 control-label">Chi tiết sản phẩm</label>
                                        <div class="col-md-10">
                                            <ckeditor v-model="content" :config="config"></ckeditor>
                                        </div>
                                    </div>
                                    <div class="form-group text-center">
                                        <input type="submit" name="submit" value="Thêm mới" class="btn btn-lg btn-primary">
                                        <input type="reset" name="reset" value="Nhập lại" class="btn btn-lg btn-default">
                                    </div>
                                </form>
                            </div><!-- end col -->

                        </div><!-- end row -->
                    </div>
                </div><!-- end col -->
            </div>

        </div> <!-- container -->

    </div> <!-- content -->
</template>
<script>
    import Ckeditor from 'vue-ckeditor2'
    $(document).ready(function () {
        $('#create_news').on('keyup keypress', function(e) {
            let keyCode = e.keyCode || e.which;
            if (keyCode === 13) {
                e.preventDefault();
                return false;
            }
        });
    });
    export default {
        data () {
            return {
                content: '',
                config: {
                    toolbar: [
                        { name: 'document', groups: [ 'mode', 'document', 'doctools' ], items: [ 'Source' ] },
                        { name: 'clipboard', groups: [ 'clipboard', 'undo' ], items: [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ] },
                        { name: 'editing', groups: [ 'find', 'selection', 'spellchecker' ], items: [ 'Scayt' ] },
                        '/',
                        { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ], items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat' ] },
                        { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ], items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote' ] },
                        { name: 'links', items: [ 'Link', 'Unlink', 'Anchor' ] },
                        { name: 'insert', items: [ 'Image', 'Table', 'HorizontalRule', 'SpecialChar' ] },
                        '/',
                        { name: 'styles', items: [ 'Styles', 'Format' ] },
                        { name: 'tools', items: [ 'Maximize' ] },
                        { name: 'others', items: [ '-' ] },
                        { name: 'about', items: [ 'About' ] }
                    ],
                    height: 300
                }
            }
        },
        components: { Ckeditor }
    }
</script>
