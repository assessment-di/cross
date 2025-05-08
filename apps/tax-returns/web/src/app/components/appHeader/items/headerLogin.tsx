import React from 'react'
import { Button } from '@island.is/island-ui/core'
import { FormattedMessage } from 'react-intl'
import { useLoginMethods } from '../../../UserContext'

const HeaderLogin: React.FC = () => {
  const { login, logout, isAuthenticated, user, loading } = useLoginMethods()

  return (
    <Button
      variant="utility"
      icon={isAuthenticated ? 'logOut' : 'person'}
      iconType="outline"
      onClick={async () => {
        if (!isAuthenticated) {
          login()
        } else {
          logout()
        }
      }}
    >
      {isAuthenticated && !loading ? (
        user?.name
      ) : (
        <FormattedMessage id="login" />
      )}
    </Button>
  )
}

export default HeaderLogin
