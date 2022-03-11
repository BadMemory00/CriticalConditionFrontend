<template>
  <div id="app" class="container mt-4">
    <NavBar/>
    <LandingFooter/>
  </div>
</template>

<script>
import NavBar from './components/navbar.vue'
import LandingFooter from './components/Footer.vue';
export default {
components:{
  NavBar,
  LandingFooter
}

}
</script>
<style>
#app {
 
}


</style>
