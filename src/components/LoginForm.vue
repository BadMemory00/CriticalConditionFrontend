<template>
    <div class="row loginform" >
        <div class="col-lg-6">
            <img src="../assets/loginphoto.jpg" alt="">
        </div>
        <div class="col-lg-6 rightSide">
            <h3>Login</h3>
            <p>Let's Get Started</p>
            <div class="row upper-super">
                <p>
                <span>Super-user</span>
                <span>Sup-user</span>
                </p>
            </div>
            <div class="email">
                <h6>Email</h6>
                <div class="middle">
                  <img src="../assets/16839673131548336221.svg" alt="">
                  <input type="email" placeholder="criticalcondition@critical.com">
                </div>
            </div>

            <div class="email">
                <h6>password</h6>
                <div class="middle">
                  <img src="../assets/last.webp" alt="">
                  <input type="password" placeholder="critical1234">
                </div>
            </div>

            <div class="remeber">
                <input type="checkbox">
                <p>Remember me</p>
                <span>Forget password?</span>

            </div>
            <div class="but">   
                <button>Login</button>
                <div>Don't have account?<span>Sign up</span></div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    name:'LoginForm',
}
</script>

<style>
 .loginform img{
     width: 100%;
 }
 .loginform .rightSide{
     text-align: center;
 }
 .loginform .rightSide h3{
     color: #0a2b34;
 }

 .loginform .rightSide p
 {
     color:#919496;
     word-spacing: 2px;
    
 
 }
 .loginform .upper-super{
     width: 70%;
     margin: 0 auto;
 }
 .loginform .upper-super p{
     border-bottom:1px solid #919496;
 }
  .loginform .upper-super span:first-of-type{
      margin-right: 40px;
      border-right: 1px solid #919496;
      padding-right: 30px;
      color: #3b9f94;
      font-size: 20px;
      font-weight: 600;

      
  }
  .loginform .upper-super span:last-of-type{
      font-size: 20px;
      color: #4e626a;
      
  }
  .email{
      width: 70%;
      margin: 20px auto;
  }
  .email .middle{
       display: flex;
   }
  .email h6{
      text-align: left;
      font-weight: lighter;
      color:#919496;
      margin-top: 20px;
  }
   .email img{
       color:#08e72d;
       width: 20px;
       height: 20px;
       margin-top: 5px;
    
      
   }
   .email input{
       width: 100%;
       border: none;
       border-bottom: 1px solid #4e626a;
       display: inline;
       
   }

   .remeber{
       display: flex;
       width: 70%;
       margin: 30px auto 20px;
   }
    .remeber input{
        background-color: #08e72d;
        cursor: pointer;
    }

    .remeber p{
        margin-top: -5px;
        margin-left: 5px;
        margin-right: 120px;
    }
    .remeber span{
        color:#00a89b;
        margin-top: -5px;
        cursor: pointer;
    }

    .but{
        width: 70%;
        margin: 0px auto;
    }

    .but button{
        width: 100%;
        background:#00a89b;
        color: white;
        border: none;
        border-radius: 20px;
        height: 40px;
        margin-bottom: 10px;

    }
.but div{font-weight: bold;color: #555555;}

  .but div span
  {
      color:#00a89b ;
      font-weight:normal;
      cursor: pointer;
  } 
</style>