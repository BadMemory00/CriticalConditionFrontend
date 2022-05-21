<template>
  <div class="">
    <SuperuserSidebar style="position: relative; top: 10px; left: 20px"/>
    <SuperuserHome style="position: relative; top: 20px; left: 30px"/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import SuperuserSidebar from '@/components/SuperuserSidebar.vue'
import SuperuserHome from '@/components/SuperuserHome.vue'
 

export default {
  name: 'SuperuserHomeView',
  props: ['title'],

  components: {
    SuperuserSidebar,
    SuperuserHome,
  }
}
</script>
