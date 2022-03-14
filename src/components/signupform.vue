<template>
 <div class="row no-gutters">

        <div class="col-md-6  no-gutters">
            <div class="leftside">
                <template>
                    <SignupPhotoIcon />
                </template>
            </div>
        </div>

        <div class="col-md-6 no-gutters">
                <div class="rightside">

                            <div>
                                <h2>write your hospital's details</h2>
                            </div>          
                                
                            <div class="row">

                                        <div class="col-md-5"  >
                                            <label for="hospital_name">Hospital name </label><br>
                                                    <input  type="text" name="hostital_name" id="hospital_name"   /><br>
                                            <label for="email" >Email</label><br>
                                                <input  type="email" id="email" name="email"   /><br>
                                            <label for="hospital_pecialty">Hospital Specialty</label><br>
                                                <select class="select" id="hospital_pecialty" name="hospital_pecialty">
                                                    <option value=""></option>                                        
                                                </select><br>
                                            <label for="phone number" >Phone number</label><br>
                                                <input  type="text" id="phone_number" name="phone_number"  >
                                            
                                        </div>

                                        <div class="col-md-6">
                                            <form>
                                                <fieldset class="form-group border p-0">
                                                    <legend class="w-auto px-2" style="margin-right:20px; margin-bottom:20px">User's Credentials</legend>
                                                    <div class="form-group">
                                                        <label for="username">Username:</label>
                                                        
                                                    </div>
                                                </fieldset>
                                            </form>

                                            
                                        </div>     
                                        
                                                <!----footer ----->
                                        <div class="footer">
                                            <div>
                                            <button class="button"  type="submit" > Sign Up</button><br>
                                            <h5 class="l-login">Already a member?<a href="#" style="color: #00a89c ">login</a></h5>
                                            </div>  

                                        </div>
                                            <!---- end og the footer ----->

                            </div>
                    
                </div>
        </div>
 </div>

</template>


<script>
    import SignupPhotoIcon from './icons/IconSignupPhoto.vue'
    export default {
        components:{
            SignupPhotoIcon
        }
    }
</script>


<style >
body{
    overflow: hidden;
}
.leftside , .rightside{
    height: 50vh;
    width: 100%;
}


@media screen and (min-width:768px) {

    .leftside ,.rightside{
        height: 100vh;;
    }
    
}


.leftside{
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-size: 100% 100%;
    

 
 
}

.rightside{
    background-color: 	#F5FFFA;
     background-size: 100% 100%;
     background-size: cover;
    
    
    
    
}
h2{
    text-align: center;
    
    font-size:30px ;
    padding-bottom:100px
}
.row{
    display : flex; 
    justify-content: center;
   
}
label{
    font-size: 15px;
    font-weight: bold;
}
 
input{
    width: 90%;
    height: 12%;
    background-color: #d1d1d1;
    border: none;
}

.select{
width: 90%;
height: 12%;
background-color: #d1d1d1;
border: none
}
 
.footer{
    display: flex;
    justify-content: center;
}
.button{
    width: 350px ;
    border-radius : 20px;
    height: 40px;
    font-size: 20px;
    margin-top: 80px;
    background-color: #00a89c;
}
.l-login{
    margin-top: 17px;
    margin-left: 80px;
     font-size: 17px;
} 
 
 
    
   

</style>