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
    name: 'en',
  }

  @action setLocale = (name: 'en' | 'he'): void => {
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

autorun(() => {
  moment.locale(localeStore.locale.name)
  i18n.changeLanguage(localeStore.locale.name)
})

export default localeStore
