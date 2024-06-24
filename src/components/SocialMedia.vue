<template>
  <div class="flex mt-6">
    <div
      class="flex flex-col w-full px-6 py-5 text-base border border-gray-300 rounded-lg shadow-lg font-poppins h-fit gap-x-5 gap-y-2"
    >
      <div class="flex justify-between w-full">
        <p class="text-xl font-semibold gradient-text">Social media</p>
        <Edit class="cursor-pointer hover:stroke-blue-800" size="20" />
      </div>
      <div class="flex mt-6 gap-x-4">
        <Linkedin
          size="30px"
          class="cursor-pointer hover:fill-blue-300 animate-bounce"
        />
        <Github
          size="30px"
          class="cursor-pointer hover:fill-blue-300 animate-bounce"
        />
        <Instagram
          size="30px"
          class="cursor-pointer hover:fill-blue-300 animate-bounce"
        />
        <Facebook
          size="30px"
          class="cursor-pointer hover:fill-blue-300 animate-bounce"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Edit from "@/assets/icons/Edit";
import Linkedin from "@/assets/icons/Linkedin";
import Github from "@/assets/icons/Github";
import Instagram from "@/assets/icons/Instagram";
import Facebook from "@/assets/icons/Facebook";
export default {
  name: "SocialMedia",
  components: {
    Edit,
    Linkedin,
    Github,
    Instagram,
    Facebook,
  },
};
</script>
<style scoped></style>
