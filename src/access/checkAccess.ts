import type { API } from '@/types/user'
import ACCESS_ENUM from './accessEnum'

const checkAccess = (loginUser: API.UserInfo, needAccess: Array<string>) => {
  if (!needAccess || needAccess.length === 0) return true
  const loginUserRole = loginUser?.role ?? ACCESS_ENUM.NO_LOGIN
  return needAccess.includes(loginUserRole)
}

export default checkAccess
