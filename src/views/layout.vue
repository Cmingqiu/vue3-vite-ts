<template>
  <div class="layout">
    <aside>
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        router
      >
        <el-menu-item index="/home">
          <span>Home</span>
        </el-menu-item>
        <el-menu-item index="/about">
          <span>About</span>
        </el-menu-item>
      </el-menu>
    </aside>

    <main>
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.layout {
  height: 100%;
  aside {
    width: 250px;
    height: 100%;
    float: left;

    .el-menu-vertical-demo:not(.el-menu--collapse) {
      height: 100%;
    }
  }
  main {
    padding: 10px;
    overflow: hidden;
    height: 100%;
  }
}
</style>
