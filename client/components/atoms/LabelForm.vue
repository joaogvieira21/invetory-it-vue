<template>
    <label :for='forl'> {{ label }}</label>
</template>

<script>
    export default {
        props: {
            label: String,
            forl:String
        }
    }
</script>

<style>

</style>