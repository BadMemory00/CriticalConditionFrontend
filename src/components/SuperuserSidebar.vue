<template>
  <div id="parentx">
    <!-- <vs-button v-if="smallScreen" @click="active = true" color="#00A99D" type="filled" icon="list" style="margin: 1rem 0 0 1rem"></vs-button> -->

    <vs-sidebar v-model="active" :hidden-background="hiddenBackground" :reduce="reduce" reduce-not-rebound reduce-not-hover-expand parent="body" color="success" default-index="1" class="sidebarx" spacer >
      <div class="header-sidebar" slot="header">
        <img v-if="!smallLogo" @click="ifOpenedInSmallScreenSwtich" src="../assets/LandingLogo.png" height="40rem" />
        <!-- <i v-if="smallLogo" @click="openSideBarWhenReduced" style="color: #00A99D; cursor: pointer" class="material-icons"> 
            menu
        </i> -->
        <img v-if="smallLogo" @click="openSideBarWhenReduced" style="cursor: pointer" src="../assets/LandingLogoCut.png" height="40rem" />
      </div>
        <vs-sidebar-item to="/superuser/home" index="1" icon="home" class="sidebar-item">
          Home
        </vs-sidebar-item>
        <vs-sidebar-item to="/superuser/devices" index="2" icon="monitor" class="sidebar-item">
          Devices
        </vs-sidebar-item>
        <vs-sidebar-item to="/superuser/archiveddevices" index="3" icon="archive" class="sidebar-item">
          Archived Devices
        </vs-sidebar-item>
        <vs-sidebar-item to="/superuser/subusers" index="4" icon="diversity_3" class="sidebar-item">
          Sub-users
        </vs-sidebar-item>
        <vs-sidebar-item to="/superuser/datashare" index="5" icon="cloud_sync" class="sidebar-item">
          Data-share Program
        </vs-sidebar-item>
        <vs-sidebar-item to="/superuser/profile" index="6" icon="account_box" class="sidebar-item">
          Profile
        </vs-sidebar-item>
        <div class="footer-sidebar" slot="footer">
          <vs-button @click="openConfirmLogout()" v-if="!reduce" icon="logout" color="danger" type="line">log out</vs-button>
          <vs-button @click="openConfirmLogout()" v-if="reduce" icon="logout" color="danger" type="line"></vs-button>
        </div>
    </vs-sidebar>

    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    data:()=>({
      width: window.innerWidth,
      active: true,
      hiddenBackground: true,
      reduce: false,
      smallScreen: false,
      smallLogo: false,
    }),
    methods: {
      whenResize(){
        this.width = window.innerWidth;
        
        if(this.width < this.$smallScreenSize){
          this.smallScreen = true;
          this.smallLogo = true;
          this.reduce = true;
          this.hiddenBackground = true;
        } 
        else{
          this.smallScreen = false;
          this.smallLogo = false;
          this.reduce = false;
          this.hiddenBackground = true;
        }  
      },
      openSideBarWhenReduced(){
        this.smallLogo = !this.smallLogo;
        this.hiddenBackground = !this.hiddenBackground;
        this.reduce = !this.reduce;
      },
      ifOpenedInSmallScreenSwtich(){
        if (this.smallScreen) {
          this.smallLogo = !this.smallLogo;
          this.hiddenBackground = !this.hiddenBackground;
          this.reduce = !this.reduce;}
      },
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
        localStorage.setItem(this.$isSuperuserAuthorized, '');
        localStorage.setItem(this.$superuserToken, '');
        this.$router.go('');
      }
    },
    
    beforeMount(){
      this.whenResize();
    },
    created() {
      window.addEventListener("resize", this.whenResize);
    },
    destroyed() {
      window.removeEventListener("resize", this.whenResize);
    },

}
</script>
<style>
  :root{
      --primarycolor: #00A99D;
  }

  .header-sidebar{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
  }
  .sidebar-item :hover{
    color: var(--primarycolor) !important;
  }
  .vuesax-app-is-ltr .vs-sidebar-success .vs-sidebar-item-active{
    border-right: 4px solid var(--primarycolor) !important
  }
  .vs-sidebar-success .vs-sidebar-item-active a{
    color: var(--primarycolor) !important;
  }
  .con-vs-dialog .vs-dialog{
    width: 80%; 
    margin-left: 3rem;
  }
</style>