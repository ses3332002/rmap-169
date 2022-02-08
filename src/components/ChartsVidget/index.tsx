import React from 'react'
import { Card, Typography, Row, Col, Button } from 'antd'
import { useTranslation } from 'react-i18next'
import { useStore } from 'stores'

import { Column } from '@ant-design/plots'
import styles from './styles.module.scss'

function ChartsVidget(): React.ReactElement {
  const { t } = useTranslation()
  const { Title, Text } = Typography
  const { userStore } = useStore()
  const { user } = userStore
  const config = {
    data: user.emailData,
    isStack: true,
    xField: 'month',
    yField: 'value',
    seriesField: 'type',
  }

  return (
    <Card hoverable style={{ borderRadius: 4 }}>
      <Row justify="space-between" align="middle">
        <Col>
          <Title level={4}>{t('email_sent')}</Title>
        </Col>
        <Col>
          <Button type="text">
            <Text strong>{t('week')}</Text>
          </Button>
          <Button type="text">
            <Text strong>{t('month')}</Text>
          </Button>
          <Button type="primary" className={styles.button}>
            <Text strong>{t('year')}</Text>
          </Button>
        </Col>
      </Row>
      <Column
        color={['blue', 'orange', 'green']}
        className={styles.chart}
        autoFit
        maxColumnWidth={16}
        legend={{
          layout: 'horizontal',
          position: 'bottom',
        }}
        {...config}
      />
    </Card>
  )
}

export default ChartsVidget
