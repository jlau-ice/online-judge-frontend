import router from '@/router'
import { useUserStore } from '@/store/user'
import checkAccess from '@/access/checkAccess'

router.beforeEach((to, _, next) => {
  const userStore = useUserStore()
  const needRoles = (to?.meta?.requiresAuth as string[]) || []

  if (!checkAccess(userStore.userInfo, needRoles)) {
    return next('/noAccess')
  }
  next()
})
