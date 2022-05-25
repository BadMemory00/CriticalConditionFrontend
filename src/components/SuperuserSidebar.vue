<template>
  <div id="parentx">
    <vs-button v-if="smallScreen" @click="active = true" color="#00A99D" type="filled" icon="list" style="margin: 1rem 0 0 1rem"></vs-button>

    <vs-sidebar v-model="active" :hidden-background="hiddenBackground" :click-not-close="clickDoNotClose" parent="body" color="success" default-index="1" class="sidebarx" spacer >
      <div class="header-sidebar" slot="header">
        <img src="../assets/LandingLogo.png" height="40rem" />
      </div>
        <vs-sidebar-item to="/superuser/home" index="1" icon="home" class="sidebar-item">
          Home
        </vs-sidebar-item>
        <vs-sidebar-item to="/superuser/devices" index="2" icon="monitor" class="sidebar-item">
          Devices
        </vs-sidebar-item>
        <vs-sidebar-item to="/superuser/devices" index="3" icon="archive" class="sidebar-item">
          Archived Devices
        </vs-sidebar-item>
        <vs-sidebar-item to="login" index="4" icon="people_alt" class="sidebar-item">
          Sub-users
        </vs-sidebar-item>
        <vs-sidebar-item to="login" index="5" icon="cloud_sync" class="sidebar-item">
          Data-share Program
        </vs-sidebar-item>
        <vs-divider icon="person" position="center">
          Settings
        </vs-divider>
        <vs-sidebar-item to="/superuser/profile" index="6" icon="account_box" class="sidebar-item">
          Profile
        </vs-sidebar-item>
        <vs-sidebar-item index="7" icon="logout" class="logout">
          Logout
        </vs-sidebar-item>
    </vs-sidebar>

    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    data:()=>({
      width: window.innerWidth,
      active: true,
      clickDoNotClose: true,
      hiddenBackground: true,
      smallScreen: false,
    }),
    props: {
      homeActive: {
        type: String,
        default: '1'
      },      
      devicesActive: {
        type: String,
        default: '0'
      },      
      archivedDevicesActive: {
        type: String,
        default: '0'
      },
    },
    methods: {
      onResize() {
        this.width = window.innerWidth;
        this.isScreenSmall();
      },
      isScreenSmall(){
        if(this.width < this.$smallScreenSize){
          this.active = false;
          this.clickDoNotClose = false;
          this.hiddenBackground = false;
          this.smallScreen = true;
          return;
        }

        this.active = true;
        this.clickDoNotClose = true;
        this.hiddenBackground = true;
        this.smallScreen = false;
        return;      
      }
    },

    beforeMount(){
      this.isScreenSmall();
    },
    created() {
      window.addEventListener("resize", this.onResize);
    },
    destroyed() {
      window.removeEventListener("resize", this.onResize);
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
  .logout :hover{
    color: red !important;
  }
</style>