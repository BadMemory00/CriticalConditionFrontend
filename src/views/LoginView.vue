<template>
  <div class="">
    <NavBar />
    <LoginForm />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/navbar.vue'
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'LoginView',
  components: {
    NavBar,
    LoginForm,
  }
}
</script>
