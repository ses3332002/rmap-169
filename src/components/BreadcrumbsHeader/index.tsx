import React from 'react'
import { Breadcrumb, Row, Col, Typography } from 'antd'
import { useTranslation } from 'react-i18next'
import styles from './styles.module.scss'

function BreadcrumbsHeader(): React.ReactElement {
  const { Title } = Typography
  const { t } = useTranslation()
  return (
    <Row justify="space-between" className={styles.breadcrumbs_row}>
      <Col>
        <Title level={4}>{t('dashboard').toUpperCase()}</Title>
      </Col>
      <Col>
        <Breadcrumb>
          <Breadcrumb.Item>
            <a href="#">{t('dashboards')}</a>
          </Breadcrumb.Item>

          <Breadcrumb.Item>{t('dashboard')}</Breadcrumb.Item>
        </Breadcrumb>
      </Col>
    </Row>
  )
}
export default BreadcrumbsHeader
