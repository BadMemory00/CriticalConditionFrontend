<template>
  <div class="">
    <SuperuserNavbar />
    <SuperuserSidebar />
    <SuperuserDevices />
     
    
  </div>
</template>

<script>
// @ is an alias to /src
import SuperuserSidebar from '@/components/SuperuserSidebar.vue' ;
import SuperuserNavbar from '@/components/SuperuserNavbar.vue' ;
import SuperuserDevices from  '@/components/SuperuserDevices.vue'

export default {
  name: 'SuperuserHomeView',
  components: {
    SuperuserSidebar,
    SuperuserNavbar,
    SuperuserDevices,
     
  }
}
</script>
