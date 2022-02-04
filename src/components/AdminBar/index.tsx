import React from 'react'
import { Row } from 'antd'
import styles from './styles.module.scss'
import SiteConfig from 'components/SiteConfig'
import UserConfig from 'components/UserConfig'

function AdminBar(): React.ReactElement {
  return (
    <div className={styles.container}>
      <Row className={styles.adminbar_row} justify="space-between">
        <SiteConfig />
        <UserConfig />
      </Row>
    </div>
  )
}

export default AdminBar
