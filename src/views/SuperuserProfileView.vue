<template>
  <div class="">
    <SuperuserNavbar />
    <SuperuserSidebar />
     <SuperuserProfile />
    
  </div>
</template>

<script>
// @ is an alias to /src
import SuperuserSidebar from '@/components/SuperuserSidebar.vue'
import SuperuserProfile from '@/components/SuperuserProfile.vue'
import SuperuserNavbar from '@/components/SuperuserNavbar.vue'
 

export default {
  name: 'SuperuserProfileView',
  components: {
    SuperuserSidebar,
    SuperuserProfile,
    SuperuserNavbar,
     
  }
}
</script>
