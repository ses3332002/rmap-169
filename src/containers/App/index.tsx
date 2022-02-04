import React, { useState } from 'react'
import { Button, ConfigProvider, DatePicker } from 'antd'
import { ThemeSwitcherProvider } from 'react-css-theme-switcher'
import { useTranslation } from 'react-i18next'
import 'moment/locale/he'
import Header from '../../components/Header'
import styles from './styles.module.scss'
import { useStore } from 'stores'

import { Provider, observer } from 'mobx-react'
import store from 'stores'

const App = observer(() => {
  const { t, i18n } = useTranslation()

  const { localeStore } = useStore()
  const { locale } = localeStore

  // function getLocale() {
  //   if (localStorage.getItem('locale')) {
  //     prepareLocale(localStorage.getItem('locale') as string)
  //     return localStorage.getItem('locale')
  //   } else {
  //     prepareLocale(i18n.resolvedLanguage)
  //     return i18n.resolvedLanguage
  //   }
  // }

  // function saveLocale(locale: string) {
  //   localStorage.setItem('locale', locale)
  // }

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
    <Provider {...store}>
      <ThemeSwitcherProvider
        defaultTheme={currentColorScheme}
        themeMap={themes}
        insertionPoint={document.getElementById('inject-styles-here')}
      >
        <ConfigProvider
          direction={localeStore.antdDirection}
          locale={localeStore.antdLocale}
        >
          <div className={styles.app}>
            <Header />
            <Button>{t('buttonText')}</Button>
            <DatePicker />
          </div>
        </ConfigProvider>
      </ThemeSwitcherProvider>
    </Provider>
  )
})

export default App
