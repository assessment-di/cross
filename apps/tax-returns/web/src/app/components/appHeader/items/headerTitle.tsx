import React from 'react'
import { useIntl } from 'react-intl'
import * as styles from '../header.css'

const HeaderTitle: React.FC = () => {
  const { formatMessage } = useIntl()

  return <p className={styles.title}>{formatMessage({ id: 'title' })}</p>
}

export default HeaderTitle
