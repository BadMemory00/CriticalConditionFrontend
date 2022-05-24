<template>
  <div id="parentx">
    <vs-button v-if="smallScreen" @click="active = true" color="#00A99D" type="filled" icon="list" style="margin: 1rem 0 0 1rem"></vs-button>

    <vs-sidebar v-model="active" :hidden-background="hiddenBackground" :click-not-close="clickDoNotClose" parent="body" color="success" default-index="1" class="sidebarx" spacer >
      <div class="header-sidebar" slot="header">
        <img src="../assets/LandingLogo.png" height="40rem" />
      </div>
      <vs-sidebar-group open title="Main Menu">
        <vs-sidebar-item to="superuser" index="1" icon="home">
         Home
        </vs-sidebar-item>
        <vs-sidebar-item to="login" index="5" icon="verified_user">
          Configurations
        </vs-sidebar-item>
        <vs-sidebar-group title="Store">
          <vs-sidebar-item index="2.1" icon="store">
            Store
          </vs-sidebar-item>
          <vs-sidebar-item index="2.2" icon="nature_people">
            Nature
          </vs-sidebar-item>
          <vs-sidebar-item index="2.3" icon="style">
            Style
          </vs-sidebar-item>
        </vs-sidebar-group>
        <vs-sidebar-item index="2" icon="gavel">
          History
        </vs-sidebar-item>
        <vs-sidebar-item index="3" icon="https">
          Security
        </vs-sidebar-item>
        <vs-sidebar-item index="4" icon="help">
          Help
        </vs-sidebar-item>
      </vs-sidebar-group>

      <vs-sidebar-item index="6" icon="account_box">
        Profile
      </vs-sidebar-item>

      <div class="footer-sidebar" slot="footer">
        <vs-button icon="settings" color="primary" type="border"></vs-button>
      </div>

    </vs-sidebar>
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
    methods: {
      onResize() {
        this.width = window.innerWidth;
        this.isScreenSmall();
      },
      isScreenSmall(){
        if(this.width < 750){
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
  .footer-sidebar{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
</style>