<template>
    <div class="max-w-[1200px] px-10 mt-6">
        <!-- <div class="flex flex-col justify-center items-center gap-y-2 w-full">
            <h1 class="text-gray-700">Create your porofile and share with friends or company</h1>
            <Button name="Create profile" color="w-full text-blue-800 hover:text-blue-900" />
        </div> -->
        <div class="rounded-xl border border-gray-300 flex w-full">
            <div class="w-1/2 flex flex-col items-center bg-gray-200 p-4 card-left rounded-tl-xl rounded-bl-xl">
                <Avatar size="medium" :firstName="user.name" :lastName="user.last_name" />
                <h1 class="font-poppins mt-4 text-2xl font-normal text-black">{{ user.name }} {{ user.last_name }}</h1>
                <div class="flex mt-3 items-center gap-x-1">
                    <Location size="16px" class="fill-black" />
                    <p class="text-sm text-black font-poppins">Nova Pazova, {{ user.country }}</p>
                </div>
                <div class="mt-8 mb-2 flex gap-x-5 w-fit px-3 justify-center">
                    <div @click="chageTab('contact')"
                        :class="(tab.contact ? 'text-blue-800 border-b border-blue-800' : '') + ' font-semibold text-lg font-poppins cursor-pointer'">
                        <p>Contact</p>
                    </div>
                    <div @click="chageTab('social')"
                        :class="(tab.social ? 'text-blue-800 border-b border-blue-800' : '') + ' font-semibold text-lg font-poppins cursor-pointer'">
                        <p>Social media</p>
                    </div>
                </div>
                <div v-if="tab.contact" class="my-6 flex gap-x-2 items-center">
                    <div class="flex flex-col gap-y-1 items-center text-black text-xs font-poppins w-[60px]">
                        <Email size="32px"
                            class="fill-black cursor-pointer transition-all duration-150 hover:-translate-y-2 hover:fill-blue-800" />
                        <p>Email</p>
                    </div>
                    <div class="flex flex-col gap-y-1 items-center text-black text-xs font-poppins w-[60px]">
                        <Viber size="32px"
                            class="fill-black cursor-pointer transition-all duration-150 hover:-translate-y-2 hover:fill-blue-800" />
                        <p>Viber</p>
                    </div>
                    <div class="flex flex-col gap-y-1 items-center text-black text-xs font-poppins w-[60px]">
                        <Whatsup size="32px"
                            class="fill-black cursor-pointer transition-all duration-150 hover:-translate-y-2 hover:fill-blue-800" />
                        <p>Whatsup</p>
                    </div>
                    <div class="flex flex-col gap-y-1 items-center text-black text-xs font-poppins w-[60px]">
                        <Phone size="32px"
                            class="fill-black cursor-pointer transition-all duration-150 hover:-translate-y-2 hover:fill-blue-800" />
                        <p>Phone</p>
                    </div>
                </div>
                <div v-if="tab.social" class="my-6 flex gap-x-2 items-center">
                    <div class="flex flex-col gap-y-1 items-center text-black text-xs font-poppins w-[60px]">
                        <Instagram size="32px"
                            class="fill-black cursor-pointer transition-all duration-150 hover:-translate-y-2 hover:fill-blue-800" />
                        <p>Instagram</p>
                    </div>
                    <div class="flex flex-col gap-y-1 items-center text-black text-xs font-poppins w-[60px]">
                        <Linkedin size="32px"
                            class="fill-black cursor-pointer transition-all duration-150 hover:-translate-y-2 hover:fill-blue-800" />
                        <p>Linkedin</p>
                    </div>
                    <div class="flex flex-col gap-y-1 items-center text-black text-xs font-poppins w-[60px]">
                        <Github size="32px"
                            class="fill-black cursor-pointer transition-all duration-150 hover:-translate-y-2 hover:fill-blue-800" />
                        <p>Github</p>
                    </div>
                    <div class="flex flex-col gap-y-1 items-center text-black text-xs font-poppins w-[60px]">
                        <Facebook size="32px"
                            class="fill-black cursor-pointer transition-all duration-150 hover:-translate-y-2 hover:fill-blue-800" />
                        <p>Facebook</p>
                    </div>
                </div>
                <div class="px-2 py-1 mt-6 rounded-md flex justify-center items-center">
                    <span class="text-base font-semibold font-mono gradient-text">Identity</span>
                </div>
            </div>
            <div class="w-1/2 p-6 font-poppins flex flex-col gap-y-4">
                <div>
                    <div class="w-fit">
                        <h1 class="text-poppins text-xl text-blue-800 font-semibold">About me</h1>
                        <div class="h-[2px] flex w-[50%] justify-end bg-blue-800"></div>
                    </div>
                    <div class="mt-1">
                        <h1 class="text-base">I'm a nice fun and friendly person, I'm honest and punctual, I work well in a
                            team
                            but also on
                            my own as I like to set myself goals which I will achieve, I have good listening and
                            communication skills. I have a creative mind and am always up for new challenges.</h1>
                    </div>
                </div>
                <div>
                    <div class="w-fit">
                        <h1 class="text-poppins text-xl text-blue-800 font-semibold">Service</h1>
                        <div class="h-[2px] flex w-[50%] justify-end bg-blue-800"></div>
                    </div>
                    <div class="mt-1">
                        <h1 class="text-base">I'm a nice fun and friendly person, I'm honest and punctual, I work well in a
                            team
                            but also on
                            my own as I like to set myself goals which I will achieve, I have good listening and
                            communication skills. I have a creative mind and am always up for new challenges.</h1>
                    </div>
                </div>
                <div>
                    <div class="w-fit">
                        <h1 class="text-poppins text-xl text-blue-800 font-semibold">Skills</h1>
                        <div class="h-[2px] flex w-[50%] justify-end bg-blue-800"></div>
                    </div>
                    <div class="mt-1">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// import Button from '@/components/Button.vue'
import Avatar from './Avatar.vue'
import Instagram from '@/assets/icons/Instagram.vue'
import Linkedin from '@/assets/icons/Linkedin.vue'
import Github from '@/assets/icons/Github.vue'
import Facebook from '@/assets/icons/Facebook.vue'
import Location from '@/assets/icons/Location.vue'
import Email from '@/assets/icons/Email.vue'
import Phone from '@/assets/icons/Phone.vue'
import Viber from '@/assets/icons/Viber.vue'
import Whatsup from '@/assets/icons/Whatsup.vue'

export default {
    name: "PersonalProfile",
    components: {
        // Button,
        Avatar,
        Instagram,
        Linkedin,
        Github,
        Facebook,
        Location,
        Email,
        Phone,
        Viber,
        Whatsup
    },
    props: {
        user: {
            type: Object,
            reqired: true
        }
    },
    data() {
        return {
            tab: {
                contact: true,
                social: false
            }
        }
    },
    methods: {
        chageTab(key) {
            if (key === 'contact') {
                this.tab.contact = true;
                this.tab.social = false;
            } else if (key === 'social') {
                this.tab.contact = false;
                this.tab.social = true;
            }
        }
    }
}
</script>
<style scope>
.card-left {
    /* background-color: #2a2a72; */
    /* background-image: linear-gradient(315deg, #009ffd 0%, #2a2a72 74%); */
}
</style>