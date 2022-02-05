import React from 'react'
import { Row, Col, Menu } from 'antd'
import {
  HomeOutlined,
  GlobalOutlined,
  AppstoreAddOutlined,
  ContainerOutlined,
  FileTextOutlined,
} from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import styles from './styles.module.scss'

function NavBar(): React.ReactElement {
  const { t } = useTranslation()

  const { SubMenu, Item } = Menu
  return (
    <div className={styles.container}>
      <Row className={styles.navbar_row}>
        <Col span={24}>
          <Menu
            className={styles.menu}
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
              <Item key="11">{t('option')}</Item>
              <Item key="12">{t('option')}</Item>
              <Item key="13">{t('option')}</Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              icon={<GlobalOutlined />}
              title={t('elements')}
              className={styles.submenu}
            >
              <Item key="21">{t('option')}</Item>
              <Item key="22">{t('option')}</Item>
              <Item key="23">{t('option')}</Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              icon={<AppstoreAddOutlined />}
              title={t('apps')}
              className={styles.submenu}
            >
              <Menu.Item key="31">{t('option')}</Menu.Item>
              <Menu.Item key="32">{t('option')}</Menu.Item>
              <Menu.Item key="33">{t('option')}</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub4"
              icon={<ContainerOutlined />}
              title={t('components')}
              className={styles.submenu}
            >
              <Menu.Item key="41">{t('option')}</Menu.Item>
              <Menu.Item key="42">{t('option')}</Menu.Item>
              <Menu.Item key="43">{t('option')}</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub5"
              icon={<FileTextOutlined />}
              title={t('extra_pages')}
              className={styles.submenu}
            >
              <Menu.Item key="51">{t('option')}</Menu.Item>
              <Menu.Item key="52">{t('option')}</Menu.Item>
              <Menu.Item key="53">{t('option')}</Menu.Item>
            </SubMenu>
          </Menu>
        </Col>
      </Row>
    </div>
  )
}

export default NavBar
