<template>
  <div class="">
    
    <NavBar />
    <LandingContent />
    <LandingFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/navbar.vue'
import LandingContent from '@/components/Content.vue'
import LandingFooter from '@/components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    NavBar,
    LandingContent,
    LandingFooter
  }
}
</script>
