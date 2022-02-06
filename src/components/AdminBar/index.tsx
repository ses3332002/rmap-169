import React from 'react'
import { Row, Col } from 'antd'
import SiteConfig from 'components/SiteConfig'
import UserConfig from 'components/UserConfig'
import styles from './styles.module.scss'

function AdminBar(): React.ReactElement {
  return (
    <div className={styles.container}>
      <Row className={styles.adminbar_row} justify="space-between">
        <Col>
          <SiteConfig />
        </Col>
        <Col>
          <UserConfig />
        </Col>
      </Row>
    </div>
  )
}

export default AdminBar
