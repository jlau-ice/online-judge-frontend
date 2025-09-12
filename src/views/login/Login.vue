<template>
  <div class="login-container flex flex-col items-center justify-between">
    <div class="h-[calc(50vh)] py-[20px]">
      <div class="flex flex-col items-center justify-between">
        <img width="55" src="@/assets/logo.svg" alt="logo" />
        <span>我的OJ</span>
      </div>
    </div>
    <div class="py-[20px]"></div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  username: '',
  password: '',
})

const handleLogin = () => {
  if (!form.username || !form.password) {
    alert('请输入用户名和密码')
    return
  }
  console.log('登录中...', form)
}
</script>

<style scoped lang="scss">
.login-container {
  width: 100vw;
  height: 100vh;
  background-image: url('@/assets/background.png');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
</style>
