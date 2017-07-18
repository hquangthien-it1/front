<template>
    <div id="wrapper">
        <top-bar></top-bar>
        <left-bar></left-bar>
        <div class="content-page">
            <router-view></router-view>
            <footer-admin></footer-admin>
        </div>
        <right-bar></right-bar>
    </div>
</template>

<script>
    import Navbar from './components/templates/admin/Navbar.vue'
    import TopBar from './components/templates/admin/TopBar.vue'
    import LeftBar from './components/templates/admin/LeftBar.vue'
    import RightBar from './components/templates/admin/RightBar.vue'
    import Footer from './components/templates/admin/Footer.vue'
    import {mapState} from 'vuex'
    export default {
        components: {
            'nav-bar': Navbar,
            'left-bar': LeftBar,
            'right-bar': RightBar,
            'top-bar': TopBar,
            'footer-admin': Footer,
        },
        computed: mapState({
            userStore: state => state.userStore
        }),
        created () {
            const userObj = JSON.parse(window.localStorage.getItem('authUser'))
            this.$store.dispatch('setUserObj', userObj)
        }
    }
</script>
