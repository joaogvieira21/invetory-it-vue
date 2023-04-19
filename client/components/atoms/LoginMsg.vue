<template>
    <p class="msg" :style="`color:${colorMsg}`">{{ msg }}</p>
</template>

<script>
    export default {
        props: {
            msg: String,
            colorMsg: String
        }
    }
</script>

<style>
    .msg {
        padding-bottom: 25px;
    }
</style>