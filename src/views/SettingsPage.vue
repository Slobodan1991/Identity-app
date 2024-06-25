<template>
  <div class="w-full">
    <div class="px-10">
      <div class="flex items-center w-full pb-2 mt-12 border-b border-gray-300">
        <div class="w-full">
          <h1 class="text-2xl font-medium font-poppins">Settings</h1>
          <p>Personalize your profile or edit your information!</p>
        </div>
      </div>
      <div
        :class="['text-center', 'tab-switch', direction]"
        class="max-w-[400px] mt-6 wrapper"
      >
        <div
          class="tab"
          :class="{ active: isActive('left') }"
          @click="switchTab('left')"
        >
          Personal settings
        </div>
        <div
          class="tab"
          :class="{ active: isActive('right') }"
          @click="switchTab('right')"
        >
          Account settings
        </div>
      </div>
      <div v-if="activeDirection == 'left'" class="flex gap-x-5">
        <div class="flex flex-col w-1/3">
          <PersonalInfo :profile="fetchUser" />
        </div>
        <div class="flex flex-col w-1/3">
          <Bio />
          <Personality />
        </div>
        <div class="flex flex-col w-1/3">
          <Skills />
          <SocialMedia />
          <Notes />
        </div>
      </div>
      <div class="flex gap-x-5" v-else>
        <div class="flex flex-col w-1/3">
          <Notifications />
        </div>
        <div class="flex flex-col w-1/3">
          <Password />
          <DeleteAccount />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SocialMedia from "@/components/SocialMedia";
import Bio from "@/components/Bio";
import Skills from "@/components/Skills";
import Personality from "@/components/Personality";
import Notes from "@/components/Notes";
import PersonalInfo from "@/components/PersonalInfo";
import Password from "@/components/Password";
import DeleteAccount from "@/components/DeleteAccount";
import Notifications from "@/components/Notifications";

export default {
  name: "SettingsPage",
  components: {
    SocialMedia,
    Bio,
    Skills,
    Personality,
    Notes,
    PersonalInfo,
    Password,
    DeleteAccount,
    Notifications,
  },
  data() {
    return {
      activeDirection: "left",
    };
  },
  computed: {
    fetchUser() {
      const storedUser = localStorage.getItem("user");
      return JSON.parse(storedUser);
    },
    direction() {
      return this.activeDirection;
    },
  },
  created() {
    if (this.fetchUser) {
      this.user = this.fetchUser;
    }
  },
  methods: {
    isActive(direction) {
      return this.activeDirection === direction;
    },
    switchTab(direction) {
      if (this.activeDirection !== direction) {
        this.activeDirection = direction;
      }
    },
  },
};
</script>
<style scoped>
.tab-switch {
  position: relative;
}

.tab-switch:after {
  content: "";
  position: absolute;
  width: 50%;
  top: 0;
  transition: left cubic-bezier(0.88, -0.35, 0.565, 1.35) 0.4s;
  border-radius: 27.5px;
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.1);
  background-color: rgb(30 64 175);
  height: 100%;
  z-index: 0;
}

.tab-switch.left:after {
  left: 0;
}

.tab-switch.right:after {
  left: 50%;
}

.tab-switch .tab {
  display: inline-block;
  width: 50%;
  padding: 10px 0;
  z-index: 1;
  position: relative;
  cursor: pointer;
  transition: color 200ms;
  font-size: 16px;
  font-weight: bold;
  line-height: normal;
  user-select: none;
  color: rgb(30 64 175);
}

.tab-switch .tab.active {
  color: #ffffff;
}

.text-center {
  text-align: center;
}
.wrapper {
  border-radius: 37px;
  background-color: #f4f4f4;
}
</style>
