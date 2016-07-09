

<template>
    <footer class="footer">
        <div class="container">
            <p class="text">版权所有，翻版不究! HuntDog出版~~</p>
        </div>
    </footer>
</template>

<script>
    export default {
        replace:true,
        props: ['isShow'],
        ready: function () {
            //console.log(this.isShow)
        }
    }
</script>

<style>
    html {
        position: relative;
        min-height: 100%;
    }
    body {
        margin-bottom: 60px;
    }
    .footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 60px;
        background-color: #f5f5f5;
    }

    .container {
        width: auto;
        max-width: 680px;
        padding: 0 15px;
        text-align: center;
    }
    .container .text {
        margin: 20px 0;
    }
</style>