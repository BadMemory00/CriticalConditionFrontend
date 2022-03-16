<template>
<div>

        <div class="card" id="card1">
            <div class="title">
                <h4>Hospital information</h4>
            </div>       
             <div class="card" id="card2">
                 <ul class="bar">
                    <li>
                        Name
                        <p class="value">value</p>
                    </li>
                    <li> 
                        Username
                        <p class="value">value</p></li>
                    <li>
                        password
                        <p class="value">value</p>
                    </li>
                    <li>
                        speciality
                        <p class="value">value</p>
                    </li>
                    <li>
                        Adress
                        <p class="value">value</p>
                    </li>
                    <li>
                        Phone number
                        <p class="value">value</p>
                    </li>

                    </ul>
                                        
                 
             </div>
        </div>
</div>
</template>
<style >
#card1{
    margin-top: 80px;
    margin-left:400px;
    width: 450px;
    height: 520px;
    border-radius: 20px;
    background-color: rgb(242, 242, 242);
    border-style: none;
}
.title{
    text-align: center;
    margin-top: 20px;
}
#card2{
    margin-top: 5px;
    margin-left:80px;
    width: 300px;
    height: 420px;
    border-radius: 20px;
    border-style: none;
    

}
.bar{
    margin-top:10px;
}
.label{
     
    margin-left: 5px;
    font-weight: bold;
    
    
    
}
.value{
    
    margin-left: 28px;
    background-color: rgb(242, 242, 242);
    border-style: none;
    width: 170px;
     

}
.bar {
  list-style: none;
}
.bar >li {
  position: relative;
}
.bar>li:before {
  content: '\25CF';
  margin-right: 15px;
  font-size: 18px;
}
.bar>li:after {
  position: absolute;
  left: 0;
  top: 0;
  content: '';
  border-left: 3px solid  #00a89c;;
  margin-left: 5px;
  height: 100%;
}
.bar >li:first-of-type:after {
  top: 17px;
}
.bar >li:last-of-type:after {
  top: -3px;
}


</style>