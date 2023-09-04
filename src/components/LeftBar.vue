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
                    <div class="my-6 h-[1px] bg-blue-800 w-full"></div>
                    <div class="flex flex-col gap-y-2">
                        <div @click="goToPage(1, 'profile')" :class="(activeTab === 1 ? 'bg-blue-300 rounded-lg' : '')"
                            class="flex items-center gap-x-2  hover:text-blue-800 cursor-pointer pl-4 py-2 hover:bg-blue-300 rounded-lg tab">
                            <SocialProfiles size="20px" class="fill-blue-800" />
                            <p class="text-blue-800 font-poppins hover:text-blue-800">
                                Profile
                            </p>
                        </div>
                        <div @click="goToPage(2, 'music')" :class="(activeTab === 2 ? 'bg-blue-300 rounded-lg' : '')"
                            class="flex items-center gap-x-2  hover:text-blue-800 cursor-pointer pl-4 py-2 hover:bg-blue-300 rounded-lg tab">
                            <Music size="20px" class="fill-blue-800" />
                            <p class="text-blue-800 font-poppins">
                                Music</p>
                        </div>
                        <div @click="goToPage(3, 'movies')" :class="(activeTab === 3 ? 'bg-blue-300 rounded-lg' : '')"
                            class="flex items-center gap-x-2  hover:text-blue-800 cursor-pointer pl-4 py-2 hover:bg-blue-300 rounded-lg tab">
                            <Movies size="20px" class="fill-blue-800" />
                            <p class="text-blue-800 font-poppins">
                                Movies</p>
                        </div>
                        <div @click="goToPage(4, 'books')" :class="(activeTab === 4 ? 'bg-blue-300 rounded-lg' : '')"
                            class="flex items-center gap-x-2  hover:text-blue-800 cursor-pointer pl-4 py-2 hover:bg-blue-300 rounded-lg tab">
                            <Books size="20px" class="fill-blue-800" />
                            <p class="text-blue-800 font-poppins">
                                Books</p>
                        </div>
                        <div @click="goToPage(5, 'games')" :class="(activeTab === 5 ? 'bg-blue-300 rounded-lg' : '')"
                            class="flex items-center gap-x-2 hover:text-blue-800 cursor-pointer pl-4 py-2 hover:bg-blue-300 rounded-lg tab">
                            <Games size="20px" class="fill-blue-800" />
                            <p class="text-blue-800 font-poppins ">
                                Games</p>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col">
                    <div class="my-6 h-[1px] bg-blue-800 w-full"></div>
                    <div :class="isExpanded ? 'text-xs flex justify-start rotate-180' : 'text-xs flex justify-end'"
                        @click="toggleSidebar">
                        <DobuleArrowLeft size="12px" class="fill-blue-800 cursor-pointer w-fit" />
                    </div>
                    <div>
                        <div @click="goToPage(6, 'settings')" :class="(activeTab === 6 ? 'bg-blue-300 rounded-lg' : '')"
                            class="flex items-center gap-x-2 hover:text-blue-800 cursor-pointer pl-4 py-2 hover:bg-blue-300 rounded-lg tab my-2">
                            <Settings size="20px" class="fill-blue-800" />
                            <p v-if="isExpanded" class="text-blue-800 font-poppins cursor-pointer">
                                Settings
                            </p>
                        </div>
                        <div @click="logout"
                            class="flex items-center gap-x-2 hover:text-blue-800 cursor-pointer pl-4 py-2 hover:bg-blue-300 rounded-lg tab">
                            <Logout size="20px" class="fill-blue-800" />
                            <p class="text-blue-800 font-poppins cursor-pointer">
                                Log
                                Out
                            </p>
                        </div>
                        <div v-if="isExpanded" class="flex items-center justify-center mt-6 gap-x-2">
                            <p class="text-sm text-blue-800 font-poppins font-semibold">Made by</p>
                            <span class="text-[1rem] font-semibold font-mono gradient-text">Identity</span>
                        </div>
                        <div v-else class="flex items-center justify-center mt-6 gap-x-2">
                            <span class="text-[1rem] font-semibold font-mono gradient-text">I</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Music from '@/assets/icons/Music.vue';
import Avatar from './Avatar.vue';
import Movies from '@/assets/icons/Movies.vue';
import Books from '@/assets/icons/Books.vue';
import Games from '@/assets/icons/Games.vue';
import Settings from '@/assets/icons/Settings.vue';
import Logout from '@/assets/icons/Logout.vue';
import SocialProfiles from '@/assets/icons/SocialProfiles.vue'
import DobuleArrowLeft from '@/assets/icons/DobuleArrowLeft.vue';
import DropdownMenu from './DropdownMenu.vue';

export default {
    name: 'LeftBar',
    components: {
        Avatar,
        Music,
        Movies,
        Books,
        Games,
        Settings,
        Logout,
        SocialProfiles,
        DobuleArrowLeft,
        DropdownMenu
    },
    data() {
        return {
            tab: [
                {
                    id: 1,
                    path: 'profile'
                },
                {
                    id: 2,
                    path: 'music'
                },
                {
                    id: 3,
                    path: 'movies'
                },
                {
                    id: 4,
                    path: 'books'
                },
                {
                    id: 5,
                    path: 'games'
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