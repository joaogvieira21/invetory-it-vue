<template>
    <div class="search-container">
        <input  type="text" placeholder="Search...">
    </div>
    <div class="title-menu-container">
        <p class="title-menu">MAIN NAVIGATION</p>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>
.search-container {
    background-color: rgba(255,255,255,0.2);
    height: 10%;
    width: 80%;
    padding: 10px;
    display: flex;
    box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);
    margin: 15px auto;
}

.search-container input {
    background-color: transparent;
    border:0;
    height: 28px;
    font-size: 20px;
    outline: none;
    color:white;
}
.search-container input::placeholder {
    color: #f1f1f1;
}


.title-menu-container {
    width: 100%;
    height: 50px;
    background-color: rgb(26, 24, 24);
    display: flex;
    align-items: center;
    
}

.title-menu {
    color: rgb(158, 152, 152);
    margin-left: 13px;
}
</style>