<template>
    <div class="p-4 flex h-screen">
        <div class="w-[40%] mt-10  pr-12 pl-8">
            <div class="modal-content">
                <div class="">
                    <Logo />
                </div>
                <div class="mt-8 flex flex-col gap-y-4">
                    <div>
                        <h2 class="font-mono text-[1.5rem] font-semibold mt-4">Create your personal profile</h2>
                        <p class="text-sm font-poppins text-gray-600">Let's get started with your 30 days free trail</p>
                    </div>
                    <div class="flex w-full gap-x-5">
                        <div class="flex flex-col gap-y-1 mt-4 w-full">
                            <input v-model="name" type="text" class="border-b border-blue-800 h-10 outline-none"
                                placeholder="First name">
                            <label class="text-xs font-bold font-popins" for="email">First name</label>
                        </div>
                        <div class="flex flex-col gap-y-1 mt-4 w-full">
                            <input v-model="last_name" type="text" class="border-b border-blue-800 h-10 outline-none"
                                placeholder="Last name">
                            <label class="text-xs font-bold font-popins" for="email">Last Name</label>
                        </div>
                    </div>
                    <div class="flex flex-col gap-y-1">
                        <input v-model="email" type="email" class="border-b border-blue-800 h-10 outline-none"
                            placeholder="youremail@mail.com">
                        <label class="text-xs font-bold font-popins" for="email">Email</label>
                    </div>
                    <div class="flex flex-col gap-y-1">
                        <input v-model="country" type="text" class="border-b border-blue-800 h-10 outline-none"
                            placeholder="Country name">
                        <label class="text-xs font-bold font-popins" for="email">Country</label>
                    </div>
                    <div class="flex flex-col gap-y-1">
                        <input v-model="password" type="password" class="border-b border-blue-800 h-10 outline-none"
                            placeholder="Your password">
                        <label class="text-xs font-bold font-popins" for="email">Password</label>
                    </div>
                    <div @click="singUp" class="w-full mt-4">
                        <Button name="Create an account"
                            color="w-full bg-blue-800 border-blue-800 border text-white hover:bg-blue-900" />
                    </div>
                    <p class="text-sm text-center mt-6 font-popins font-bold">Already have an account? <span
                            @click="backToLogin" class="text-blue-800 hover:text-blue-900 cursor-pointer">Back to
                            login</span>
                    </p>
                </div>
            </div>
        </div>
        <div class="w-[60%] image">
            <img class="w-fill h-full object-cover image" src="../assets/images/registar/registar.jpg" alt="registar">
        </div>
    </div>
</template>
<script>
import Button from '../components/Button.vue';
import Logo from '../assets/logo/Logo.vue';
import axios from 'axios'

export default {
    name: 'RegisterPage',
    components: {
        Button,
        Logo
    },
    data() {
        return {
            name: '',
            last_name: '',
            email: '',
            country: '',
            password: ''

        }
    },
    mounted() {
        let user = localStorage.getItem('user');
        if (user) {
            this.$router.push({ name: 'welcome' })
        }
    },
    methods: {
        backToLogin() {
            this.$router.push({ name: 'login' })
        },
        async singUp() {
            let result = await axios.post("http://localhost:3000/users", {
                name: this.name,
                last_name: this.last_name,
                email: this.email,
                country: this.country,
                password: this.password
            });
            if (result.status == 201) {
                localStorage.setItem("user", JSON.stringify(result.data))
                this.$router.push({ name: 'welcome' })
            }
        }

    }
}
</script>
<style scoped>
.image {
    border-top-left-radius: 40px;
    border-bottom-right-radius: 40px;
}
</style>