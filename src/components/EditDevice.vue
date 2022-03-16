<template >
    <div id="edit-1">
        <div class="card w-75 edit-card">
            <div class="card-body">
            <p class="card-title title-card">
                <font-awesome-icon icon="fa-solid fa-pen-to-square" class="icon-edit"/>
                Edit
                <button @click="ChangeVisibility5()" class="exit"><font-awesome-icon icon="fa-solid fa-xmark"/></button>
            </p>
            <hr>
            <div class="card mt-4 edit-card-2">
                <div class="card-body">
                    <p class="card-title card-title-info">General Info</p>
                    <div class="d-flex inner-card">
                        <div class="card-margin">
                            <span class="inner-card-text">Name</span>
                            <input type="text" class="d-block inner-card-input">
                        </div>
                        <div class="card-margin">
                            <span class="inner-card-text">Model</span>
                            <input type="text" class="d-block inner-card-input">
                        </div>
                        <div class="card-margin">
                            <span class="inner-card-text">Brand</span>
                            <input type="text" class="d-block inner-card-input">
                        </div>
                        
                    </div>
                    <div class="d-flex mt-2 inner-card">
                        <div class="card-margin">
                            <span class="inner-card-text">Type of service</span>
                            <input type="text" class="d-block inner-card-input">
                        </div>
                        <div class="card-margin">
                            <span class="inner-card-text">Purachase date</span>
                            <input type="text" class="d-block inner-card-input">
                        </div>                        
                    </div>
                </div>
            </div>
            <div class="card mt-5 edit-card-2">
                <div class="card-body">
                    <p class="card-title card-title-info2">Porbability Info</p>
                    <div class="d-flex inner-card">
                        <div class="card-margin">
                            <span class="inner-card-text">No. of working days</span>
                            <input type="text" class="d-block inner-card-input">
                            <span class="little-card">per year</span>
                        </div>
                        <div class="card-margin">
                            <span class="inner-card-text">No.Failures</span>
                            <input type="text" class="d-block inner-card-input">
                            <span class="little-card">times</span>
                        </div>
                        <div class="card-margin">
                            <span class="inner-card-text">Downtime</span>
                            <input type="text" class="d-block inner-card-input">
                            <span class="little-card">days</span>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="card mt-5 edit-card-2">
                <div class="card-body">
                    <p class="card-title card-title-info">Severity Info</p>
                    <div class="d-flex inner-card">
                        <div class="card-margin">
                            <span class="inner-card-text">Safety</span>
                            <select class="inner-card-input">
                                <option class="inner-card-input">type of safety</option>
                                <option class="inner-card-input">type of safety</option>
                                <option class="inner-card-input">type of safety</option>
                            </select>
                        </div>
                        <div class="card-margin">
                            <span class="inner-card-text">Function</span>
                            <select class="inner-card-input">
                                <option class="inner-card-input">type of safety</option>
                                <option class="inner-card-input">type of safety</option>
                                <option class="inner-card-input">type of safety</option>
                            </select>
                        </div>
                        <div class="card-margin">
                            <span class="inner-card-text">Area</span>
                            <select class="inner-card-input">
                                <option class="inner-card-input">type of safety</option>
                                <option class="inner-card-input">type of safety</option>
                                <option class="inner-card-input">type of safety</option>
                            </select>
                        </div>
                        
                    </div>
                    <div class="d-flex mt-2 inner-card">
                        <div class="card-margin">
                            <span class="inner-card-text">Service cost</span>
                            <input type="text" class="d-block inner-card-input">
                        </div>
                        <div class="card-margin">
                            <span class="inner-card-text">Operation cost</span>
                            <input type="text" class="d-block inner-card-input">
                        </div>
                        <div class="card-margin">
                            <span class="inner-card-text">Purachase cost</span>
                            <input type="text" class="d-block inner-card-input">
                        </div>                        
                    </div>
                </div>
            </div>
            <div class="card mt-5 edit-card-2">
                <div class="card-body">
                    <p class="card-title card-title-info2">Porbability Info</p>
                    <div class="d-flex inner-card">
                        <div class="card-margin ">
                            <span class="inner-card-text">No. of working days</span>
                            <!-- <input type="text" class="d-block inner-card-input"> -->
                            <select class="inner-card-input d-block">
                                <option class="inner-card-input">type of safety</option>
                                <option class="inner-card-input">type of safety</option>
                                <option class="inner-card-input">type of safety</option>
                            </select>

                        </div>      
                    </div>
                </div>
            </div>
            </div>
            <div class="submit-button mt-2 mb-2">
                <button class="Submit-button-1">Submit</button>
                <button class="Submit-button-2">Cancel</button>
             </div>
        </div>
    </div>
</template>
<script>

export default {
    name:'EditDevice',
    components:{
        
    },

    methods:{
        ChangeVisibility5(){
            document.getElementById("edit-1").style.visibility = "hidden";
        },

    },
}

</script>

<style>
#edit-1{
    visibility: hidden;
}
.edit-card{
    background-color: #f7f9f8;
    border-radius: 25px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
}
.title-card{
    font-weight: 600;
}
.icon-edit{
    margin-right: 10px;
    font-weight: bold;
    opacity: .5;
}
.exit{
    float: right;
    background-color: transparent;
    border: 0;
    font-weight: bold;
}
.card-title-info{
    position: relative;
    top: -31px;
    left: 20px;
    font-weight: 600;
    /* font-size: 1rem; */
    background: linear-gradient(#f7f9f8,white);
    width: 14.5%;
    
}
.edit-card-2{
    border-radius: 25px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
    border: 1px solid #f7f9f8;
}
.card-margin{
    margin-right: 40px;
}
.inner-card{
    position: relative;
    top: -20px;
}
.inner-card-text{
    font-size: .8rem;
    font-weight: 400;
}
.inner-card-input{
    width: 11.5rem;
    height: 1.4rem;
    border: 0;
    background-color: #f7f9f8;
    font-size: .7rem;
}
.card-title-info2{
   position: relative;
    top: -31px;
    left: 20px;
    font-weight: 600;
    /* font-size: 1rem; */
    background: linear-gradient(#f7f9f8,white);
    width: 18%;     
}
.little-card{
    float: right;
    font-size: .7rem;
    font-weight: 400;
}
.submit-button{
    text-align: center;
    
}
.Submit-button-1{
     margin-left: 20px;
  margin-right: 20px;
  border: 2px #50857A solid;
  background-color: white;
  padding: 0px 20px;
  border-radius: 7px;
  font-size: .7rem;
}
.Submit-button-2{
     margin-left: 20px;
  margin-right: 20px;
  border: 2px #B4898D solid;
  background-color: white;
  padding: 0px 20px;
  border-radius: 7px;
  font-size: .7rem;
}

</style>