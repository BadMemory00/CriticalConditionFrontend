<template>
  <div id="parentx">
    <vs-button @click="active=!active" color="#00A99D" type="filled" icon="list"></vs-button>
    <vs-sidebar v-model="active"  parent="body" default-index="1" color="#00A99D" class="sidebarx" spacer >
      <div class="header-sidebar" slot="header">
        <img src="../assets/LandingLogo.png" height="40rem" />
      </div>
      <vs-sidebar-group open title="Application">
        <vs-sidebar-item index="1" icon="menu" @click="reduce=!reduce">
         Toggle Sidebar
        </vs-sidebar-item>
        <vs-sidebar-item index="5" icon="verified_user">
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


      <vs-divider icon="person" position="left">
        User
      </vs-divider>


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
      active:false,
      notExpand: false,
      reduce: true
    })
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