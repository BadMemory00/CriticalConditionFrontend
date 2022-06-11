<template >
    <div>
    <vs-navbar style="padding:0 1rem 0 1rem" color="#f8f9fa" class="nabarx">
      <div slot="title">
        <vs-navbar-title>
            <a href="/"><img src="../assets/LandingLogo.png" height="60rem" /></a>
        </vs-navbar-title>
      </div>

      <vs-navbar-item index="0">
        <router-link class="login-button" to="/login">Login</router-link>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <router-link class="sign-up-button" to="/signup">Sign Up</router-link>
      </vs-navbar-item>
    </vs-navbar>
  
  <router-view></router-view>
  </div>
</template> 

<script>


export default {
  data:()=>({
    
  })
}
</script>

<style scoped>
    :root{
        --primarycolor: #00A99D;
    }

    .login-button{
        color: var(--primarycolor) !important;
        font-size: 1.1rem !important;
        transition: color 1s ease;
    }
    .login-button:hover{
        color: black !important;
        border-bottom: 2px solid var(--primarycolor);
    }

    .sign-up-button{
        color: white !important;
        font-size: 1.1rem !important;
        border-radius: 10px;
        background-color: var(--primarycolor);
        transition: color 5s ease;
        transition: background-color 5s ease;
        transition: border 5s ease;
    }
    .sign-up-button:hover{
        color: var(--primarycolor) !important;
        background-color: white;
        border: 2px solid var(--primarycolor);
    }
</style>