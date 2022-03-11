<template>
    <nav class="row">
        <div class="col-md-5">
            <a href="#" class="heading-style fw-bold">CriticalCondition</a>
        </div>

        <div class="col-md-7">
            <a href="#" class="NavLink  fw-light">Product</a>
            <a href="#" class="NavLink  fw-light">Discover</a>
            <a href="#" class="NavLink  fw-light">Platform</a>
            <a href="#" class="NavLink  fw-light">Support</a>
            <a href="#" class="NavLink  fw-light">Login</a>
            <a href="#" class="NavLink NavSign  fw-light">Sign Up</a>
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
}
.heading-style:hover{
    color: #093542;
}

.NavLink{
    margin-left: 34px;
    text-decoration: none;
    color: #093542;
    font-size: .8rem;
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