<template >
    <ModalLayout title="Succes login">
        <template #actions>
            <div class="text-center">
                Welcom to Identity
            </div>
        </template>
        <template #buttons>
            <div @click="goToApp" class="text-center">
                <Button name="Okay" />
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
            this.$router.push({ name: 'profile' })
        }
    }
}
</script>
<style scoped></style>