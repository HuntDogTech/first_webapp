<style>

.footer{
    background:#fff;
    border-top: 1px solid #b2b2b2;
}
</style>

<template>
    <footer>
        This is footer
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