<template>
  <div class="">
    <SuperuserNavbar :style="screenPadding" />
    <SuperuserDevices :style="screenPadding" />
  </div>
</template>

<script>
// @ is an alias to /src
import SuperuserDevices from '@/components/SuperuserDevices.vue'
import SuperuserNavbar from '@/components/SuperuserNavbar.vue'

export default {
  name: 'SuperuserDevicesView',
  components: {
    SuperuserDevices,
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
