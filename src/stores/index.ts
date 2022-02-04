import { createContext, useContext } from 'react'
import { configure, observable } from 'mobx'

import userStore from './User'
import usersStore from './Users'
import localeStore from './Locale'

configure({ enforceActions: 'observed' })

class RootStore {
  @observable usersStore = usersStore
  @observable userStore = userStore
  @observable localeStore = localeStore
}

const rootStore = new RootStore()

export const StoreContext = createContext<RootStore>(rootStore)

export const useStore = (): RootStore => {
  const store = useContext(StoreContext)
  if (!store) {
    throw new Error('You have forgot to use StoreProvider, shame on you.')
  }
  return store
}

export default rootStore
