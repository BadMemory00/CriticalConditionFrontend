<template >
  <div>
    <vs-navbar style="padding:0 1rem 0.2rem 1rem" color="#f8f9fa" class="nabarx">
      <div slot="title">
        <vs-navbar-title>
          <!-- <router-link to="home">  -->
            <img src="../assets/LandingLogo.png" height="60rem" style="padding: .4rem 0 0 0;" />
          <!-- </router-link> -->
        </vs-navbar-title>
      </div>
        <vs-navbar-item index="0">
            <vs-button @click="openConfirmLogout()" icon="logout" color="danger" type="flat">log out</vs-button>
        </vs-navbar-item>
    </vs-navbar>

    <router-view></router-view>
  </div>
</template> 

<script>


export default {
  data:()=>({
    
  }),
  methods: {
      openConfirmLogout(){
        this.$vs.dialog({
          type:'confirm',
          color: 'danger',
          title: 'Logout',
          text: 'Are you sure you want to logout',
          accept:this.logOut
        })
      },
      logOut(){
        localStorage.setItem(this.$isSubuserAuthorized, '');
        localStorage.setItem(this.$subuserToken, '');
        this.$router.go('/');
      }
    },
}
</script>

<style>
  :root{
    --primarycolor: #00A99D;
  }

  .drob-down-for-logout a{
    color: black;
    text-decoration: none;
  }
  .drob-down-for-logout span{
    color: #00A99D;
  }

</style>