<template>
  <div class="flex mt-6">
    <div
      class="flex flex-col w-full px-6 py-5 text-base border border-gray-300 rounded-lg shadow-lg font-poppins h-fit gap-x-5 gap-y-2"
    >
      <div class="flex justify-between w-full">
        <p class="text-xl font-semibold gradient-text">Skills</p>
        <Edit class="cursor-pointer hover:stroke-blue-800" size="20" />
      </div>
      <div class="flex flex-wrap gap-4 mt-4">
        <div
          class="px-3 py-2 text-sm font-semibold transition-all duration-200 border border-blue-300 rounded-sm hover:text-white hover:bg-blue-400 hover:scale-90"
        >
          Vue.js
        </div>
        <div
          class="px-3 py-2 text-sm font-semibold transition-all duration-200 border border-blue-300 rounded-sm hover:text-white hover:bg-blue-400 hover:scale-90"
        >
          Laravel
        </div>
        <div
          class="px-3 py-2 text-sm font-semibold transition-all duration-200 border border-blue-300 rounded-sm hover:text-white hover:bg-blue-400 hover:scale-90"
        >
          WordPress
        </div>
        <div
          class="px-3 py-2 text-sm font-semibold transition-all duration-200 border border-blue-300 rounded-sm hover:text-white hover:bg-blue-400 hover:scale-90"
        >
          JavaScript
        </div>
        <div
          class="px-3 py-2 text-sm font-semibold transition-all duration-200 border border-blue-300 rounded-sm hover:text-white hover:bg-blue-400 hover:scale-90"
        >
          Visual studio code
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Edit from "@/assets/icons/Edit";
export default {
  name: "Skills",
  components: {
    Edit,
  },
};
</script>
<style scoped></style>
