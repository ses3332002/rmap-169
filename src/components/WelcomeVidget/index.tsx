import React from 'react'
import { Card, Avatar, Button, Typography } from 'antd'
import { UserOutlined, ArrowRightOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import { useStore } from 'stores'
import styles from './styles.module.scss'

function WelcomeVidget(): React.ReactElement {
  const { t } = useTranslation()
  const { Title, Text } = Typography
  const { userStore } = useStore()
  const { user } = userStore

  return (
    <Card hoverable style={{ borderRadius: 4 }} className={styles.container}>
      <div className={styles.card_top}>
        <Title level={4}>{t('welcome_back')}</Title>
        <Text>{t('scote_dashboard')}</Text>
      </div>
      <div className={styles.card_info}>
        <div className={styles.user_avatar}>
          <div className={styles.avatar}>
            {user.imgSrc ? (
              <Avatar size={54} src={user.imgSrc} />
            ) : (
              <Avatar
                size={54}
                className={styles.avatar}
                icon={<UserOutlined />}
              />
            )}
          </div>
          <Text strong>{user.name}</Text>
          <br />
          <Text>{user.position}</Text>
        </div>
        <div>
          <div className={styles.info_panel}>
            <Text strong>{user.projects}</Text>
            <div>{t('projects')}</div>
          </div>
          <Button className={styles.button} type="primary">
            <Text strong>
              {t('view_profile')}
              <ArrowRightOutlined />
            </Text>
          </Button>
        </div>
        <div className={styles.info_panel}>
          <Text strong>${user.revenue.toLocaleString()}</Text>
          <div>{t('revenue')}</div>
        </div>
      </div>
    </Card>
  )
}

export default WelcomeVidget
