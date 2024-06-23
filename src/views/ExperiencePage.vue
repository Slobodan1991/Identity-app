<template>
    <div class="w-full">
        <div class="px-10">
            <div class="mt-12 flex w-full items-center border-b border-gray-300 pb-2">
                <div class="w-full">
                    <h1 class="text-2xl font-poppins font-medium">Experience
                    </h1>
                    <p>What skills i have, and what i working on.</p>
                </div>
            </div>
            <div class="flex gap-x-5">
                <div class="mt-6 flex w-1/2">
                    <div
                        class="text-base font-poppins w-full h-fit gap-x-5 flex flex-col gap-y-2 border py-5 px-6 shadow-lg text-center flex-wrap rounded-lg bg-gray-100">
                        <h1 class="mb-5 font-poppins gradient-text font-semibold text-xl">Frontend skills</h1>
                        <div class="w-full flex flex-wrap justify-center">
                            <div v-for="(skill, index) in frontendSkills" :key="index"
                                class="flex items-center flex-col mb-5 gap-y-1 border border-transparent p-3 w-[25%] hover:border hover:rounded-sm hover:border-blue-800 hover:scale-75 transition-all duration-175">
                                <div class="icon-size" v-html="skill.icon"></div>
                                <p class="gradient-text font-semibold font-poppins text-lg my-1">{{ skill.name }}</p>
                                <p class="text-sm font-normal font-poppins text-gray-500">{{ skill.level }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-6 flex w-1/2">
                    <div
                        class="text-base font-poppins w-full h-fit gap-x-5 flex flex-col gap-y-2 border py-5 px-6 shadow-lg text-center flex-wrap rounded-lg bg-gray-100">
                        <h1 class="mb-5 font-poppins gradient-text font-semibold text-xl">Other skills</h1>
                        <div class="w-full flex flex-wrap justify-center">
                            <div v-for="(skill, index) in otherSkills" :key="index"
                                class="flex items-center flex-col mb-5 gap-y-1 border border-transparent p-3 w-[25%] hover:border hover:rounded-sm hover:border-blue-800 hover:scale-75 transition-all duration-175">
                                <div v-html="skill.icon"></div>
                                <p class="gradient-text font-semibold font-poppins text-lg my-1">{{ skill.name }}</p>
                                <p class="text-sm font-normal font-poppins text-gray-500">{{ skill.level }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import { frontendSkills, otherSkills } from '../contstants/skills'

export default {
    name: 'ExperiencePage',
    data() {
        return {
            frontendSkills,
            otherSkills
        };
    },
}
</script>
<style scoped></style>