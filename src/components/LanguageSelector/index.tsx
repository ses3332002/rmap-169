import React from 'react'
import { Select } from 'antd'
import { useStore } from 'stores'

import enIcon from '../../sources/images/en_icon.png'
import heIcon from '../../sources/images/he_icon.png'

function LanguageSelector(): React.ReactElement {
  const { localeStore } = useStore()
  const { locale } = localeStore

  function languageSelectHandler(value: any) {
    localeStore.setLocale(value)
  }
  const { Option } = Select

  return (
    <Select
      showArrow={false}
      defaultValue={locale.name}
      bordered={false}
      onChange={value => languageSelectHandler(value)}
    >
      <Option value="en">
        <img src={enIcon} />
      </Option>
      <Option value="he">
        <img src={heIcon} />
      </Option>
    </Select>
  )
}

export default LanguageSelector
