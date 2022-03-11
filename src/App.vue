<template>
  <div id="app" class="container mt-4">
    <NavBar/>
    <LandingContent/>
    <LandingFooter/>

    
  </div>
  
</template>

<script>
import NavBar from './components/navbar.vue'
import LandingContent from './components/Content.vue'
import LandingFooter from './components/Footer.vue';
export default {
components:{
  NavBar,
  LandingContent,
  LandingFooter,
  
}

}
</script>
<style>
#app {
 
}


</style>
