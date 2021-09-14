<template>
<header>
<div class="container">
    <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false"
                data-target="navbar-menu-toggle" @click="toggle">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div id="navbar-menu-toggle" class="navbar-menu" :class="{ 'is-active' : menuActive }">
            
            <div class="navbar-end">
                <a class="navbar-item">Visitor Info </a>
                <a class="navbar-item"> Events </a>
                <a class="navbar-item">Get involved </a>
                <router-link to="/about" class="navbar-item" :class="{ 'active-menu' : (currentRouteName == 'About')}"> About </router-link>
            </div>
        </div>
    </nav>
    <div class="logo-wrapper is-flex">
        <router-link class="" to="/">
            <img src="@/assets/images/love-park-logo.png" width="112" height="28">
        </router-link>
        <h1>Spring into LOVE</h1>
    </div>
</div>
</header>
</template>
<script>
    export default {
        data() {
            return {
                menuActive:false
            }
        },
        methods:{
            toggle:function() {
                this.menuActive = !this.menuActive
            }
        },
        computed: {
            currentRouteName() {
                return this.$route.name;
            }
        }
    }
</script>