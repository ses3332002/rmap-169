import React from 'react'
import WelcomeVidget from 'components/WelcomeVidget'
import EarningsVidget from 'components/EarningsVidget'
import SimpleVidget from 'components/SimpleVidget'
import ChartsVidget from 'components/ChartsVidget'
import {
  CopyOutlined,
  DownSquareOutlined,
  TagOutlined,
} from '@ant-design/icons'

import styles from './styles.module.scss'

function VidgetsPanel(): React.ReactElement {
  return (
    <div className={styles.vidgets}>
      <WelcomeVidget />
      <EarningsVidget />
      <SimpleVidget
        title="orders"
        content={1235}
        isCurr={false}
        icon={<CopyOutlined />}
      />
      <SimpleVidget
        title="revenue"
        content={35723}
        isCurr={true}
        icon={<DownSquareOutlined />}
      />
      <SimpleVidget
        title="average_price"
        content={16.2}
        isCurr={true}
        icon={<TagOutlined />}
      />
      <ChartsVidget />
    </div>
  )
}

export default VidgetsPanel
