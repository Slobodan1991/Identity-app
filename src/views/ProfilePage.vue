<template>
    <div class="w-full">
        <!-- <div class="h-[200px] bg-blue-100 w-full relative">
            <Avatar class="absolute -bottom-[25%] left-10" size="large" />
        </div> -->
        <div class="px-10">
            <div class="mt-12 flex w-full items-center border-b border-gray-300 pb-2">
                <div class="w-full">
                    <h1 class="text-2xl font-poppins font-medium">Slobodan Perisic</h1>
                    <p>Nova Pazova, Serbia</p>
                </div>
                <div class="font-poppins font-semibold w-full">
                    <div
                        class="flex justify-center items-center border border-gray-300 rounded-full p-1 w-fit gap-x-3 relative">
                        <div
                            :class="(tab.personal ? 'text-blue-800 rounded-full' : '') + ' w-fit flex justify-center py-1 px-2'">
                            <p @click="chageTab('personal')" class="cursor-pointer">Personal profile</p>
                        </div>
                        <div
                            :class="(tab.business ? 'bg-gray-200 text-blue-800 rounded-full' : '') + ' w-fit flex justify-center py-1 px-2'">
                            <p @click="chageTab('business')" class="cursor-pointer">Business profile</p>
                        </div>
                        <div
                            :class="tab.personal ? 'absolute py-1 px-2 h-8 rounded-full w-[140px] z-[-1] left-[4px] bg-gray-200' : 'right-[4px] absolute'">

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <PersonalProfile v-if="tab.personal">

        </PersonalProfile>
        <div v-if="tab.business">
            hello from business tab
        </div>
    </div>
</template>
<script>
// import Avatar from '@/components/Avatar.vue'
import PersonalProfile from '@/components/PersonalProfile.vue'
export default {
    name: 'SocialProfilesPage',
    components: {
        // Avatar,
        PersonalProfile
    },
    data() {
        return {
            tab: {
                personal: true,
                business: false
            }
        }
    },
    methods: {
        chageTab(key) {
            if (key === 'personal') {
                this.tab.personal = true;
                this.tab.business = false;
            } else if (key === 'business') {
                this.tab.personal = false;
                this.tab.business = true;
            }
        }
    }
}
</script>
<style scoped></style>