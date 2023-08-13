<template>
  <div class="pt-10 pl-10 header-container w-full">
    <div class="flex flex-col w-fit items-center">
      <h1 class="text-xl font-mono font-semibold text-blue-800">Your personal dashboard</h1>
    </div>
  </div>
</template>

<script>
// import Button from '@/components/Button.vue'
// import Logo from '@/assets/logo/Logo.vue';
// import LoginModal from '@/register/LoginModal.vue';
// import RightBar from '@/components/RightBar.vue';

export default {
  name: 'HomeView',
  components: {
    // Button,
    // Logo,
    // LoginModal,
    // RightBar
  },
  data() {
    return {
      open: false,
    }
  },
  methods: {
    openLoginModal() {
      this.open = !this.open
    },
    goToRegister() {
      this.$router.push({ name: 'register' })
    }
  }
}
</script>

<style scoped>
.header-container {
  /* background: url(../assets/images/bg9.jpg); */
  background-size: cover;
  justify-content: space-between;
  height: 100vh;
}
</style>
