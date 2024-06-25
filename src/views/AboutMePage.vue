<template>
  <Layout>
    <div class="flex items-center w-full pb-2 mt-12 border-b border-gray-300">
      <div class="w-full">
        <h1 class="text-2xl font-medium font-poppins">About me</h1>
        <p>What you need to know about me!</p>
      </div>
    </div>
    <div class="flex gap-x-5">
      <div class="flex-col w-1/2 gap-5 mt-6">
        <div
          class="flex flex-col w-full px-6 py-5 mb-5 text-lg border border-gray-300 rounded-lg shadow-lg font-poppins h-fit gap-x-5 gap-y-2">
          <div>
            <p class="font-semibold font-poppins">Personal details</p>
            <div class="h-1 gradient-bg w-[17%] rounded-full"></div>
          </div>
          <div class="flex mt-2 text-sm gap-x-2 font-poppins">
            <p class="font-semibold">Name:</p>
            <p>Slobodan</p>
          </div>
          <div class="flex mt-2 text-sm gap-x-2 font-poppins">
            <p class="font-semibold">Last name:</p>
            <p>Perišić</p>
          </div>
          <div class="flex mt-2 text-sm gap-x-2 font-poppins">
            <p class="font-semibold">Birthday:</p>
            <p>24.09.1991.</p>
          </div>
          <div class="flex mt-2 text-sm gap-x-2 font-poppins">
            <p class="font-semibold">Location:</p>
            <p>Nova Pazova, Serbia</p>
          </div>
          <div class="flex mt-2 text-sm gap-x-2 font-poppins">
            <p class="font-semibold">Phone number:</p>
            <p>+381 60 324 99 91</p>
          </div>
          <div class="flex mt-2 text-sm gap-x-2 font-poppins">
            <p class="font-semibold">Job:</p>
            <p>Frontend developer</p>
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
        <div class="flex gap-x-5">
          <div
            class="flex flex-col items-center justify-center w-full px-6 py-5 text-base transition-all border border-gray-300 rounded-lg shadow-lg cursor-pointer font-poppins h-fit gap-x-5 hover:scale-105 duration-105 hover:bg-gray-100 gap-y-2">
            <Laptop size="30px" />
            <p>Experience</p>
            <p>3+ Year Working</p>
          </div>
          <div
            class="flex flex-col items-center justify-center w-full px-6 py-5 text-base transition-all border border-gray-300 rounded-lg shadow-lg cursor-pointer font-poppins h-fit gap-x-5 hover:scale-105 duration-105 hover:bg-gray-100 gap-y-2">
            <Projects size="30px" />
            <p>Projects</p>
            <p>15+ Completed</p>
          </div>
        </div>
        <!-- <div
                        class="flex flex-col items-center justify-center w-full px-6 py-5 mt-5 text-base transition-all border border-gray-300 rounded-lg shadow-lg cursor-pointer font-poppins h-fit gap-x-5 hover:scale-105 duration-105 hover:bg-gray-100 gap-y-2">
                        <Skills size="30px" />
                        <p>Skills</p>
                        <p>JavaScript, HTML, CSS, Vue...</p>
                    </div> -->
      </div>
      <div class="flex w-1/2 mt-6">
        <div
          class="bg-[url('../assets/images/bg-profile-gray.jpg')] bg-no-repeat bg-center bg-cover text-base font-poppins w-full h-fit gap-x-5 flex flex-col gap-y-2 border py-5 px-6 shadow-lg justify-center items-center rounded-lg">
          <div class="w-[200px] h-[220px] object-fill border-b border-gray-900 pb-4">
            <img class="w-full h-full" src="../assets/images/profile.png" alt="profile" />
          </div>
          <p class="font-semibold gradient-text">Frontend Developer</p>
          <div class="flex items-center gap-x-2">
            <Location size="20px" />
            <p>Serbia</p>
          </div>
          <p class="mt-4">
            Hello everyone, my name is Slobodan. I have three year of
            experience with frontend development. My favorite tools are Visual
            Studio Code, React, JavaScript, CSS, HTML, Bootstrap. I love
            programming and I have a desire for further improvement!
          </p>
          <div class="flex mt-4 gap-x-4">
            <Linkedin size="30px" class="cursor-pointer hover:fill-blue-800 animate-bounce" />
            <Github size="30px" class="cursor-pointer hover:fill-blue-800 animate-bounce" />
            <Instagram size="30px" class="cursor-pointer hover:fill-blue-800 animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
<script>
import Linkedin from "@/assets/icons/Linkedin";
import Github from "@/assets/icons/Github";
import Instagram from "@/assets/icons/Instagram";
import Location from "@/assets/icons/Location";
import Laptop from "@/assets/icons/Laptop";
import Projects from "@/assets/icons/Projects";
import Layout from "@/components/Layout";

export default {
  name: "AboutMePage",
  components: {
    Linkedin,
    Github,
    Instagram,
    Location,
    Laptop,
    Projects,
    Layout
  },
};
</script>
<style scoped></style>
