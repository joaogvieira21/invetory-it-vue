<template>
    <LoginMsg :msg="msg" :colorMsg="colorMsg"></LoginMsg>
    <form>
        <InputLabelForm  name="email" label="E-mail" forl="email" type="text" @inputz="updateLogin"/>
        <InputLabelForm name="password" label="Password" forl="password" type="password" @inputz="updatePassword"/>
        <ForgetPassword></ForgetPassword>
        <SubmitForm @click="submitForm"></SubmitForm>
    </form>
</template>


<script>
    import InputLabelForm from '../molecules/InputLabelForm.vue'
    import SubmitForm from '../atoms/SubmitForm.vue';
    import ForgetPassword from '../atoms/ForgetPassword.vue';
    import LoginMsg from '../atoms/LoginMsg.vue';

    export default {
        components: {
            InputLabelForm,
            SubmitForm,
            ForgetPassword,
            LoginMsg
        },
        data() {
            return {
                email: '',
                password: '',
                msg:'',
                colorMsg: 'red'
            }
        },
        methods: {
            submitForm(e) {
                e.preventDefault()
                this.login()
            },
            updatePassword(value) {
                this.password = value
            },
            updateLogin(value) {
                this.email = value
                
            },
            async login() {
                
                const dataJson = JSON.stringify({email: this.email, password: this.password})
    

                const req = await fetch('http://localhost:3050/auth/login', {
                    method: "POST",
                    headers: {"Content-Type" : "application/json"},
                    body: dataJson
                }) 

                const res = await req.json()
                if (res.token==undefined) {
                    this.msg = res.message
                    this.colorMsg = "red"
                    setTimeout(()=> {
                        this.msg = ""
                        this.colorMsg = ""
                    }, 4000)
                } else {
                    console.log(res.message)
                    const token = res.token
                    localStorage.setItem('token', token)
                    this.$router.push('/profile')
                }
            }
        }
    }
</script>

<style>
    form {
        width:300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: start;
        gap: 5px;
    }
</style>