<template>
  <div class="max-h-[68px] shadow overflow-hidden">
    <div class="flex items-center">
      <div class="flex items-center gap-[10px] ml-[24px] w-[110px] cursor-pointer select-none">
        <img width="40px" src="@/assets/leetcode.svg" alt="logo" />
        <span class="text-[#3D3D3D] font-bold">ICE OJ</span>
      </div>
      <a-menu mode="horizontal" :default-selected-keys="[currentPath]" @menu-item-click="menuItemClick">
        <a-menu-item v-for="value in menus" :key="value.path">
          {{ value.name }}
        </a-menu-item>
      </a-menu>
      <div class="mr-[24px]">aa</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
import { menus } from '@/router/menus'
import { computed } from 'vue'
const currentPath = computed(() => route.path)
const menuItemClick = (e: string) => {
  router.push({ path: e })
}
</script>
<style lang="scss" scoped>
:deep() {
  .arco-menu-inner {
    padding-left: 0;
  }
}
</style>
