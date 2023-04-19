<template>
    <div class="input-group">
        <LabelForm :label="label" :forl="forl" ></LabelForm>
        <InputForm :name="name" @inputz="update" :type="type"/>
    </div>
</template>

<script>
    import InputForm from '../atoms/InputForm.vue';
    import LabelForm from '../atoms/LabelForm.vue';
    export default {
        components: {
            InputForm,
            LabelForm
        },
        props: {
            label:String,
            forl:String,
            name:String,
            type:String
        },
        data() {
            return {
                localValue: this.value,
                inputValue: ""
            }
        },
        methods: {
            update(value) {
                
                this.inputValue = value
                this.$emit ('inputz', this.inputValue)
            },
        }
    }
    
</script>


<style>
    .input-group {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 5px;
       
    }

</style>