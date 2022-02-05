import React from 'react'
import styles from './styles.module.scss'

import VidgetsPanel from 'components/VidgetsPanel'
import BreadcrumbsHeader from 'components/BreadcrumbsHeader'

function Main(): React.ReactElement {
  return (
    <div className={styles.container}>
      <BreadcrumbsHeader />
      <VidgetsPanel />
    </div>
  )
}

export default Main
