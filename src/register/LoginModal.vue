<template>
    <div class="modal-mask">
        <div class="modal-content">
            <div class="w-[6rem] mx-auto -translate-y-[70%] bg-white rounded-full">
                <img class="w-full h-full object-cover" src="../assets/images/logo/logo.png" alt="">
            </div>
            <div class="font-semiboldS -mt-24 flex justify-end" @click="closeModal">
                <span class="w-fit cursor-pointer">
                    <Cross size="20px" />
                </span>
            </div>
            <div class="mt-8 flex flex-col gap-y-4 px-4">
                <h2 class="font-mono text-[1.5rem] text-center font-semibold mt-4">Login to your Identity account</h2>
                <p class="text-sm font-poppins text-gray-600">Enter your credentials to access your account </p>
                <div class="flex flex-col gap-y-1 mt-4">
                    <input type="email" class="border-b border-blue-800 h-10 outline-none" placeholder="youremail@mail.com">
                    <label class="text-xs font-bold font-popins" for="email">Email</label>
                </div>
                <div class="flex flex-col gap-y-1">
                    <input type="password" class="border-b border-blue-800 h-10 outline-none" placeholder="Your password">
                    <label class="text-xs font-bold font-popins" for="email">Password</label>
                </div>
                <div class="flex justify-end">
                    <p class="w-fit cursor-pointer text-xs text-blue-800 font-bold font-popins hover:text-blue-900">Forgot
                        password</p>
                </div>
                <div class="w-full">
                    <Button name="Login" color="bg-blue-800 border-blue-800 border text-white hover:bg-blue-900 w-full" />
                </div>
                <p class="text-sm text-center mt-6 font-popins font-bold">Don't have an account? <span @click="goToRegister"
                        class="text-blue-800 hover:text-blue-900 cursor-pointer">Register here</span>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
import Cross from '@/assets/icons/Cross.vue'
import Button from '../components/Button.vue';

export default {
    name: 'LoginModal',
    components: {
        Cross,
        Button
    },
    methods: {
        closeModal() {
            this.$emit('closeModal')
        },
        goToRegister() {
            this.$router.push({ name: 'register' })
        }
    }
}
</script>
<style scoped>
.modal-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    /* semi-transparent black */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    min-width: 450px;
    min-height: 500px;
}
</style>