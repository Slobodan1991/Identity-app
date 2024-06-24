<template>
  <div class="flex mt-6">
    <div
      class="flex flex-col w-full px-6 py-5 text-base border border-gray-300 rounded-lg shadow-lg font-poppins h-fit gap-x-5 gap-y-2"
    >
      <div class="flex self-end cursor-pointer w-fit">
        <Edit class="cursor-pointer hover:stroke-blue-800" size="20" />
      </div>
      <div class="flex flex-col items-center justify-center text-center">
        <Avatar
          avatarSrc="https://ichef.bbci.co.uk/news/1024/branded_sport/6A18/production/_127606172_gettyimages-1243553608.jpg"
        />
        <p class="mt-2 text-lg font-semibold">
          {{ profile.name }} {{ profile.last_name }}
        </p>
        <p class="text-sm font-semibold gradient-text">Frontend developer</p>
        <div class="mt-14">
          <p class="text-[6rem] opacity-40">❞</p>
        </div>
        <p class="italic opacity-40 max-w-[300px]">
          I'm looking for a site that will simply the planning od my business
          trips!
        </p>
      </div>
      <div class="p-8 mt-2 bg-blue-100 rounded-md">
        <div class="flex text-sm gap-x-2 font-poppins">
          <p class="font-semibold">Birthday:</p>
          <p>24.09.1991.</p>
        </div>
        <div class="flex mt-2 text-sm gap-x-2 font-poppins">
          <p class="font-semibold">Location:</p>
          <p>{{ profile.country }}</p>
        </div>
        <div class="flex mt-2 text-sm gap-x-2 font-poppins">
          <p class="font-semibold">Phone number:</p>
          <p>+381 60 324 99 91</p>
        </div>
        <div class="flex mt-2 text-sm gap-x-2 font-poppins">
          <p class="font-semibold">Email:</p>
          <p>{{ profile.email }}</p>
        </div>
        <div class="flex mt-2 text-sm gap-x-2 font-poppins">
          <p class="font-semibold">Lannguages:</p>
          <p>Serbian, English , Germany</p>
        </div>
        <div class="flex mt-2 text-sm gap-x-2 font-poppins">
          <p class="font-semibold">Hobby:</p>
          <p>Football, Basketball, Tennis, Swimming</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Avatar from "@/components/Avatar";
import Edit from "@/assets/icons/Edit";
export default {
  name: "PersonalInfo",
  components: {
    Edit,
    Avatar,
  },
  props: {
    profile: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped></style>
