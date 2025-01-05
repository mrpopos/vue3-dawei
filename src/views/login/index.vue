<template>
  <div>login</div>
</template>

<script setup lang="ts">
import { useUserStore } from "@/store/modules/user";
const userStore = useUserStore();

console.log("userStore.userInfo", userStore.userInfo);
userStore.setUserInfo({
  username: "admin",
  avatar: "https://avatars.githubusercontent.com/u/10263808?v=4",
});
</script>
