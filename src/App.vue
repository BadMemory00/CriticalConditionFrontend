<template>
  <div id="app" class="">
    <router-view/>
  </div>
</template>

<style>

</style>
<script>
  import Vue from 'vue'


  import Vuesax from 'vuesax'
  import 'vuesax/dist/vuesax.css' //Vuesax styles
  import 'material-icons/iconfont/material-icons.css';

  import { BootstrapVue, IconsPlugin, BootstrapVueIcons  } from 'bootstrap-vue'
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'

  Vue.use(Vuesax)

  Vue.use(BootstrapVue)
  Vue.use(IconsPlugin)
  Vue.use(BootstrapVueIcons)

export default({
  setup() {
    
  },
})
</script>
