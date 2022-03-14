<template>
 <div class="row no-gutters">

            <div class="col-md-6  no-gutters">
                <div class="leftside">
                    
                </div>
            </div>
            <div class="col-md-6 no-gutters">
                <div class="rightside">
                    <div>
                        <h2>write your hospital's details</h2>
                      </div>          
                      
                    <div class="row">
                        <div class="col-md-5" style="margin-top: 70px;">

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
                            <fieldset style="border:2px solid black; padding:20px; ">

                                <legend style="text-align: left; margin-top:-15px; font-weight:bold">Address</legend>

                                <label for="country" >Country</label><br>
                                   <input  type="text" id="country" name="country"><br>
                               <label for="state" >state</label><br>
                                   <input  type="text" id="stste" name="state"><br>
                                <label for="city" >city</label><br>
                                    <input  type="text" id="city" name="city"><br>
                                <label for="street">street</label><br>
                                    <input  type="text" id="'street" name="street">
                                     
                                   
                            </fieldset>    
                        </div>
                    </div>     
                    
                <div class="footer">
                    <div>
                       <button class="button"  type="submit" > Sign Up</button>
                       <br>
                       <h5 class="l-login">Already a member?<a href="#" style="color: #00a89c ">login</a></h5>
                
                </div>
                </div>
                 
                
     </div>
     </div>
     </div>
</template>
<script>
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
    background-image: url('/images/1.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-size: 97% 100%;
    


 
}

.rightside{
    
    
    
}
h2{
    text-align: center;
    margin-top:80px ;
    font-size:60px ;
    padding-bottom:100px
}
.row{
    display: flex;
    justify-content: center;
}
label{
    font-size: 20px;
    font-weight: bold;
}
 
input{
    width: 90%;
    height: 12%;
    background-color: #d1d1d1;
    border: none
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
    width: 600px ;
    border-radius : 20px;
    height: 50px;
    font-size: 20px;
    margin-top: 150px;
    background-color: #00a89c;
}
.l-login{
    margin-top: 30px;
    margin-left: 200px;
}
 
 
    
   

</style>