import { UserContext } from './UserContext'
import React, { FC, PropsWithChildren, useEffect, useState } from 'react'

const mockUser = {
  name: 'Jökull Þórðarson',
  ssn: '120389-4569',
  address: 'Bláfjallagata 12, 105 Reykjavík',
  email: 'jokull.thordarson@email.is',
  phone: '772-8391',
}

const LOCAL_STORAGE_KEY = 'isAuthenticated'

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Read initial value from localStorage
    return localStorage.getItem(LOCAL_STORAGE_KEY) === 'true'
  })
  const [loading, setLoading] = useState(false)

  // Sync changes to localStorage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, String(isAuthenticated))
  }, [isAuthenticated])

  return (
    <UserContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        user: isAuthenticated ? mockUser : null,
        loading,
        setLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default AuthProvider
