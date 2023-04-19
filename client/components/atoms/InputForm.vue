<template>
  <input :name="name"  @keyup="updateInput($event)" :type="type" class="input-form">
</template>
  
<script>
  export default {
    props: {
      name:String,
      type:String
    
    },
    methods: {
      updateInput(e) {
        this.$emit('inputz', e.target.value)
      },
    }
      
  }
  </script>
  
<style>

  .input-form {
    width: 100%;
    height: 32px;
    border: 1px solid gray
  }


</style>