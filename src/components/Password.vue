<template>
  <div class="flex mt-6">
    <div
      class="flex flex-col w-full px-6 py-5 text-base border border-gray-300 rounded-lg shadow-lg font-poppins h-fit gap-x-5 gap-y-2"
    >
      <div class="flex flex-col justify-between w-full">
        <p class="text-xl font-semibold gradient-text">Password</p>
        <p class="text-sm">Modify your current password</p>
      </div>
      <div class="flex flex-col mt-4 gap-x-4">
        <input
          v-model="password"
          type="password"
          :class="
            error
              ? 'border-red-800 border-b-2 h-10 outline-none'
              : 'border-blue-800 border-b h-10 outline-none'
          "
          placeholder="Your current password"
          required
        />
        <label class="text-xs font-bold font-popins" for="password"
          >Current password</label
        >
        <input
          v-model="password"
          type="password"
          :class="
            error
              ? 'border-red-800 border-b-2 h-10 outline-none'
              : 'border-blue-800 border-b h-10 outline-none'
          "
          placeholder="Your new password"
          required
        />
        <label class="text-xs font-bold font-popins" for="password"
          >New password</label
        >
        <input
          v-model="password"
          type="password"
          :class="
            error
              ? 'border-red-800 border-b-2 h-10 outline-none'
              : 'border-blue-800 border-b h-10 outline-none'
          "
          placeholder="Confirm your new password"
          required
        />
        <label class="text-xs font-bold font-popins" for="password"
          >Confirm new password</label
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Password",
  data() {
    return {
      password: null,
    };
  },
};
</script>
<style scoped></style>
