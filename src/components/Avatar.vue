<template>
    <div :class="computedAvatarClass + ' avatar'">
        <img class="w-full h-full object-cover" src="../assets/images/profile.png" alt="profile">
    </div>
</template>
<script>
export default {
    name: 'Avatar',
    props: {
        size: {
            type: String,
            default: 'medium',
            required: true
        }
    },
    computed: {
        computedAvatarClass() {
            switch (this.size) {
                case 'small':
                    return 'avatar-small';
                case 'medium':
                    return 'avatar-medium';
                case 'large':
                    return 'avatar-large';
                default:
                    return 'avatar-medium';
            }
        }
    }
}
</script>
<style scoped>
.avatar {
    border-radius: 50%;
    background-color: white;
    border: 1px solid;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.avatar-small {
    width: 50px;
    height: 50px;
}

.avatar-medium {
    width: 100px;
    height: 100px;
}

.avatar-large {
    width: 140px;
    height: 140px;
}
</style>