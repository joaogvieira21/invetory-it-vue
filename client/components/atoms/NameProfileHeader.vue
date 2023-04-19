<template>
    <h1>teste</h1>
</template>

<script>
    export default {
        mounted() {
            this.loadData()
        },
        methods: {
           async loadData() {
                console.log("teste")
                const response = await fetch('http://localhost:3050/session', {
                    method: 'GET',
                    credentials: 'include' // permite o envio das cookies
                })
                const data = await response.json()
                console.log(data)
                
            },
        }
    }
</script>

