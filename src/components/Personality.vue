<template>
  <div class="flex mt-6">
    <div
      class="flex flex-col w-full px-6 py-5 text-base border border-gray-300 rounded-lg shadow-lg font-poppins h-fit gap-x-5 gap-y-2"
    >
      <div class="flex justify-between w-full">
        <p class="text-xl font-semibold gradient-text">Personality</p>
        <Edit class="cursor-pointer hover:stroke-blue-800" size="20" />
      </div>
      <div class="flex flex-col mt-6 gap-x-4">
        <div class="mb-3">
          <div class="flex justify-between mb-1">
            <span class="text-base font-medium text-blue-700 dark:text-white"
              >Travel</span
            >
            <span class="text-sm font-medium text-blue-700 dark:text-white"
              >90%</span
            >
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              class="bg-blue-400 h-2.5 rounded-full"
              style="width: 90%"
            ></div>
          </div>
        </div>
        <div class="mb-3">
          <div class="flex justify-between mb-1">
            <span class="text-base font-medium text-blue-700 dark:text-white"
              >Reading</span
            >
            <span class="text-sm font-medium text-blue-700 dark:text-white"
              >75%</span
            >
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              class="bg-blue-400 h-2.5 rounded-full"
              style="width: 75%"
            ></div>
          </div>
        </div>
        <div class="mb-3">
          <div class="flex justify-between mb-1">
            <span class="text-base font-medium text-blue-700 dark:text-white"
              >Games</span
            >
            <span class="text-sm font-medium text-blue-700 dark:text-white"
              >95%</span
            >
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              class="bg-blue-400 h-2.5 rounded-full"
              style="width: 95%"
            ></div>
          </div>
        </div>
        <div class="mb-3">
          <div class="flex justify-between mb-1">
            <span class="text-base font-medium text-blue-700 dark:text-white"
              >Learning</span
            >
            <span class="text-sm font-medium text-blue-700 dark:text-white"
              >45%</span
            >
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              class="bg-blue-400 h-2.5 rounded-full"
              style="width: 45%"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Edit from "@/assets/icons/Edit";

export default {
  name: "Personality",
  components: {
    Edit,
  },
};
</script>
<style scoped></style>
