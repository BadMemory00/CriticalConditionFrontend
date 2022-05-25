<template>
  <div class="">
    <SignUpForm />
  </div>
</template>

<script>
// @ is an alias to /src
import SignUpForm from '@/components/signupform.vue'

export default {
  name: 'SignupView',
  components: {
    SignUpForm,
  }
}
</script>
