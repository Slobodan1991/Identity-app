<template>
  <div class="flex mt-6">
    <div
      class="flex flex-col w-full px-6 py-5 text-base border border-gray-300 rounded-lg shadow-lg font-poppins h-fit gap-x-5 gap-y-2"
    >
      <div class="flex flex-col justify-between w-full">
        <p class="text-xl font-semibold gradient-text">Notifications</p>
        <p class="text-sm">
          Select the kinds of notifications you get about your activities and
          recommendations.
        </p>
      </div>
      <div class="flex flex-col gap-4 mt-2">
        <div class="flex justify-between p-3 bg-gray-100 rounded-md">
          <div class="w-[80%]">
            <p class="font-semibold">Messages</p>
            <p class="text-sm">Allow to receive messages from this platform.</p>
          </div>
          <div class="flex flex-col gap-y-2">
            <div class="flex items-center">
              <input type="checkbox" id="toggle-messages-push" />
              <label for="toggle-messages-push"></label>
              <p class="ml-1 text-sm font-semibold">Push</p>
            </div>
            <div class="flex items-center">
              <input type="checkbox" id="toggle-messages-email" />
              <label for="toggle-messages-email"></label>
              <p class="ml-1 text-sm font-semibold">Email</p>
            </div>
            <div class="flex items-center">
              <input type="checkbox" id="toggle-messages-sms" />
              <label for="toggle-messages-sms"></label>
              <p class="ml-1 text-sm font-semibold">SMS</p>
            </div>
          </div>
        </div>
        <div class="flex justify-between p-3 bg-gray-100 rounded-md">
          <div class="w-[80%]">
            <p class="font-semibold">Reminders</p>
            <p class="text-sm">
              These are notifications to remind you of updates you might have
              missed.
            </p>
          </div>
          <div class="flex flex-col gap-y-2">
            <div class="flex items-center">
              <input type="checkbox" id="toggle-remind-push" />
              <label for="toggle-remind-push"></label>
              <p class="ml-1 text-sm font-semibold">Push</p>
            </div>
            <div class="flex items-center">
              <input type="checkbox" id="toggle-remind-email" />
              <label for="toggle-remind-email"></label>
              <p class="ml-1 text-sm font-semibold">Email</p>
            </div>
            <div class="flex items-center">
              <input type="checkbox" id="toggle-remind-sms" />
              <label for="toggle-remind-sms"></label>
              <p class="ml-1 text-sm font-semibold">SMS</p>
            </div>
          </div>
        </div>
        <div class="flex justify-between p-3 bg-gray-100 rounded-md">
          <div class="w-[80%]">
            <p class="font-semibold">Comments</p>
            <p class="text-sm">
              These are notifications for comments on your posts and replies to
              you comments.
            </p>
          </div>
          <div class="flex flex-col gap-y-2">
            <div class="flex items-center">
              <input type="checkbox" id="toggle-comments-push" />
              <label for="toggle-comments-push"></label>
              <p class="ml-1 text-sm font-semibold">Push</p>
            </div>
            <div class="flex items-center">
              <input type="checkbox" id="toggle-comments-email" />
              <label for="toggle-comments-email"></label>
              <p class="ml-1 text-sm font-semibold">Email</p>
            </div>
            <div class="flex items-center">
              <input type="checkbox" id="toggle-comments-sms" />
              <label for="toggle-comments-sms"></label>
              <p class="ml-1 text-sm font-semibold">SMS</p>
            </div>
          </div>
        </div>
        <div class="flex justify-between p-3 bg-gray-100 rounded-md">
          <div class="w-[80%]">
            <p class="font-semibold">Product updates and news</p>
            <p class="text-sm">
              These are notifications for updates and news regarding the
              platform.
            </p>
          </div>
          <div class="flex flex-col gap-y-2">
            <div class="flex items-center">
              <input type="checkbox" id="toggle-updates-push" />
              <label for="toggle-updates-push"></label>
              <p class="ml-1 text-sm font-semibold">Push</p>
            </div>
            <div class="flex items-center">
              <input type="checkbox" id="toggle-updates-email" />
              <label for="toggle-updates-email"></label>
              <p class="ml-1 text-sm font-semibold">Email</p>
            </div>
            <div class="flex items-center">
              <input type="checkbox" id="toggle-updates-sms" />
              <label for="toggle-updates-sms"></label>
              <p class="ml-1 text-sm font-semibold">SMS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Notifications",
};
</script>
<style scoped>
input {
  display: none;
}

div label {
  position: relative;
  cursor: pointer;
  display: block;
  width: 35px;
  height: 20px;
  background: #cccccc;
  border-radius: 50px;
  transition: 300ms linear;
}

div label:before {
  position: absolute;
  top: 50%;
  left: 2px;
  transform: translateY(-50%);
  content: "";
  display: block;
  width: 15px;
  height: 15px;
  background: #ffffff;
  border-radius: 50%;
  transition: left 300ms linear;
}

div input:checked + label {
  background-color: rgb(30 64 175);
}

div input:checked + label:before {
  left: 18px;
}
</style>
