import React, { useState, useEffect } from 'react'
import { Button, ConfigProvider, Col, Row, DatePicker } from 'antd'
import { ThemeSwitcherProvider } from 'react-css-theme-switcher'
import { useTranslation } from 'react-i18next'
import enUS from 'antd/lib/locale/en_US'
import heIL from 'antd/lib/locale/he_IL'
import moment from 'moment'
import 'moment/locale/he'
import { languageCodes } from '../../i18n/variables'

// import { Provider } from 'mobx-react'
// import store from 'stores'

function App(): JSX.Element {
  const { t, i18n } = useTranslation()
  let antdLocale
  let antdDirection

  function setLanguage(resolvedLanguage: string, direction: string) {
    antdDirection = direction
    moment.locale(resolvedLanguage)

    switch (resolvedLanguage) {
      case languageCodes.enCode:
        antdLocale = enUS
        break
      case languageCodes.heCode:
        antdLocale = heIL
        break
      default:
        antdLocale = enUS
        moment.locale('en')
    }
  }

  setLanguage(i18n.resolvedLanguage, i18n.dir())

  useEffect(() => {
    console.log("I've started")
  }, [])

  const themes = {
    light: `${process.env.PUBLIC_URL}/styles/antd.min.css`,
    dark: `${process.env.PUBLIC_URL}/styles/antd.dark.min.css`,
  }

  const [currentColorScheme, setCurrentColorScheme] = useState('light')

  function getCurrentColorScheme() {
    if (window.matchMedia) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark'
      } else {
        return 'light'
      }
    }
    return 'light'
  }

  function colorSchemeChangeHandler() {
    setCurrentColorScheme(getCurrentColorScheme())
  }

  if (window.matchMedia) {
    let colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)')
    colorSchemeQuery.addEventListener('change', colorSchemeChangeHandler)
  }

  return (
    // <Provider {...store}>
    <ThemeSwitcherProvider
      defaultTheme={currentColorScheme}
      themeMap={themes}
      insertionPoint={document.getElementById('inject-styles-here')}
    >
      Hello
      <ConfigProvider direction={antdDirection} locale={antdLocale}>
        <Row>
          <Col span={24}>
            <Button>{t('buttonText')}</Button>
            {t('welcomeText')}
            <Button>Hello onсe more</Button>
          </Col>
          <DatePicker />
        </Row>
      </ConfigProvider>
    </ThemeSwitcherProvider>
    // </Provider>
  )
}

export default App
