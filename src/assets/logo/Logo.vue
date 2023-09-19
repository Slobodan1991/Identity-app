<template>
    <div class="flex items-center gap-x-2">
        <!-- <div class="w-[3.25rem]">
            <img class="w-full h-full" src="../images/logo/logo.png" alt="">
        </div> -->
        <p class="text-[3rem] font-semibold font-mono gradient-text">Meet me</p>
    </div>
</template>
<script>
export default {
    name: 'Logo',
}
</script>
<style>
.gradient-text {
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-color: #2a2a72;
    background-image: linear-gradient(315deg, #009ffd 0%, #2a2a72 74%);

}
</style>