<template >
    <nav class="row mb-5 pb-3 ">
        <div class="col-lg-6 col-md-3 ">
                <a href="/" class="heading-style fw-bold ">CriticalCondition</a>
        </div>

        <div class="col-lg-6 col-md-9  ">
            <div class="">                
                <router-link to="/subuser" class="NavLink fw-light">Sub Users</router-link>
                <a href="#" class="NavLink fw-light">Discover</a>
                <a href="#" class="NavLink fw-light">Platform</a>
                <a href="#" class="NavLink fw-light">Support</a>
                <router-link to="/login" class="NavLink fw-light">Login</router-link>
                <!-- <a href="#" class="NavLink fw-light">Login</a> -->
                <!-- <a href="#" class="NavLink NavSign fw-light">Sign Up</a> -->
                <router-link to="/signup" class="NavLink NavSign fw-light">Sign Up</router-link>
            </div>
        </div>

    </nav>
</template>

<script>


export default {
    name:'NavBar'
}
</script>

<style>
.heading-style{
    color: #093542;
    text-decoration: none;
    /* font-weight: bold; */
}
.heading-style:hover{
    color: #093542;
    text-decoration: none;
}

.NavLink{
    margin-left: 28px;
    text-decoration: none;
    color: #093542;
    font-size: .8rem;
    /* font-weight: 300; */
    
}
.NavLink:hover{
    color: #093542;
    text-decoration: none;
}
.NavSign{
    border: 1px solid #00A99D;
    padding: 5px 10px;
    border-radius: 15px;
    background-color: #00A99D;
    color: white;
}
.NavSign:hover{
    color: white;
}
</style>