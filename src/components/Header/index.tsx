import React from 'react'
import { Row, Col, Layout, Menu, Button, Avatar } from 'antd'
import {
  HomeOutlined,
  GlobalOutlined,
  AppstoreAddOutlined,
  ContainerOutlined,
  FileTextOutlined,
  CaretDownOutlined,
} from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
// import { Link } from 'react-router-dom'

// import * as usersActions from 'actions/users'

// import { useStore } from 'stores'

import styles from './styles.module.scss'

function Header(): React.ReactElement {
  // const { userStore } = useStore()
  // const { user } = userStore
  const { t } = useTranslation()

  const { SubMenu, Item } = Menu

  return (
    <header className={styles.header}>
      <Row className={styles.header_row}>
        <Col span={24}>
          <Menu
            mode="horizontal"
            style={{
              zIndex: 5,
              width: '100%',
              border: 'none',
              backgroundColor: 'transparent',
              color: 'white',
              fontWeight: 'bold',
            }}
          >
            <SubMenu
              key="sub1"
              icon={<HomeOutlined />}
              title={t('dashboard')}
              className={styles.submenu}
            >
              <Item key="1">Option 1</Item>
              <Item key="2">Option 2</Item>
              <Item key="3">Option 3</Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              icon={<GlobalOutlined />}
              title={t('elements')}
              className={styles.submenu}
            >
              <Item key="21">Option 1</Item>
              <Item key="22">Option 2</Item>
              <Item key="23">Option 3</Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              icon={<AppstoreAddOutlined />}
              title={t('apps')}
              className={styles.submenu}
            >
              <Menu.Item key="1">Option 1</Menu.Item>
              <Menu.Item key="2">Option 2</Menu.Item>
              <Menu.Item key="3">Option 3</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub4"
              icon={<ContainerOutlined />}
              title={t('components')}
              className={styles.submenu}
            >
              <Menu.Item key="1">Option 1</Menu.Item>
              <Menu.Item key="2">Option 2</Menu.Item>
              <Menu.Item key="3">Option 3</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub5"
              icon={<FileTextOutlined />}
              title={t('extra_pages')}
              className={styles.submenu}
            >
              <Menu.Item key="1">Option 1</Menu.Item>
              <Menu.Item key="2">Option 2</Menu.Item>
              <Menu.Item key="3">Option 3</Menu.Item>
            </SubMenu>
          </Menu>
        </Col>
      </Row>
    </header>
  )
}

export default Header
