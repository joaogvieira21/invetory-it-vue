<template>
    <header class="header-profile">
        <LogoContainerHeader></LogoContainerHeader>
        <ProfileHeader></ProfileHeader>
    </header>
</template>

<script>
    import LogoContainerHeader from '../molecules/LogoContainerHeader.vue'
    import ProfileHeader from '../molecules/ProfileHeader.vue';
    export default {
        components: {
            LogoContainerHeader,
            ProfileHeader
        }
    }
</script>

<style>
    .header-profile {
        display: flex;
        width: 100%;
    }
</style>