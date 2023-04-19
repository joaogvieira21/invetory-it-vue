<template>
    <div class="profile-header">
        <NameProfileHeader></NameProfileHeader>
    </div>
</template>

<script>
    import NameProfileHeader from '../atoms/NameProfileHeader.vue';
    export default {
        components: {
            NameProfileHeader
        }
    }
</script>

<style>
    .profile-header {
        background-color: rgba(69, 175, 69);
        width: 100%;
    }
</style>