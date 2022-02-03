import React, { useState, useEffect } from 'react'
import { Button, ConfigProvider, Col, Row, DatePicker } from 'antd'
import { ThemeSwitcherProvider } from 'react-css-theme-switcher'
import { useTranslation } from 'react-i18next'
import enUS from 'antd/lib/locale/en_US'
import heIL from 'antd/lib/locale/he_IL'
import moment from 'moment'
import 'moment/locale/he'
import Header from '../../components/Header'
import { languageCodes } from '../../i18n/variables'
import styles from './styles.module.scss'

// import { Provider } from 'mobx-react'
// import store from 'stores'

function App(): JSX.Element {
  const { t, i18n } = useTranslation()
  let antdLocale = enUS
  let antdDirection: 'ltr' | 'rtl' = 'ltr'

  const [locale, setLocale] = useState(getLocale)
  // const [localeSettings,setLocaleSettings]=useState({})

  function prepareLocale(locale: string) {
    moment.locale(locale as string)
    switch (locale) {
      case languageCodes.enCode:
        antdLocale = enUS
        antdDirection = 'ltr'
        break
      case languageCodes.heCode:
        antdLocale = heIL
        antdDirection = 'rtl'
        break
      default:
        antdDirection = 'ltr'
        antdLocale = enUS
        moment.locale('en')
    }
  }

  function getLocale() {
    if (localStorage.getItem('locale')) {
      prepareLocale(localStorage.getItem('locale') as string)
      return localStorage.getItem('locale')
    } else {
      prepareLocale(i18n.resolvedLanguage)
      return i18n.resolvedLanguage
    }
  }

  function saveLocale(locale: string) {
    localStorage.setItem('locale', locale)
  }

  const themes = {
    light: `${process.env.PUBLIC_URL}/styles/antd.min.css`,
    dark: `${process.env.PUBLIC_URL}/styles/antd.dark.min.css`,
  }

  const [currentColorScheme, setCurrentColorScheme] = useState(
    getCurrentColorScheme
  )

  function getCurrentColorScheme() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    } else {
      return 'light'
    }
  }

  function colorSchemeChangeHandler() {
    setCurrentColorScheme(getCurrentColorScheme())
  }

  let colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)')
  colorSchemeQuery.addEventListener('change', colorSchemeChangeHandler)

  return (
    // <Provider {...store}>
    <ThemeSwitcherProvider
      defaultTheme={currentColorScheme}
      themeMap={themes}
      insertionPoint={document.getElementById('inject-styles-here')}
    >
      <ConfigProvider direction={antdDirection} locale={antdLocale}>
        <div className={styles.app}>
          <Header />
          <Row>
            <Col span={24}>
              <Button>{t('buttonText')}</Button>
              {t('welcomeText')}
              <Button>Hello onсe more</Button>
            </Col>
            <DatePicker />
          </Row>
        </div>
      </ConfigProvider>
    </ThemeSwitcherProvider>
    // </Provider>
  )
}

export default App
