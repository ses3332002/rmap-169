import React from 'react'
import { Card, Button, Typography, Row, Col, Progress, Space } from 'antd'
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  ArrowRightOutlined,
} from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import { useStore } from 'stores'
import styles from './styles.module.scss'

function EarningsVidget(): React.ReactElement {
  const { t } = useTranslation()
  const { Title, Text } = Typography
  const { userStore } = useStore()
  const { user } = userStore
  return (
    <Card hoverable style={{ borderRadius: 4 }} className={styles.container}>
      <Title level={4}>{t('monthly_earnings')}</Title>
      <Row justify="space-between" className={styles.numbers_info}>
        <Col>
          <Text>{t('this_month')}</Text>
          <Title level={4}>${user.earnings.toLocaleString()}</Title>
          <span className={user.dif > 0 ? styles.positive : styles.negative}>
            {user.dif}%
            {user.dif > 0 ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
          </span>
          <span className={styles.text}>{t('from_prev')}</span>
          <div className={styles.button}>
            <Button type="primary">
              <Text strong>
                {t('view_more')}
                <ArrowRightOutlined />
              </Text>
            </Button>
          </div>
        </Col>
        <Col>
          <Space direction="vertical" align="center">
            <Progress type="dashboard" percent={user.seriesA} gapDegree={30} />
            <Text strong>Series A</Text>
          </Space>
        </Col>
      </Row>
      <Text>{t('we_craft')}</Text>
    </Card>
  )
}

export default EarningsVidget
