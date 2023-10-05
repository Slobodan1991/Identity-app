<template>
    <div v-if="user">
        <div
            :class="isExpanded ? 'expanded shadow-2xl py-10 px-6 sidebar ease-in-out duration-700 transition-all' : 'shadow-2xl py-10 flex sidebar justify-center transition-all ease-in-out duration-700 collapsed px-4'">
            <div class="flex flex-col justify-between h-full">
                <div class="w-full justify-center flex flex-col">
                    <div class="flex justify-center gap-x-4 w-full tab relative">
                        <div @click="openMenu">
                            <Avatar class="cursor-pointer" size="small" :firstName="user.name" :lastName="user.last_name" />
                        </div>
                        <div class="text-xs font-semibold font-poppins">
                            <p>{{ user.name }} {{ user.last_name.charAt(0) }}.</p>
                            <p>{{ user.country }}</p>
                            <p></p>
                        </div>
                        <DropdownMenu v-if="open" :user="user" />
                    </div>
                    <div class="my-6 h-[1px] bg-black w-full"></div>
                    <div class="flex flex-col gap-y-2">
                        <div @click="goToPage(1, 'welcome')"
                            :class="(activeTab === 1 ? 'bg-blue-500 rounded-lg text-white fill-white' : '')"
                            class="flex items-center gap-x-2  hover:text-white cursor-pointer pl-4 py-2 hover:bg-blue-500 rounded-lg tab hover:fill-white">
                            <Welcome size="20px" />
                            <p class="font-poppins hover:text-white">
                                Welcome
                            </p>
                        </div>
                        <div @click="goToPage(2, 'about-me')"
                            :class="(activeTab === 2 ? 'bg-blue-500 rounded-lg text-white fill-white' : '')"
                            class="flex items-center gap-x-2  hover:text-white cursor-pointer pl-4 py-2 hover:bg-blue-500 rounded-lg tab hover:fill-white">
                            <About size="20px" />
                            <p class="font-poppins">
                                About me</p>
                        </div>
                        <div @click="goToPage(3, 'experience')"
                            :class="(activeTab === 3 ? 'bg-blue-500 rounded-lg text-white fill-white' : '')"
                            class="flex items-center gap-x-2  hover:text-white cursor-pointer pl-4 py-2 hover:bg-blue-500 rounded-lg tab hover:fill-white">
                            <Experience size="20px" />
                            <p class="font-poppins">
                                My experience</p>
                        </div>
                        <div @click="goToPage(4, 'service')"
                            :class="(activeTab === 4 ? 'bg-blue-500 rounded-lg text-white fill-white' : '')"
                            class="flex items-center gap-x-2  hover:text-white cursor-pointer pl-4 py-2 hover:bg-blue-500 rounded-lg tab hover:fill-white">
                            <Services size="20px" />
                            <p class="font-poppins">
                                Services</p>
                        </div>
                        <div @click="goToPage(5, 'contact')"
                            :class="(activeTab === 5 ? 'bg-blue-500 rounded-lg text-white fill-white' : '')"
                            class="flex items-center gap-x-2 hover:text-white cursor-pointer pl-4 py-2 hover:bg-blue-500 rounded-lg tab hover:fill-white">
                            <Contact size="20px" />
                            <p class="font-poppins ">
                                Contact</p>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col">
                    <div class="my-6 h-[1px] bg-black w-full"></div>
                    <div :class="isExpanded ? 'text-xs flex justify-start rotate-180' : 'text-xs flex justify-end'"
                        @click="toggleSidebar">
                        <DobuleArrowLeft size="12px" />
                    </div>
                    <div>
                        <div @click="goToPage(6, 'settings')"
                            :class="(activeTab === 6 ? 'bg-blue-500 rounded-lg text-white fill-white' : '')"
                            class="flex items-center gap-x-2 hover:text-white cursor-pointer pl-4 py-2 hover:bg-blue-500 rounded-lg tab hover:fill-white my-2">
                            <Settings size="20px" />
                            <p v-if="isExpanded" class="font-poppins cursor-pointer">
                                Settings
                            </p>
                        </div>
                        <div @click="logout"
                            class="flex items-center gap-x-2 hover:text-white cursor-pointer pl-4 py-2 hover:bg-blue-500 rounded-lg tab hover:fill-white">
                            <Logout size="20px" />
                            <p class="font-poppins cursor-pointer">
                                Log
                                Out
                            </p>
                        </div>
                        <div v-if="isExpanded" class="flex items-center justify-center mt-6 gap-x-2">
                            <p class="text-sm font-poppins font-semibold">Made by</p>
                            <span class="text-[1rem] font-semibold font-mono gradient-text">PS design</span>
                        </div>
                        <div v-else class="flex items-center justify-center mt-6 gap-x-2">
                            <span class="text-[1rem] font-semibold font-mono gradient-text">PS</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import About from '@/assets/icons/About.vue';
import Avatar from './Avatar.vue';
import Experience from '@/assets/icons/Experience.vue';
import Services from '@/assets/icons/Services.vue';
import Contact from '@/assets/icons/Contact.vue';
import Settings from '@/assets/icons/Settings.vue';
import Logout from '@/assets/icons/Logout.vue';
import Welcome from '@/assets/icons/Welcome.vue'
import DobuleArrowLeft from '@/assets/icons/DobuleArrowLeft.vue';
import DropdownMenu from './DropdownMenu.vue';

export default {
    name: 'LeftBar',
    components: {
        Avatar,
        About,
        Experience,
        Services,
        Contact,
        Settings,
        Logout,
        Welcome,
        DobuleArrowLeft,
        DropdownMenu
    },
    data() {
        return {
            tab: [
                {
                    id: 1,
                    path: 'welcome'
                },
                {
                    id: 2,
                    path: 'about-me'
                },
                {
                    id: 3,
                    path: 'experiance'
                },
                {
                    id: 4,
                    path: 'service'
                },
                {
                    id: 5,
                    path: 'contact'
                },
                {
                    id: 6,
                    path: 'settings'
                },
            ],
            activeTab: 1,
            isExpanded: true,
            open: false
        }
    },
    methods: {
        logout() {
            localStorage.clear();
            this.$router.push({ name: 'login' })
        },
        goToPage(id, path) {
            this.tab.id = id
            this.activeTab = this.tab.id
            if (this.$route.name != path) {
                this.$router.push({ name: path })
            }
        },
        toggleSidebar() {
            this.isExpanded = !this.isExpanded
        },
        openMenu() {
            this.open = !this.open
        },
    },
    computed: {
        user() {
            const storedUser = localStorage.getItem('user')
            return JSON.parse(storedUser);
        }
    },
}
</script>
<style scoped>
.expanded {
    width: 250px;
    overflow: unset;
}

.collapsed {
    width: 90px;
    overflow: unset;
}

.collapsed p {
    display: none;
    opacity: 0;
    transition: 0.2s linear 0.2s;
}

.collapsed .tab {
    /* display: flex; */
    gap: 0px;
    justify-content: center;
    padding-left: 0;
}

.sidebar {
    border-top-right-radius: 40px;
    height: 100vh;
    top: 0;
    left: 0;
    white-space: nowrap;
}
</style>