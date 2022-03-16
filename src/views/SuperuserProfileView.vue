<template>
  <div class="">
    <SuperuserSidebar />
    <SuperuserProfile />
    
  </div>
</template>

<script>
// @ is an alias to /src
import SuperuserSidebar from '@/components/SuperuserSidebar.vue'
import SuperuserProfile from '@/components/SuperuserProfile.vue'
 

export default {
  name: 'SuperuserHomeView',
  components: {
    SuperuserSidebar,
    SuperuserProfile,
     
  }
}
</script>
