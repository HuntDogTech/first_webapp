
<template>

    <!--<router-view keep-alive></router-view>-->
    <!--导航-->
    <vn-header v-if="isShowTab"></vn-header>

    <!--需要填充的视图-->
    <router-view></router-view>

    <!--footer视图部分-->
    <vn-footer v-if="isShowTab"></vn-footer>

</template>

<script>
    export default {
        data() {
            return {
                isShowTab: true
            }
        },
        components:{
            'vnHeader': require('./components/header.vue'),
            'vnFooter': require('./components/footer.vue')
        }
    }
</script>
<style>
    body {
        font-family: Helvetica, sans-serif;
    }
</style>
