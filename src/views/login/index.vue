<template>
  <div class="login">
    <div class="container">
      <h1>BAT中后台管理后台</h1>
      <el-form v-model="userInfo">
        <el-form-item label="username" props="username">
          <el-input placeholder="用户名" v-model="userInfo.username"></el-input>
        </el-form-item>
        <el-form-item label="password" props="password">
          <el-input
            type="password"
            placeholder="密码"
            v-model="userInfo.password"
          ></el-input>
        </el-form-item>
        <el-form-item class="btn-container">
          <el-button type="primary" @click="handleLogin" class="btn-login"
            >Login IN</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/modules/user'
import { defineComponent, onMounted, reactive } from 'vue'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'

defineComponent({
  name: 'LoginIndex',
})

const userInfo = reactive({
  username: 'admin',
  password: '123456',
})

const userStore = useUserStore()
const router = useRouter()

async function handleLogin() {
  const res = await userStore.login(userInfo)
  console.log('res111', res)
  ElMessage.success('登录成功')
  // 跳转到首页
  router.push('/')
}

onMounted(() => {
  // handleLogin()
})
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    padding: 35px 0;
    width: 400px;
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    gap: 30px;
    .btn-container {
      width: 100%;
      .btn-login {
        margin: auto;
      }
    }
  }
}
</style>
