<template>
    <!-- ========== Left Sidebar Start ========== -->
    <div class="left side-menu">
        <div class="sidebar-inner slimscrollleft">

            <!-- User -->
            <div class="user-box">
                <div class="user-img">
                    <img src="/src/assets/admin/assets/images/users/avatar-1.jpg" alt="user-img" title="Mat Helme" class="img-circle img-thumbnail img-responsive">
                    <div class="user-status online"><i class="zmdi zmdi-dot-circle"></i></div>
                </div>
                <h5><a href="#">Hoàng Quang Thiên</a> </h5>
                <ul class="list-inline">
                    <li>
                        <a href="#" >
                            <i class="zmdi zmdi-settings"></i>
                        </a>
                    </li>

                    <li>
                        <a href="#" class="text-custom">
                            <i class="zmdi zmdi-power"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <!-- End User -->
            <hr>
            <!--- Sidemenu -->
            <div id="sidebar-menu">
                <ul>

                    <router-link tag="li" :to="{ name: 'admin.index.index' }">
                        <a class="waves-effect"><i class="zmdi zmdi-view-dashboard"></i> <span> Trang thống kê </span> </a>
                    </router-link>

                    <router-link tag="li" :to="{ name: 'admin.user.index' }">
                        <a class="waves-effect"><i class="zmdi zmdi-format-underlined"></i> <span> Người dùng </span> </a>
                    </router-link>

                    <router-link tag="li" :to="{ name: 'admin.cat.index' }">
                        <a class="waves-effect"><i class="zmdi zmdi-view-list"></i> <span> Danh mục tin </span> </a>
                    </router-link>

                    <router-link tag="li" :to="{ name: 'admin.music.index' }">
                        <a class="waves-effect"><i class="fa fa-music"></i> <span> Bài hát </span> </a>
                    </router-link>

                    <router-link tag="li" :to="{ name: 'admin.video.index' }">
                        <a class="waves-effect"><i class="fa fa-video-camera"></i> <span> Video </span> </a>
                    </router-link>

                    <router-link tag="li" :to="{ name: 'admin.contact.index' }">
                        <a class="waves-effect"><i class="zmdi zmdi-email"></i> <span> Liên hệ </span> </a>
                    </router-link>

                    <router-link tag="li" :to="{ name: 'admin.adv.index' }">
                        <a class="waves-effect"><i class="zmdi zmdi-collection-item"></i> <span> Quảng cáo </span> </a>
                    </router-link>

                </ul>
                <div class="clearfix"></div>
            </div>
            <!-- Sidebar -->
            <div class="clearfix"></div>

        </div>

    </div>
    <!-- Left Sidebar End -->
</template>