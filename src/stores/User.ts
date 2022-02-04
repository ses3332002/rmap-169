import {
  observable,
  action,
  computed,
  reaction,
  makeAutoObservable,
} from 'mobx'
import { IUser } from '../models'

class UserStore {
  constructor() {
    makeAutoObservable(this)
    reaction(
      () => this.user,
      _ => console.log(this.user)
    )
  }

  @observable user: IUser = {
    id: 0,
    name: 'admin',
    messages: 3,
    imgSrc: 'https://picsum.photos/seed/picsum/100',
    company: { name: '' },
  }

  @action setInfo = (userInfo: IUser): void => {
    this.user = userInfo
  }

  @action unSetInfo = (): void => {
    this.user = {
      id: 0,
      name: '',
      messages: 0,
      imgSrc: '',
      company: { name: '' },
    }
  }

  @computed get info(): any {
    return {
      name: this.user.name,
    }
  }
}

export default new UserStore()
