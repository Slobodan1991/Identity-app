<template>
  <div id="app" class="flex">
    <LeftBar v-if="hideSidebar" />
    <router-view />
  </div>
</template>
<script>
import LeftBar from '@/components/LeftBar';
export default {
  name: 'App',
  components: {
    LeftBar
  },
  computed: {
    hideSidebar() {
      if (this.$route.name == 'login' || this.$route.name == 'register') {
        return false
      } else {
        return true
      }
    }
  }
}
</script>
<style></style>
