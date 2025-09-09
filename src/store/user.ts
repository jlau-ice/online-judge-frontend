import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useUserStore = defineStore('user', () => {
  const name = ref('张三')
  const age = ref(25)
  
  // actions：用于修改状态或执行异步操作
  function changeName(newName: string) {
    name.value = newName
  }
  // getters：用于计算状态
  const info = computed(() => `姓名：${name.value}，年龄：${age.value}`)
  return { name, age, changeName, info }
})
