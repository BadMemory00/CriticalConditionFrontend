<template>
  <div class="">
    <LandingContent />
    <!-- <LandingFooter /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import LandingContent from '@/components/Content.vue'
// import LandingFooter from '@/components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    LandingContent,
    // LandingFooter
  }
}
</script>
