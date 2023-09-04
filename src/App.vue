<template>
  <div id="app" class="flex">
    <LeftBar v-if="hideSidebar" />
    <Modal :opened="opened" />
    <router-view />
  </div>
</template>
<script>
import LeftBar from '@/components/LeftBar';
import Modal from './components/Modal.vue';
import { mapGetters } from 'vuex';
export default {
  name: 'App',
  components: {
    LeftBar,
    Modal
  },
  computed: {
    ...mapGetters({
      opened: 'modal/modalOpened'
    }),
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
