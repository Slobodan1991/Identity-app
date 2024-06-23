<template>
    <div class="w-full">
        <div class="px-10">
            <div class="mt-12 flex w-full items-center border-b border-gray-300 pb-2">
                <div class="w-full">
                    <h1 class="text-2xl font-poppins font-medium">Settings
                    </h1>
                    <p>Personalize your profile or edit your information!</p>
                </div>
            </div>
            <div class="flex gap-x-5">
                <div class="mt-6 flex w-1/3 min-w-[200px]">
                    <div
                        class="text-base font-poppins w-full h-fit gap-x-5 flex flex-col gap-y-2 border border-gray-300 rounded-lg py-5 px-6 shadow-lg ">
                        <div class="flex justify-center items-center flex-col text-center">
                            <Avatar />
                            <p class="font-semibold text-lg">{{ fetchUser.name }}{{ fetchUser.last_name }}</p>
                            <p class="text-xs font-semibold gradient-text">Frontend developer</p>
                            <div class="mt-14">
                                <p class="text-[6rem] opacity-40">❞</p>
                            </div>
                            <p class="italic opacity-40 max-w-[300px]">I'm looking for a site that will simply the
                                planning
                                od my business
                                trips!</p>
                        </div>
                        <div class="p-8 rounded-md bg-blue-400">
                            <p class="font-semibold">Age: <span class=" text-gray-800 ml-1">26</span></p>
                            <p class="font-semibold">Birthday: <span class=" text-gray-800 ml-1">06.06.1991</span></p>
                            <p class="font-semibold">Location: <span class=" text-gray-800 ml-1">Belgrade</span></p>
                            <p class="font-semibold">Phone number: <span class=" text-gray-800 ml-1">060 000 111
                                    222</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Avatar from '@/components/Avatar';
export default {
    name: 'SettingsPage',
    components: {
        Avatar
    },
    computed: {
        fetchUser() {
            const storedUser = localStorage.getItem('user')
            return JSON.parse(storedUser);
        }
    },
    created() {
        if (this.fetchUser) {
            this.user = this.fetchUser
        }
    },
}
</script>
<style scoped></style>