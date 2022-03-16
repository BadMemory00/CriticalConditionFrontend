<template>
<div>

        <div class="card" id="card1">
            <div class="title">
                <h4>Hospital information</h4>
            </div>       
             <div class="card" id="card2">
                 <form>
                     
                     <label for="">Name</label><br>
                     <input type="text" name="name"><br>
                      <label for="username">Username</label><br>
                     <input type="text" name="username"><br>
                      <label for="password">Password</label><br>
                     <input type="text" name="password"><br>
                      <label for="specialty">Specialty</label><br>
                     <input type="text" name="specialty"><br>
                      <label for="address">Address</label><br>
                     <input type="text" name="address"><br>
                      <label for="phoneNumber">Phone number</label><br>
                     <input type="text" name="phoneNumber">
                 </form>
             </div>
        </div>
</div>
</template>
<style >
#card1{
    margin-top: 90px;
    margin-left:400px;
    width: 450px;
    height: 500px;
    border-radius: 20px;
    background-color: rgb(242, 242, 242);
    border-style: none;
}
.title{
    text-align: center;
    margin-top: 20px;
}
#card2{
    margin-top: 10px;
    margin-left:80px;
    width: 300px;
    height: 400px;
    border-radius: 20px;
    border-style: none;
    

}
label{
    margin-top: 10px;
    margin-left: 60px;
    font-weight: bold;
    
    
}
input{
    
    margin-left: 60px;
     background-color: rgb(242, 242, 242);
    border-style: none;
     

}


</style>