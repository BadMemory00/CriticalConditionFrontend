<template>
  <div class="">
    <signupform />
  </div>
</template>

<script>
// @ is an alias to /src
import signupform from '@/components/signupform.vue'

export default {
  name: 'SignupView',
  components: {
    signupform,
  }
}
</script>
