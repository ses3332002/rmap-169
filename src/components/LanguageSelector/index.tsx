import React from 'react'
import { Select } from 'antd'
import { useStore } from 'stores'
import { useTranslation } from 'react-i18next'

import enIcon from '../../sources/images/en_icon.png'
import heIcon from '../../sources/images/he_icon.png'

function LanguageSelector(): React.ReactElement {
  const { localeStore } = useStore()
  const { locale } = localeStore

  const { t } = useTranslation()

  function languageSelectHandler(value: 'en' | 'he') {
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
        <img src={enIcon} alt={t('english_selector')} />
      </Option>
      <Option value="he">
        <img src={heIcon} alt={t('hebrew_selector')} />
      </Option>
    </Select>
  )
}

export default LanguageSelector
