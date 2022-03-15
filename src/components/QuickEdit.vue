<template>
    <div id="edit-2">
        <div class="card w-50 to-edit">
            <div class="card-body">
                <p class="card-title edit-title-card">
                <font-awesome-icon icon="fa-solid fa-hourglass" class="icon-edit-card"/>
                Quick Edit
                <button @click="ChangeVisibility6()" class="exit"><font-awesome-icon icon="fa-solid fa-xmark"/></button>
            </p>
            <hr>
            <p>
                <span class="quick-edit-info">number of failures</span>
                <input type="text" class="quick-edit-input">
            </p>
            <p>
                <span class="quick-edit-info">Downtime</span>
                <input type="text" class="quick-edit-input">
            </p>
            </div>
            <div class="submit-button mb-2">
                <button class="Submit-button-1">Submit</button>
                <button class="Submit-button-2">Cancel</button>
             </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'QuickEdit',
     methods:{
        ChangeVisibility6(){
            document.getElementById("edit-2").style.visibility = "hidden";
        }
    },
}
</script>

<style>
.to-edit{
    background-color: white;
    border-radius: 25px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
}
.icon-edit-card{
    font-weight: 400;
    opacity: .5;
    margin-right: 10px;
}
.edit-title-card{
    font-weight: 600;
}
.quick-edit-info{
    font-size: .9rem;
    margin-right: 10px;
}
.quick-edit-input{
    border: 0;
    background-color: #f7f9f8;
    height: 1.5rem;
    font-size: .9rem;
}

</style>