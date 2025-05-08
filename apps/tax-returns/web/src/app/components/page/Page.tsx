import React, { ElementType } from 'react'
import * as styles from './Page.css'
import { Box, LoadingDots } from '@island.is/island-ui/core'
import { useLoginMethods } from '../../UserContext'

type Props = {
  component?: ElementType
}

const Page: React.FC<React.PropsWithChildren<Props>> = ({
  component = 'main',
  children,
}) => {
  const { loading } = useLoginMethods()
  return (
    <>
      {!loading && (
        <Box
          className={styles.container}
          component={component}
          style={{
            overflowY: loading ? 'hidden' : 'auto',
          }}
        >
          {children}
        </Box>
      )}
      {loading && (
        <Box
          display="flex"
          width="full"
          alignItems="center"
          justifyContent="center"
          style={{
            zIndex: 5,
            height: '100vh',
            position: 'absolute',
            width: '100vw',
            top: 0,
            backgroundColor: 'white',
          }}
        >
          <LoadingDots large />
        </Box>
      )}
    </>
  )
}

export default Page
