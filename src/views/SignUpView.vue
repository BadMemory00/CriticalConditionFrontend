<template>
  <div class="">
    <NavBar />
    <SignUpForm />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/navbar.vue'
import SignUpForm from '@/components/signupform.vue'

export default {
  name: 'SignupView',
  components: {
    NavBar,
    SignUpForm,
  }
}
</script>
