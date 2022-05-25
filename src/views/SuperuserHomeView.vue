<template>
  <div class="">
    <SuperuserNavbar :style="screenPadding"/>
    <SuperuserHome :style="screenPadding"/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import SuperuserHome from '@/components/SuperuserHome.vue'
import SuperuserNavbar from '@/components/SuperuserNavbar.vue'
 

export default {
  name: 'SuperuserHomeView',

  components: {
    SuperuserHome,
    SuperuserNavbar,
  },

  data() {
      return {
        width: window.innerWidth,
        screenPadding: 'padding: 2rem 0 0 17rem',
      }
    },

  methods: {
    onResize() {
      this.width = window.innerWidth;
      this.changePadding()
    },
    changePadding(){
      if(this.width < this.$smallScreenSize){
        this.screenPadding = 'padding: 1rem 0 0 4rem';
        return;
      }
      this.screenPadding = 'padding: 2rem 0 0 17rem';
    }
  },
  beforeMount(){
    this.changePadding()
  },
  created() {
    window.addEventListener("resize", this.onResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.onResize);
  },
}
</script>
