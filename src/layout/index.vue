<template>
  <div class="layout">
    <div class="container">
      <el-container class="container-body">
        <el-aside class="aside">
          <div class="logo">
            <img src="@/assets/images/logo.png" alt="logo" />
          </div>
          <div class="menu">
            <el-menu default-active="/dashboard/home" class="menu-cpm" router>
              <el-menu-item index="/dashboard/home">首页</el-menu-item>
              <el-sub-menu index="/platform">
                <template #title>平台管理</template>
                <el-menu-item index="/platform/about">关于我们</el-menu-item>
                <el-menu-item index="/platform/contact">联系我们</el-menu-item>
              </el-sub-menu>
            </el-menu>
          </div>
        </el-aside>
        <el-container class="container-body-right">
          <el-header class="header">
            <div class="bread">
              <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }"
                  >homepage</el-breadcrumb-item
                >
                <el-breadcrumb-item>
                  <a href="/">promotion management</a>
                </el-breadcrumb-item>
                <el-breadcrumb-item>promotion list</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
            <div class="settings">
              <div class="avator">
                <el-avatar :size="32" :src="state.circleUrl" />
                <span class="name">admin</span>
              </div>
              <div class="settings-icon" @click="triggerSetting">
                <el-icon>
                  <Setting :size="32" />
                </el-icon>
                <span>setting</span>
              </div>
            </div>
          </el-header>
          <el-main class="main">
            <RouterView />
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>

  <!-- 设置抽屉弹窗 -->
  <el-drawer v-model="drawerSetting" direction="rtl" :size="300">
    <template #header>
      <h4>设置</h4>
    </template>
    <template #footer>
      <div style="flex: auto">
        <el-button type="primary" @click="handleLogout">退出登录</el-button>
      </div>
    </template>
  </el-drawer>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router'
import { defineComponent, onMounted, reactive, ref } from 'vue'
import { Setting } from '@element-plus/icons-vue'
import { useUserStore } from '@/store/modules/user'
import { useRouter } from 'vue-router'

defineComponent({
  name: 'LayoutPage',
})

const userStore = useUserStore()
const router = useRouter()

const state = reactive({
  circleUrl:
    'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
})

const drawerSetting = ref(false)
// const menuRouter = ref([])

function handleLogout() {
  console.log('logout')
  userStore.logout()
  // 跳转到登录页面
  router.push('/login')
}

function triggerSetting() {
  drawerSetting.value = true
}

console.log(router.getRoutes())

// function getMenu() {
//   menuRouter.value = router.getRoutes().filter((item) => item.name === 'Layout')
// }

onMounted(() => {
  // getMenu()
})
</script>

<style lang="less" scoped>
.layout {
  height: 100%;
  .container {
    height: 100%;
    .container-body {
      height: 100%;

      .aside {
        width: 200px;
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-end;
        align-items: center;
        .logo {
          width: 100%;
          height: 60px;
          flex: 0 0 auto;
          border-bottom: 1px solid #eee;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #eee;

          img {
            height: 42px;
          }
        }
        .menu {
          flex: 1;
          width: 100%;
          height: 100%;
          border-bottom: 1px solid #eee;

          .menu-cpm {
            height: 100%;
          }
        }
      }

      .container-body-right {
        height: 100%;
        border-bottom: 1px solid #eee;
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: start;

        .header {
          width: 100%;
          flex: 0 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 20px;
          border-bottom: 1px solid #eee;

          .settings,
          .avator,
          .settings-icon {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .settings {
            gap: 12px;
          }
          .avator {
            gap: 4px;
            cursor: pointer;
          }
          .settings-icon {
            gap: 4px;
            cursor: pointer;
          }
        }

        .main {
          width: 100%;
          flex: 1;
        }
      }
    }
  }
}
</style>
