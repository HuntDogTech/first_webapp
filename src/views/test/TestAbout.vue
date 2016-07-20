<template>
    <div id="about">
        <h1>关于我们：</h1>
        <ul>
            <li v-for="todo in todos">
                {{ todo.text }}
            </li>
        </ul>
    </div>
</template>

<script>
    module.exports = {
        data: function () {
            return{
                todos: [
                    { text: 'Learn JavaScript' },
                    { text: 'Learn Vue.js' },
                    { text: 'Build Something Awesome' }
                ]
            }
        }
    }
</script>
<style>
    body{
        /*background-color:#fff;*/
    }
</style>