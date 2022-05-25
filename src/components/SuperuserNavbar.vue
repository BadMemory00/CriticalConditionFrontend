<template>
    <div class="navbar">
        <div class="hospital-name">
            {{this.$hospitalName}}
        </div>        
        <div class="user-name">
            Hello, 
            <span>
                {{this.$superuserName}}
            </span>
        </div>
    </div>
</template>
<style>
    :root{
        --primarycolor: #00A99D;
    }
    .navbar{
        display: flex;
        flex-flow: nowrap;
        margin-right: 0.5rem;
        background-color: whitesmoke;
    }
    .hospital-name{
        color: var(--primarycolor);
        font-size: 1.5rem;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    .user-name{
        font-size: .9rem;
        font-weight: 650;
    }
</style>

