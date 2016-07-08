<template>
    <div id="about">
        {{ message }}
    </div>
</template>
<style>
    body{
        background-color:#fff;
    }
</style>
<script>
    export default {
        data () {
            return {
                data: {
                    message: '关于猎狗团队'
                }
            }
        }
    }
</script>
