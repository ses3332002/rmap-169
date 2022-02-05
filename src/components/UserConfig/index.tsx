import React from 'react'
import { Row, Button, Badge } from 'antd'
import {
  AppstoreAddOutlined,
  ExpandOutlined,
  BellOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import LanguageSelector from 'components/LanguageSelector'
import UserMenu from 'components/UserMenu'
import { useStore } from 'stores'
import styles from './styles.module.scss'

function UserConfig(): React.ReactElement {
  const { userStore } = useStore()
  const { user } = userStore

  return (
    <Row align="middle" justify="space-between" className={styles.buttons_row}>
      <LanguageSelector />
      <Button className={styles.menu_button} type="text">
        <AppstoreAddOutlined style={{ fontSize: 24 }} />
      </Button>
      <Button className={styles.menu_button} type="text">
        <ExpandOutlined style={{ fontSize: 24 }} />
      </Button>
      <Button className={styles.menu_button} type="text">
        <Badge count={user.messages} style={{ fontSize: 10 }}>
          <BellOutlined style={{ fontSize: 24 }} />
        </Badge>
      </Button>
      <UserMenu />
      <Button className={styles.menu_button} type="text">
        <SettingOutlined style={{ fontSize: 24 }} />
      </Button>
    </Row>
  )
}

export default UserConfig
