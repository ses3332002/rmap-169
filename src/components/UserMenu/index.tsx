import React from 'react'
import { Col, Menu, Avatar, Dropdown, Space } from 'antd'
import { UserOutlined, DownOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import { useStore } from 'stores'

function UserMenu(): React.ReactElement {
  const { t } = useTranslation()
  const { userStore } = useStore()
  const { user } = userStore

  const menu = (
    <Menu>
      <Menu.Item key="1">{t('option')}</Menu.Item>
      <Menu.Item key="2">{t('option')}</Menu.Item>
    </Menu>
  )

  return (
    <Col>
      <Space size={8}>
        {user.imgSrc ? (
          <Avatar src={user.imgSrc} />
        ) : (
          <Avatar icon={<UserOutlined />} />
        )}
        <Dropdown overlay={menu} trigger={['click']}>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            {user.name} <DownOutlined />
          </a>
        </Dropdown>
      </Space>
    </Col>
  )
}

export default UserMenu
