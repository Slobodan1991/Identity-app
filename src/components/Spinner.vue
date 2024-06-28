<template>
  <div>
    <div v-if="siteConfig" class="mt-[10%] text-center">
      <span :class="`spinner_wrapper ${sizeSpinner}`"></span>
    </div>
    <div v-else>
      <component
        :is="lazyLoadedComponent"
        v-if="loaded"
        :size="size"
      ></component>
    </div>
  </div>
</template>
<script>
export default {
  name: "Spinner",
  props: {
    size: {
      type: String,
      required: false,
      default: "default",
    },
  },
  data() {
    return {
      loaded: false,
      lazyLoadedComponent: null,
    };
  },
  computed: {
    sizeSpinner() {
      switch (this.size) {
        case "xs": {
          return "h-[17px] w-[17px] border-[2px]";
        }
        case "small": {
          return "h-[35px] w-[35px] border-[3px]";
        }
        case "medium": {
          return "h-[60px] w-[60px] border-[5px]";
        }
        case "large": {
          return "h-[90px] w-[90px] border-[10px]";
        }
        default: {
          return "h-[90px] w-[90px] border-[10px]";
        }
      }
    },
    siteConfig: () => window.siteConfig,
  },
};
</script>

<style scoped>
.spinner_wrapper {
  border-color: black black gray black;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
