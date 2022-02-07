import React from 'react'
import { Card, Row, Col, Typography } from 'antd'
import { useTranslation } from 'react-i18next'
import styles from './styles.module.scss'

function SimpleVidget(props: any): React.ReactElement {
  const { Title, Text } = Typography
  const { t } = useTranslation()
  return (
    <Card hoverable style={{ borderRadius: 4 }}>
      <Row align="middle" justify="space-between">
        <Col style={{ textAlign: 'left' }}>
          <Text strong>{t(props.title)}</Text>
          <Title level={4}>
            {props.isCurr && '$'}
            {props.content.toLocaleString()}
          </Title>
        </Col>
        <Col>
          <div className={styles.round}>{props.icon}</div>
        </Col>
      </Row>
    </Card>
  )
}

export default SimpleVidget
