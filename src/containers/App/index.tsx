import React, { useState } from 'react'
import { Button, ConfigProvider, Col, Row, DatePicker } from 'antd'
import { ThemeSwitcherProvider } from 'react-css-theme-switcher'
import { useTranslation } from 'react-i18next'
import enUS from 'antd/lib/locale/en_US'
import heIL from 'antd/lib/locale/he_IL'
import moment from 'moment'
import 'moment/locale/he'

// import { Provider } from 'mobx-react'
// import store from 'stores'

function App(): JSX.Element {
  const { t, i18n } = useTranslation()

  let direction = i18n.dir()
  console.log(i18n.resolvedLanguage)

  moment.locale('he')

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
      <ConfigProvider direction={direction} locale={heIL}>
        <Row>
          <Col span={24}>
            <Button>{t('buttonText')}</Button>
            {t('welcome')}
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
