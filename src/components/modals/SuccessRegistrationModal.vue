<template>
    <ModalLayout title="Success registration">
        <template #actions>
            <div class="text-center text-xl font-poppins mt-2">
                Welcom to <span class="font-semibold font-poppins gradient-text">My portfolio</span>
            </div>
            <div class="w-[600px] h-[350px] my-6">
                <img class="w-full h-full object-cover" src="../../assets//images/registar/registration-done.jpg">
            </div>
        </template>
        <template #buttons>
            <div @click="goToApp" class="text-center">
                <Button color="w-full bg-blue-800 border-blue-800 border text-white hover:bg-blue-900" name="Okay" />
            </div>
        </template>
    </ModalLayout>
</template>
<script>
import ModalLayout from '../ModalLayout.vue'
import Button from '../Button.vue';
export default {
    name: "SuccessLoginModal",
    components: {
        ModalLayout,
        Button
    },
    props: {
        propData: {
            type: Object,
            required: false
        }
    },
    methods: {
        goToApp() {
            this.$store.dispatch('modal/closeModal')
            this.$router.push({ name: 'welcome' })
        }
    }
}
</script>
<style scoped></style>