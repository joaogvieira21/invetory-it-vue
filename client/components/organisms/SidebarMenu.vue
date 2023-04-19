<template>
    <div class="sidebar">
        <InputSearch></InputSearch>
    </div>
</template>

<script>
    import InputSearch from "../atoms/InputSearch.vue";
    export default {
        components: {
            InputSearch
        }
    }

</script>


<style>
    .sidebar {
        min-height: 120vh;
        width: 15%;
        background-color: rgb(49, 47, 47);
        display: flex;
        flex-direction: column;
    }


</style>