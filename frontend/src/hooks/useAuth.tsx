import { useEffect, useState } from 'react'
import { UserInfo } from '../types/userInfo'
import { BACKEND_URL } from '../config/constants'

interface UseAuth {
  isLoading: boolean
  user: UserInfo | null
}

export const useAuth = (): UseAuth => {
  const [user, setUser] = useState<UserInfo | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(`${BACKEND_URL}/api/userinfo`, {
      credentials: 'include',
    })
      .then(async (r) => await r.json())
      .then((data) => {
        setIsLoading(false)
        setUser(data)
      })
      .catch(() => {
        setIsLoading(false)
        setUser(null)
      })
  }, [])

  return {
    isLoading,
    user,
  }
}