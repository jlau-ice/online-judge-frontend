<template>
  <div class="max-h-[68px] shadow">
    <a-menu mode="horizontal" :default-selected-keys="[menus[0].path]" @menu-item-click="menuItemClick">
      <a-menu-item key="0" class="p-0" disabled>
        <div class="flex items-center gap-[10px]">
          <img width="40px" src="@/assets/leetcode.svg" alt="logo" />
          <span>ICE OJ</span>
        </div>
      </a-menu-item>
      <a-menu-item v-for="value in menus" :key="value.path">
        {{ value.name }}
      </a-menu-item>
    </a-menu>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
import { menus } from '@/router/menus'
const menuItemClick = (e: string) => {
  router.push({ path: e })
}
</script>
<style lang="scss" scoped></style>
