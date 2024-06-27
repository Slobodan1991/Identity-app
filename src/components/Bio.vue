<template>
  <div class="flex mt-6">
    <div
      class="flex flex-col w-full px-6 py-5 text-base border border-gray-300 rounded-lg shadow-lg font-poppins h-fit gap-x-5 gap-y-2"
    >
      <div class="flex justify-between w-full">
        <p class="text-xl font-semibold gradient-text">Bio</p>
        <div @click="editBio">
          <Edit class="cursor-pointer hover:stroke-blue-800" size="20" />
        </div>
      </div>
      <div class="flex mt-4 gap-x-4">
        <p class="italic">
          The best Instagram bios tend to have a self-description. Things to
          consider adding: your job title(s), the company you own or work for,
          some claims to fame, things you love, and what makes you stand out.
          Queen Latifah’s Instagram bio does a great job of describing her
          personal brand. In the first line of her bio she writes,
          “Actor/Rapper/Singer/Producer.” When people visit her fan page,
          they’ll learn that she’s not just an actor and may check out her other
          gigs to learn more about her.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import Edit from "@/assets/icons/Edit";
export default {
  name: "Bio",
  components: {
    Edit,
  },
  methods: {
    editBio() {
      this.$store.dispatch("modal/openModal", { overlay: "EDIT_BIO" });
    },
  },
};
</script>
<style scoped></style>
