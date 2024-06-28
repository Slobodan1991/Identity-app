<template>
  <div :class="`min-w-[440px] ${customClass}`">
    <div class="py-4">
      <p
        v-if="title"
        class="mx-auto text-xl font-bold font-poppins text-grey900 w-fit"
      >
        {{ title }}
      </p>
      <p
        v-if="text"
        class="mx-auto mt-4 text-lg font-openSans text-grey800 w-fit"
      >
        {{ text }}
      </p>
    </div>
    <div
      v-if="errors"
      class="error-container mt-8 max-h-[150px] overflow-y-auto"
    >
      <span
        v-for="(error, index) in errors"
        :key="index + error"
        class="block text-base font-openSans text-grey800"
      >
        {{ error }}</span
      >
    </div>

    <div class="border-t border-b">
      <slot name="actions"></slot>
    </div>

    <div class="px-4 pt-4 pb-4 mx-auto">
      <slot name="buttons"></slot>
    </div>

    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: "ModalLayout",
  components: {},
  props: {
    title: {
      type: String,
      required: false,
    },
    text: {
      type: String,
      required: false,
    },
    errors: {
      type: Array,
      required: false,
      default: null,
    },
    customClass: {
      type: String,
      required: false,
      default: "",
    },
  },
};
</script>

<style scoped>
.error-container::-webkit-scrollbar {
  width: 8px;
}

.error-container::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 13px;
}

.error-container::-webkit-scrollbar-thumb {
  background-color: #cccccc;
  transition: background-color linear 300ms;
  border-radius: 13px;
}
</style>
