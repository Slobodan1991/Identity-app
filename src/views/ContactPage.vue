<template>
    <div class="w-full h-screen overflow-y-scroll">
        <div class="px-10">
            <div class="mt-12 flex w-full items-center border-b border-gray-300 pb-2">
                <div class="w-full">
                    <h1 class="text-2xl font-poppins font-medium">Contact
                    </h1>
                    <p>Let's talk about your needs, and I'll tailor our solutions just for you. Get in touch!</p>
                </div>
            </div>
            <div class="flex gap-x-5">
                <div class="mt-6 flex-col gap-5 w-fit">
                    <div class="flex flex-col gap-x-5">
                        <div
                            class="text-base font-poppins w-full h-fit gap-x-5 flex flex-col gap-y-2 border border-gray-300 rounded-lg py-5 px-6 shadow-lg ">
                            <div class="flex gap-x-2 items-center">
                                <Email size="20px" />
                                <p class="font-semibold text-base">Email</p>
                            </div>
                            <p class="text-sm border-b border-gray-300 pb-3 w-full">slobodanperisic91@gmail.com
                            </p>
                            <Button name="Send a message" color="text-blue-700" />
                        </div>
                        <div
                            class="text-base my-5 font-poppins w-full h-fit gap-x-5 flex flex-col gap-y-2 border border-gray-300 rounded-lg py-5 px-6 shadow-lg ">
                            <div class="flex gap-x-2 items-center">
                                <Whatsup size="20px" />
                                <p class="font-semibold text-base">What's up</p>
                            </div>
                            <p class="text-sm border-b border-gray-300 pb-3 w-full">+381 60 324 99 91</p>
                            <Button name="Send a message" color="text-blue-700" />
                        </div>
                        <div
                            class="text-base font-poppins w-full h-fit gap-x-5 flex flex-col gap-y-2 border border-gray-300 rounded-lg py-5 px-6 shadow-lg ">
                            <div class="flex gap-x-2 items-center">
                                <Phone size="18px" />
                                <p class="font-semibold text-base">Phone number</p>
                            </div>
                            <p class="text-sm border-b border-gray-300 pb-3 w-full">+381 60 324 99 91</p>
                            <Button name="Send a message" color="text-blue-700" />
                        </div>
                    </div>
                </div>
                <div class="mt-6 flex w-1/2">
                    <div
                        class="text-base font-poppins w-full h-fit gap-x-5 flex flex-col gap-y-2 border border-gray-300 rounded-lg py-5 px-6 shadow-lg ">
                        <h1 class="font-poppins font-semibold text-xl">Send Your Message</h1>
                        <p class="text-base text-gray-700">I will replay in 24h!</p>
                        <div class="flex w-full gap-x-5">
                            <div class="flex flex-col gap-y-1 mt-4 w-1/2">
                                <input v-model="name" type="text" class="border-b border-blue-800 h-10 outline-none"
                                    placeholder="First name">
                                <label class="text-xs font-bold font-popins" for="email">First name</label>
                            </div>
                            <div class="flex flex-col gap-y-1 mt-4 w-1/2">
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
                        <textarea v-model="message" placeholder="Your message type here"
                            class="p-2 border rounded-sm mt-4 border-blue-800" name="message" id="" cols="30" rows="5">

                        </textarea>
                        <label class="text-xs font-bold font-popins" for="email">Message</label>
                        <div @click="sendMessage" class="w-full mt-4">
                            <Button name="Send message"
                                color="w-full bg-blue-800 border-blue-800 border text-white hover:bg-blue-900" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Email from '@/assets/icons/Email.vue';
import Whatsup from '@/assets/icons/Whatsup.vue';
import Phone from '@/assets/icons/Phone.vue';
import Button from '@/components/Button.vue';

export default {
    name: 'ContactPage',
    components: {
        Phone,
        Email,
        Whatsup,
        Button
    },
    data() {
        return {
            name: '',
            last_name: '',
            email: '',
            message: ''
        }
    },
    methods: {
        sendMessage() {
            console.log('message successful');
        }
    }
}
</script>
<style scoped></style>