<template>
    <div :class="`min-w-[440px] ${customClass}`">
        <div>
            <img v-if="imgSrc" :src="imgSrc" alt="image" class="mx-auto">
            <slot v-else name="svg"></slot>
        </div>
        <p v-if="title" :class="'text-lg font-poppins text-blue-800 font-bold w-fit mx-auto ' + (imgSrc ? 'mt-8' : '')">{{
            title }}</p>
        <p v-if="text" class="text-base text-blue-800 mt-8 w-fit mx-auto">{{ text }}</p>
        <slot name="actions"></slot>
        <div class="mx-auto mt-8">
            <slot name="buttons"></slot>
        </div>

        <slot name="footer"></slot>
    </div>
</template>
<script>
export default {
    name: 'ModalLayout',
    props: {
        title: {
            type: String,
            required: false
        },
        text: {
            type: String,
            required: false
        },
        customClass: {
            type: String,
            required: false,
            default: ''
        },
        imgSrc: {
            type: String,
            required: false,
            default: null
        },
    },
    computed: {

    }

}
</script>
<style lang="">
    
</style>