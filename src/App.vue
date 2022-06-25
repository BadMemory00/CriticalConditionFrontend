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

  import Transitions from 'vue2-transitions'

  Vue.use(Vuesax)

  Vue.use(BootstrapVue)
  Vue.use(IconsPlugin)
  Vue.use(BootstrapVueIcons)

  Vue.use(Transitions)
  
export default({
  setup() {
    
  },
})
</script>
<style>
  ::-webkit-scrollbar {
    width: 10px;                              /* width of the entire scrollbar */
  }

  ::-webkit-scrollbar-track {
    /*background: #f7f9f8;*/                  /* color of the tracking area */
    border: 1px solid var(--primarycolor);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--primarycolor);    /* color of the scroll thumb */
    border-radius: 10px;                      /* roundness of the scroll thumb */
  } 
</style>