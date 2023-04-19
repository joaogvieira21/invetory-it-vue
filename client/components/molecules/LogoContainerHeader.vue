<template>
    <div class="logo-container">
        <Logo class="logo"></Logo>
    </div>
</template>

<script>
    import Logo from '../atoms/Logo.vue'
    export default {
        components: {
            Logo
        }
    }
</script>

<style>

    .logo-container {
        max-width: 15%;
        background-color: green;
    }
</style>