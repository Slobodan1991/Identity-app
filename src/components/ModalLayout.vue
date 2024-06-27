<template>
  <div :class="`min-w-[440px] py-6 p-6 ${customClass}`">
    <div>
      <img v-if="imgSrc" :src="imgSrc" alt="image" class="mx-auto" />
      <slot v-else name="svg"></slot>
    </div>
    <div class="flex py-2">
      <p
        v-if="title"
        :class="
          'text-lg font-poppins text-blue-800 font-bold w-fit mx-auto ' +
          (imgSrc ? 'mt-4' : '')
        "
      >
        {{ title }}
      </p>
      <div v-if="closeBtn">
        <Close class="cursor-pointer hover:stroke-blue-800" size="20" />
      </div>
    </div>
    <p v-if="text" class="mx-auto mt-4 text-base text-blue-800 w-fit">
      {{ text }}
    </p>
    <slot name="actions"></slot>
    <div class="mx-auto mt-4">
      <slot name="buttons"></slot>
    </div>

    <slot name="footer"></slot>
  </div>
</template>
<script>
import Close from "@/assets/icons/Close";
export default {
  name: "ModalLayout",
  props: {
    title: {
      type: String,
      required: false,
    },
    text: {
      type: String,
      required: false,
    },
    customClass: {
      type: String,
      required: false,
      default: "",
    },
    imgSrc: {
      type: String,
      required: false,
      default: null,
    },
    closeBtn: {
      type: Boolean,
      required: false,
    },
  },
  components: {
    Close,
  },
};
</script>
<style lang=""></style>
