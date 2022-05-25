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
      screenPadding: this.$superuserBigScreenPadding,
    }
  },

  methods: {
    onResize() {
      this.width = window.innerWidth;
      this.changePadding()
    },
    changePadding(){
      if(this.width < this.$smallScreenSize){
        this.screenPadding = this.$superuserSmallScreenPadding;
        return;
      }
      this.screenPadding = this.$superuserBigScreenPadding;
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
