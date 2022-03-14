<template>
 <div class="row no-gutters">
    <Navbar />
        <div class="col-md-6  no-gutters">
            <div class="leftside">
                <SignupPhotoIcon />
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
                                <fieldset class="fieldset">
                                    <p class="legend">Personalia:</p>
                                      Name: <input type="text"><br>
                                      Email: <input type="text"><br>
                                      Date of birth: <input type="text">
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
    import Navbar from './navbar.vue'
    export default {
        components:{
            SignupPhotoIcon,
            Navbar
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
     background-size: 100% 100%;
     background-size: cover;
     background-color: #fdfdfd;
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
.legend{
    position: absolute;
    top: -1rem;
    background-color: white;
}
.fieldset{
    display: block;
    margin-inline-start: 2px;
    margin-inline-end: 2px;
    padding-block-start: 0.35em;
    padding-inline-start: 0.75em;
    padding-inline-end: 0.75em;
    padding-block-end: 0.625em;
    min-inline-size: min-content;
    border-width: 2px;
    border-style: groove;
    border-color: threedface;
    border-image: initial;
    position: relative;
}
</style>