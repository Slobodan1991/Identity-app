<template>
  <Layout>
    <div class="flex items-center w-full pb-2 mt-12 border-b border-gray-300">
      <div class="w-full">
        <h1 class="text-2xl font-medium font-poppins">Experience</h1>
        <p>What skills i have, and what i working on.</p>
      </div>
    </div>
    <div class="flex gap-x-5">
      <div class="flex w-1/2 mt-6">
        <div
          class="flex flex-col flex-wrap w-full px-6 py-5 text-base text-center bg-gray-100 border rounded-lg shadow-lg font-poppins h-fit gap-x-5 gap-y-2">
          <h1 class="mb-5 text-xl font-semibold font-poppins gradient-text">
            Frontend skills
          </h1>
          <div class="flex flex-wrap justify-center w-full">
            <div v-for="(skill, index) in frontendSkills" :key="index"
              class="flex items-center flex-col mb-5 gap-y-1 border border-transparent p-3 w-[25%] hover:border hover:rounded-sm hover:border-blue-800 hover:scale-75 transition-all duration-175">
              <div class="icon-size" v-html="skill.icon"></div>
              <p class="my-1 text-lg font-semibold gradient-text font-poppins">
                {{ skill.name }}
              </p>
              <p class="text-sm font-normal text-gray-500 font-poppins">
                {{ skill.level }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex w-1/2 mt-6">
        <div
          class="flex flex-col flex-wrap w-full px-6 py-5 text-base text-center bg-gray-100 border rounded-lg shadow-lg font-poppins h-fit gap-x-5 gap-y-2">
          <h1 class="mb-5 text-xl font-semibold font-poppins gradient-text">
            Other skills
          </h1>
          <div class="flex flex-wrap justify-center w-full">
            <div v-for="(skill, index) in otherSkills" :key="index"
              class="flex items-center flex-col mb-5 gap-y-1 border border-transparent p-3 w-[25%] hover:border hover:rounded-sm hover:border-blue-800 hover:scale-75 transition-all duration-175">
              <div v-html="skill.icon"></div>
              <p class="my-1 text-lg font-semibold gradient-text font-poppins">
                {{ skill.name }}
              </p>
              <p class="text-sm font-normal text-gray-500 font-poppins">
                {{ skill.level }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
<script>
import { frontendSkills, otherSkills } from "../contstants/skills";
import Layout from "@/components/Layout";

export default {
  name: "ExperiencePage",
  components: {
    Layout
  },
  data() {
    return {
      frontendSkills,
      otherSkills,
    };
  },
};
</script>
<style scoped></style>
