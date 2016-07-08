
<template>

    <!--<router-view keep-alive></router-view>-->
    <router-view></router-view>
    <vn-header v-if="isShowTab"></vn-header>

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
