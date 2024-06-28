<template>
  <transition name="modal">
    <modal-wrapper v-if="opened">
      <component
        :is="currentOverlayComponent"
        v-if="isOverlayComponentLoaded"
        :prop-data="currentProperties"
      />
      <spinner v-else />
    </modal-wrapper>
  </transition>
</template>

<script>
import { mapGetters } from "vuex";
import ModalWrapper from "@/components/ModalWrapper";
// import SuccessLoginModal from "./modals/SuccessLoginModal";
// import SuccessRegistrationModal from "./modals/SuccessRegistrationModal";
// import EditBio from "./modals/EditBio";

const overlayList = {
  SUCCESS_LOGIN: () => import("./modals/SuccessLoginModal"),
  SUCCESS_REGISTRATION: () => import("./modals/SuccessRegistrationModal"),
  EDIT_BIO: () => import("./modals/EditBio"),
};

export default {
  name: "ModalV2",
  components: {
    ModalWrapper,
  },
  props: {
    opened: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isOverlayComponentLoaded: false,
    };
  },
  computed: {
    ...mapGetters({
      currentOverlay: "modal/currentOverlay",
      currentProperties: "modal/currentProps",
    }),
    currentOverlayComponent() {
      return overlayList[this.currentOverlay];
    },
  },
  watch: {
    currentOverlay(newVal) {
      if (newVal) {
        this.$nextTick(() => this.loadOverlayComponent());
      } else {
        this.isOverlayComponentLoaded = false;
      }
    },
  },
  methods: {
    loadOverlayComponent() {
      // loading component from overlayList
      const componentToLoad = this.currentOverlayComponent;
      if (componentToLoad) {
        componentToLoad()
          .then(() => {
            this.isOverlayComponentLoaded = true;
          })
          .catch((error) => {
            console.error("Error loading component", error);
          });
      }
    },
  },
};
</script>

<style scoped>
.modal-enter-active {
  animation: fadeIn 0.5s;
}

.modal-leave-active {
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
</style>
