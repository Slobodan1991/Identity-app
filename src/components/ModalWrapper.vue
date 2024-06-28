<template>
  <div ref="modal" class="overlay-wrapper">
    <div ref="select" :class="customClasses" class="custom-overlay">
      <slot> </slot>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ModalWrapper",
  computed: {
    ...mapGetters({
      currentProperties: "modal/currentProps",
    }),
    customClasses() {
      return this.currentProperties?.customClasses ?? "";
    },
  },
  mounted() {
    const modal = this.$refs.modal;
    if (modal) {
      modal.addEventListener("click", this.closeClickOutside);
    }
  },
  unmounted() {
    const modal = this.$refs.modal;
    if (modal) {
      modal.removeEventListener("click", this.closeClickOutside);
    }
  },
  methods: {
    closeClickOutside(e) {
      const select = this.$refs.select;
      if (select && !select.contains(e.target)) {
        this.$store.dispatch("modal/closeModal");
      }
    },
  },
};
</script>
<style scoped>
.overlay-wrapper {
  background-color: rgba(12, 59, 97, 0.7);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10050;
  backdrop-filter: blur(5px);
}
.custom-overlay {
  width: fit-content;
  box-shadow: 0px 0px 5px 0px #00000026;
  background-color: #fff;
  height: auto;
  min-height: 150px;
  /* padding: 30px 0; */
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 90%;
  overflow: hidden;
}
</style>
