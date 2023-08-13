<template>
    <div>
        <button :class="color + ' py-2 px-4 w-fit rounded-md text-base font-mono font-semibold cursor-pointer'">
            {{ name }}
        </button>
    </div>
</template>
<script>
export default {
    name: 'LoginButton',
    props: {
        name: {
            type: String,
            require: true
        },
        color: {
            type: String,
            require: false
        }
    }
}
</script>
<style></style>