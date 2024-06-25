<template>
  <div class="flex mt-6">
    <div
      class="flex flex-col w-full px-6 py-5 text-base border border-gray-300 rounded-lg shadow-lg font-poppins h-fit gap-x-5 gap-y-2"
    >
      <div class="flex flex-col justify-between w-full">
        <p class="text-xl font-semibold gradient-text">Delete account</p>
        <p class="text-sm">
          Deleting your account will remove all of your information from our
          database. This cannot be undone.
        </p>
      </div>
      <div class="flex justify-between mt-4 gap-x-4">
        <div class="flex flex-col w-full">
          <input
            v-model="email"
            type="email"
            :class="
              error
                ? 'border-red-800 border-b-2 h-10 outline-none'
                : 'border-blue-800 border-b h-10 outline-none'
            "
            placeholder="example@mail.com"
            required
          />
          <label class="text-xs font-bold font-popins" for="email"
            >Your email</label
          >
        </div>
        <div class="w-fit">
          <Button
            name="Delete "
            color="w-full bg-red-800 border-red-800 border text-white hover:bg-red-900"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Button from "../components/Button.vue";
export default {
  name: "DeleteAccount",
  components: {
    Button,
  },
  data() {
    return {
      email: null,
    };
  },
};
</script>
<style scoped></style>
