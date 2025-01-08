<template>
  <div class="layout">
    <div class="container">
      <el-container class="container-body">
        <el-aside class="aside">
          <div class="logo">
            <img src="@/assets/images/logo.png" alt="logo" />
          </div>
          <div class="menu">
            <el-menu default-active="/home" class="menu-cpm" router>
              <el-menu-item index="/home">Home</el-menu-item>
              <el-menu-item index="/about">About</el-menu-item>
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
              <div class="settings-icon">
                <el-icon>
                  <Setting :size="32" />
                </el-icon>
                <span>Setting</span>
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
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router'
import { defineComponent, reactive } from 'vue'
import { Setting } from '@element-plus/icons-vue'

defineComponent({
  name: 'LayoutPage',
})

const state = reactive({
  circleUrl:
    'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
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
