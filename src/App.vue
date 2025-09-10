<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script setup lang="ts">
import { useUserStore } from '@/store/user'
const userStore = useUserStore()

setTimeout(() => {
  userStore.fetchUserInfo()
}, 5000)

setTimeout(() => {
  userStore.changeName("测试")
}, 10000)

</script>
<style scoped></style>
