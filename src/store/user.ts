import {defineStore} from 'pinia'
import {ref} from 'vue'
import {type LoginUserVO, UserControllerService} from '@/api'
import { ACCESS_ENUM } from '@/access/accessEnum'

export const useUserStore = defineStore('user', () => {
    const loginUser = ref<LoginUserVO>({
        userName: '未登录',
        userRole: ACCESS_ENUM.NO_LOGIN
    })
    async function fetchLoginUser() {
        const res = await UserControllerService.getLoginUserUsingGet();
        if (res.code === 200) {
            loginUser.value = responseLoginUserVO.data
        }
    }
    return {loginUser, fetchLoginUser}
})
