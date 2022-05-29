<template>
  <div class="">
    <SuperuserHome :style="screenPadding" />
    
  </div>
</template>

<script>
// @ is an alias to /src
import SuperuserHome from '@/components/SuperuserHome.vue'
 

export default {
  name: 'SuperuserHomeView',

  components: {
    SuperuserHome,
  },

  data() {
      return {
        width: window.innerWidth,
        screenPadding: this.$superuserBigScreenPadding,
      }
    },
  props: {
    superuserToken: {
      type: String,
      default: ''
    },
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
