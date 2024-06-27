<template>
  <transition name="modal">
    <div v-if="opened" class="overlay-wrapper">
      <div :class="customClass" class="custom-overlay">
        <component :is="currentOverlayComponent" :propData="currentProperties" />
      </div>
    </div>
  </transition>
</template>
<script>
import { mapGetters } from "vuex";
import SuccessLoginModal from "./modals/SuccessLoginModal";
import SuccessRegistrationModal from "./modals/SuccessRegistrationModal";
import EditBio from "./modals/EditBio";

const overlayList = {
  SUCCESS_LOGIN: SuccessLoginModal,
  SUCCESS_REGISTRATION: SuccessRegistrationModal,
  EDIT_BIO: EditBio,
};
export default {
  name: "Modal",
  props: {
    opened: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters({
      modalOpened: "modal/modalOpened",
      currentOverlay: "modal/currentOverlay",
      currentProperties: "modal/currentProp",
    }),
    currentOverlayComponent() {
      return overlayList[this.currentOverlay];
    },
    customClass() {
      return this.currentProperties?.customClass ?? "";
    },
  },
};
</script>
<style scoped>
.modal-enter-active {
  animation: fadeOut 0.3s;
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.overlay-wrapper {
  background-color: rgba(30, 64, 175, 0.5);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10040;
  backdrop-filter: blur(5px);
}

.custom-overlay {
  overflow: hidden;
  width: fit-content;
  box-shadow: 0px 0px 5px 0px #00000026;
  background-color: #fff;
  height: auto;
  min-height: 150px;
  /* padding: 60px 52px 60px 60px; */
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 90%;
  /* overflow-y: scroll; */
}
</style>
