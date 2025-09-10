import type { API } from '@/types/user'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const userInfo = ref<API.UserInfo>({})
  function fetchUserInfo() {
    userInfo.value = { name: '张三', age: 18, role: 'user' }
  }
  // actions：用于修改状态或执行异步操作
  function changeName(name: string) {
    userInfo.value.name = name
  }
  // getters：用于计算状态
  // const info = computed(() => `姓名：${name.value}，年龄：${age.value}`)
  return { userInfo, changeName, fetchUserInfo }
})
