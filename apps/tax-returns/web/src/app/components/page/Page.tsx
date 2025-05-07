import React, { ElementType } from 'react'
import * as styles from './Page.css'
import { Box } from '@island.is/island-ui/core'

interface PageProps {
  component?: ElementType
}

const Page: React.FC<React.PropsWithChildren<PageProps>> = ({
  component = 'main',
  children,
}) => (
  <Box className={styles.container} component={component}>
    {children}
  </Box>
)

export default Page
