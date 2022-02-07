import React from 'react'
import { Row, Col, Menu, Input, Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import styles from './styles.module.scss'
import logoImg from '../../sources/images/logo.png'

function SiteConfig(): React.ReactElement {
  const { t } = useTranslation()

  const menu = (
    <Menu>
      <Menu.Item key="1">{t('option')}</Menu.Item>
      <Menu.Item key="2">{t('option')}</Menu.Item>
    </Menu>
  )

  return (
    <Row
      align="middle"
      justify="space-between"
      gutter={10}
      className={styles.site_row}
    >
      <Col className={styles.logo}>
        <img src={logoImg} alt="Logo" />
      </Col>
      <Col>
        <Input placeholder={t('search')} style={{ borderRadius: 20 }} />
      </Col>
      <Col className={styles.dropdown_menu}>
        <Dropdown overlay={menu} trigger={['click']}>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            {t('mega_menu')} <DownOutlined />
          </a>
        </Dropdown>
      </Col>
    </Row>
  )
}

export default SiteConfig
