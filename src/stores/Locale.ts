import { observable, action, computed, autorun, makeAutoObservable } from 'mobx'
import { ILocale } from '../models'
import enUS from 'antd/lib/locale/en_US'
import heIL from 'antd/lib/locale/he_IL'
import moment from 'moment'
import i18n from 'i18n/i18n'

class LocaleStore {
  constructor() {
    makeAutoObservable(this)
  }

  @observable locale: ILocale = {
    name: undefined,
  }

  @action setLocale = (name: ILocale['name']): void => {
    this.locale.name = name
  }

  @computed get antdDirection(): 'ltr' | 'rtl' {
    switch (this.locale.name) {
      case 'en':
        return 'ltr'
      case 'he':
        return 'rtl'
      default:
        return 'ltr'
    }
  }

  @computed get antdLocale(): any {
    switch (this.locale.name) {
      case 'en':
        return enUS
      case 'he':
        return heIL
      default:
        return enUS
    }
  }
}

const localeStore = new LocaleStore()

function checkLocalStorage(locale: 'en' | 'he' | undefined) {
  if (localStorage.getItem('locale')) {
    if (locale === undefined) {
      localeStore.setLocale(localStorage.getItem('locale') as 'en' | 'he')
      return
    }
    if (localStorage.getItem('locale') !== locale) {
      localStorage.setItem('locale', locale as string)
    }
  } else if (!localStorage.getItem('locale')) {
    localeStore.setLocale('en')
    localStorage.setItem('locale', 'en')
  }
}

autorun(() => {
  checkLocalStorage(localeStore.locale.name)
  moment.locale(localeStore.locale.name)
  i18n.changeLanguage(localeStore.locale.name)
})

export default localeStore
