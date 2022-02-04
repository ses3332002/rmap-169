import React from 'react'
import { Row, Space, Button, Badge } from 'antd'
import {
  AppstoreAddOutlined,
  ExpandOutlined,
  BellOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import LanguageSelector from 'components/LanguageSelector'
import UserMenu from 'components/UserMenu'
import { useStore } from 'stores'

function UserConfig(): React.ReactElement {
  const { userStore } = useStore()
  const { user } = userStore

  return (
    <Row align="middle">
      <Space size={6}>
        <LanguageSelector />
        <Button type="text">
          <AppstoreAddOutlined style={{ fontSize: 24 }} />
        </Button>
        <Button type="text">
          <ExpandOutlined style={{ fontSize: 24 }} />
        </Button>
        <Button type="text">
          <Badge count={user.messages} style={{ fontSize: 10 }}>
            <BellOutlined style={{ fontSize: 24 }} />
          </Badge>
        </Button>
        <UserMenu />
        <Button type="text">
          <SettingOutlined style={{ fontSize: 24 }} />
        </Button>
      </Space>
    </Row>
  )
}

export default UserConfig
