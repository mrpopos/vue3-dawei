<template>
  <div>login</div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/modules/user'
import { defineComponent, onMounted } from 'vue'

defineComponent({
  name: 'LoginIndex',
})

const userStore = useUserStore()

console.log('userStore.userInfo', userStore.userInfo)
userStore.setUserInfo({
  username: 'admin',
  avatar: 'https://avatars.githubusercontent.com/u/10263808?v=4',
})

async function handleLogin() {
  const res = await userStore.login({
    username: 'admin',
    password: '123456',
  })
  console.log('res111', res)
}

onMounted(() => {
  handleLogin()
})
</script>
