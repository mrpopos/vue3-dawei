<template>
  <div class="layout">
    <div class="main">
      <router-view></router-view>
    </div>
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="home-o" to="/home">home</van-tabbar-item>
      <van-tabbar-item icon="search" to="/service">service</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/about">about</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/profile">profile</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, ref } from 'vue'
defineComponent({
  name: 'LayoutIndex',
})

const active = ref('/home')
</script>

<style lang="less" scoped>
.layout {
  padding: 15px 15px 100px;
}
</style>
