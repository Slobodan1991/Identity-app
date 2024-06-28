<template>
  <ModalLayout title="Edit bio" closeBtn>
    <template #actions>
      <div class="w-full p-6">
        <textarea
          v-model="bio"
          class="w-full min-h-[200px] p-2 border border-blue-800 rounded-sm"
          name="message"
          id=""
        >
        </textarea>
      </div>
    </template>
    <template #buttons>
      <div class="flex items-center justify-end gap-x-3">
        <div @click="cancel" class="text-center">
          <Button
            color="w-full bg-blue-300 border-blue-300 border text-white hover:bg-blue-900"
            name="Cancel"
          />
        </div>
        <div @click="save" class="text-center">
          <Button
            color="w-full bg-blue-800 border-blue-800 border text-white hover:bg-blue-900"
            name="Save"
          />
        </div>
      </div>
    </template>
  </ModalLayout>
</template>
<script>
import ModalLayout from "../ModalLayout.vue";
import Button from "../Button.vue";

export default {
  name: "EditBio",
  components: {
    ModalLayout,
    Button,
  },
  props: {
    propData: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      bio: "The best Instagram bios tend to have a self-description. Things to consider adding: your job title(s), the company you own or work for, some claims to fame, things you love, and what makes you stand out. Queen Latifah’s Instagram bio does a great job of describing her personal brand. In the first line of her bio she writes, “Actor/Rapper/Singer/Producer.” When people visit her fan page, they’ll learn that she’s not just an actor and may check out her other gigs to learn more about her.",
    };
  },
  methods: {
    cancel() {
      this.$store.dispatch("modal/closeModal");
    },
    save() {
      console.log("save");
    },
  },
};
</script>
<style scoped></style>
