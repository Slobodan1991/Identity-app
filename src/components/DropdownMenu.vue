<template>
    <div class="rounded-md border border-gray-300 py-4 bg-white shadow-lg absolute top-[4rem] left-0">
        <div class="flex gap-x-4 pb-4 px-7 border-gray-300 border-b items-center">
            <div class="text-base">
                <p>{{ user.name }} {{ user.last_name }}</p>
                <p class="text-gray-400">{{ user.email }}</p>
            </div>
        </div>
        <div class="p-4 border-b border-gray-300 flex flex-col gap-y-4">
            <div class="flex gap-x-3 items-center">
                <Profile size="16px" />
                <p>View profile</p>
            </div>
            <div class="flex gap-x-3 items-center">
                <AccountSettings size="16px" icon-color="stroke-black stroke-2" />
                <p>Account settings</p>
            </div>
            <div class="flex gap-x-3 items-center">
                <Moon size="16px" />
                <div class="flex gap-x-6 items-center">
                    <p>Dark mode</p>
                    <div>
                        <input type="checkbox" id="toggle-btn">
                        <label for="toggle-btn"></label>
                    </div>
                </div>
            </div>
        </div>
        <div class="pt-4 px-7 flex gap-x-3 items-center">
            <Logout size="16px" />
            <p>Logout</p>
        </div>
    </div>
</template>
<script>
import Logout from '@/assets/icons/Logout.vue';
import AccountSettings from '@/assets/icons/AccountSettings.vue';
import Profile from '@/assets/icons/Profile.vue';
import Moon from '@/assets/icons/Moon.vue';
export default {
    name: 'DropdownMenu',
    components: {
        Logout,
        AccountSettings,
        Profile,
        Moon
    },
    props: {
        user: {
            type: Object,
            reqired: true
        }
    }
}
</script>
<style scoped>
input {
    display: none;
}

div label {
    position: relative;
    cursor: pointer;
    display: block;
    width: 45px;
    height: 25px;
    background: #cccccc;
    border-radius: 50px;
    transition: 300ms linear;
}

div label:before {
    position: absolute;
    top: 50%;
    left: 2px;
    transform: translateY(-50%);
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    background: #ffffff;
    border-radius: 50%;
    transition: left 300ms linear;
}

div input:checked+label {
    background-color: rgb(30 64 175);
}

div input:checked+label:before {
    left: 23px;
}
</style>