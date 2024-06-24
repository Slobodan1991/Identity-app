<template>
  <div :class="computedAvatarClass + ' avatar'">
    <img
      v-if="avatarSrc"
      class="object-cover w-full h-full"
      :src="avatarSrc"
      alt="profile"
    />
    <div
      v-else
      class="text-center flex items-center justify-center font-semibold h-full text-[20px]"
    >
      {{ getInitial }}
    </div>
  </div>
</template>
<script>
export default {
  name: "Avatar",
  props: {
    size: {
      type: String,
      default: "medium",
      required: true,
    },
    avatarSrc: {
      type: URL,
    },
    firstName: {
      type: String,
      default: "",
      // required: true
    },
    lastName: {
      type: String,
      default: "",
      // required: true
    },
  },
  computed: {
    computedAvatarClass() {
      switch (this.size) {
        case "small":
          return "avatar-small";
        case "medium":
          return "avatar-medium";
        case "large":
          return "avatar-large";
        default:
          return "avatar-medium";
      }
    },
    getInitial() {
      return this.firstName.charAt(0) + this.lastName.charAt(0);
    },
  },
};
</script>
<style scoped>
.avatar {
  border-radius: 50%;
  background-color: white;
  border: 1px solid black;
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
