<template>
    <div class="w-full">
        <div class="px-10">
            <div class="mt-12 flex w-full items-center border-b border-gray-300 pb-2">
                <div class="w-full">
                    <h1 class="text-2xl font-poppins font-medium">About me
                    </h1>
                    <p>What you need to know about me!</p>
                </div>
            </div>
            <div class="flex gap-x-5">
                <div class="mt-6 flex-col gap-5 w-1/2">
                    <div class="flex gap-x-5">
                        <div
                            class="text-base font-poppins w-full h-fit gap-x-5 hover:scale-105 duration-105 cursor-pointer hover:bg-gray-100 transition-all flex flex-col gap-y-2 border border-gray-300 rounded-lg py-5 px-6 shadow-lg justify-center items-center">
                            <Laptop size="30px" />
                            <p>Experience</p>
                            <p>2+ Year Working</p>
                        </div>
                        <div
                            class="text-base font-poppins w-full h-fit gap-x-5 hover:scale-105 duration-105 cursor-pointer hover:bg-gray-100 transition-all flex flex-col gap-y-2 border border-gray-300 rounded-lg py-5 px-6 shadow-lg justify-center items-center">
                            <Projects size="30px" />
                            <p>Projects</p>
                            <p>10+ Completed</p>
                        </div>
                    </div>
                    <div
                        class="text-base mt-5 font-poppins w-full h-fit gap-x-5 hover:scale-105 duration-105 cursor-pointer hover:bg-gray-100 transition-all flex flex-col gap-y-2 border border-gray-300 rounded-lg py-5 px-6 shadow-lg justify-center items-center">
                        <Skills size="30px" />
                        <p>Skills</p>
                        <p>JavaScript, HTML, CSS, Vue...</p>
                    </div>
                </div>
                <div class="mt-6 flex w-1/2">
                    <div
                        class="bg-[url('../assets/images/bg-profile.jpg')] bg-no-repeat bg-center bg-cover text-base font-poppins w-full h-fit gap-x-5 flex flex-col gap-y-2 border py-5 px-6 shadow-lg justify-center items-center rounded-lg">
                        <div class="w-[200px] h-[220px] object-fill border-b border-gray-900 pb-4 ">
                            <img class="w-full h-full " src="../assets/images/profile.png" alt="profile">
                        </div>
                        <p>Frontend Developer</p>
                        <div class="flex gap-x-2 items-center">
                            <Location size="20px" />
                            <p>Serbia</p>
                        </div>
                        <p class="mt-4">Hello everyone, my name is Slobodan. I have two year of experience with frontend
                            development. My
                            favorite
                            tools are Visual Studio Code, React, JavaScript, CSS, HTML, Bootstrap. I love programming and I
                            have
                            a
                            desire for further improvement!</p>
                        <div class="flex gap-x-4 mt-4">
                            <Linkedin size="30px" class="cursor-pointer hover:fill-blue-800 animate-bounce" />
                            <Github size="30px" class="cursor-pointer hover:fill-blue-800 animate-bounce" />
                            <Instagram size="30px" class="cursor-pointer hover:fill-blue-800 animate-bounce" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Linkedin from '@/assets/icons/Linkedin'
import Github from '@/assets/icons/Github';
import Instagram from '@/assets/icons/Instagram.vue';
import Location from '@/assets/icons/Location.vue';
import Laptop from '@/assets/icons/Laptop.vue';
import Projects from '@/assets/icons/Projects.vue';
import Skills from '@/assets/icons/Skills.vue';

export default {
    name: 'AboutMePage',
    components: {
        Linkedin,
        Github,
        Instagram,
        Location,
        Laptop,
        Projects,
        Skills
    },
}
</script>
<style scoped></style>