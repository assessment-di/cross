import { createContext, useCallback, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export interface User {
  name: string
  ssn: string
  address: string
  email: string
  phone: string
}

export const UserContext = createContext<{
  isAuthenticated: boolean
  setIsAuthenticated: (isAuthenticated: boolean) => void
  user: null | User
  loading: boolean
  setLoading: (isLoading: boolean) => void
}>({
  isAuthenticated: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setIsAuthenticated: () => {},
  user: null,
  loading: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setLoading: () => {},
})

const MOCK_DELAY = 1200

export const useLoginMethods = () => {
  const { setIsAuthenticated, user, isAuthenticated, loading, setLoading } =
    useContext(UserContext)

  const navigate = useNavigate()

  const login = useCallback(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setIsAuthenticated(true)
      navigate('/dashboard')
    }, MOCK_DELAY)
  }, [])

  const logout = useCallback(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setIsAuthenticated(false)
      navigate('/')
    }, MOCK_DELAY)
  }, [])

  return {
    login,
    logout,
    user,
    isAuthenticated,
    loading,
  }
}
