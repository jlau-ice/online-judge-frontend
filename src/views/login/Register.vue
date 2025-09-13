<template>
  <div class="login-container flex flex-col items-center justify-between">
    <div class="py-[20px] flex justify-center items-center h-[calc(60vh-80px)]">
      <div class="flex flex-col justify-center items-center gap-[15px] select-none">
        <div class="flex items-center gap-[10px]">
          <img width="44" src="@/assets/ant.svg" alt="logo" />
          <span class="text-[33px] font-semibold font-family-alibaba">Online Judege</span>
        </div>
        <span class="text-[#515258] tracking-wider font-family-alibaba">开源的OJ判题系统</span>
        <a-space direction="vertical" size="large" class="w-[320px] mt-[20px]">
          <a-input placeholder="请输入账号" allow-clear />
          <a-input-password v-model:visibility="visibility" placeholder="请输入密码" :defaultVisibility="false" allow-clear />
          <div class="text-[#bbb] text-right">
            有账号？
            <span class="cursor-pointer hover:text-[#1677ff]" @click="handelRegister">去登录</span>
          </div>
          <a-button type="primary" class="w-full" @click="handleLogin">立即注册</a-button>
        </a-space>
      </div>
    </div>
    <div class="py-[20px]"></div>
  </div>
</template>

<script setup>
import router from '@/router'
import { reactive, ref } from 'vue'
const form = reactive({
  username: '',
  password: '',
})
const visibility = ref(true)
const handleLogin = () => {
  if (!form.username || !form.password) {
    alert('请输入用户名和密码')
    return
  }
  console.log('登录中...', form)
}
const handelRegister = () => {
  router.push({ path: '/login' })
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

.font-family-alibaba {
  font-family: AlibabaSans, sans-serif;
}
</style>
