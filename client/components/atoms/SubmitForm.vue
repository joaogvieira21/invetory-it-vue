<template>
    <input class="submit-inp" type="submit" :value="value">
</template>


<script>
    export default {
        props: {
            value:String
        }

    }
</script>

<style>
    .submit-inp {
        width: 100%;
        height: 32px;
        background-color: rgba(69, 175, 69);
        border: none;
        color: white;
        font-weight: bolder;
        cursor:pointer;
    }

</style>