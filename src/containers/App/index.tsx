import React, { Component } from 'react'
import { Router, Switch, Route } from 'react-router'
import PrivateRoute from 'components/PrivateRoute'
import { Provider } from 'mobx-react'

import history from 'utils/history'

import AppLoading from 'components/AppLoading'
import Public from '../Public'
import Admin from '../Admin'

import store from 'stores'

import * as userActions from 'actions/users'

class App extends Component {
  state = {
    initialized: false,
  }

  componentDidMount = (): void => {
    this.loadUser()
  }

  loadUser = async (): Promise<void> => {
    try {
      await userActions.authUser()
    } catch (e) {
      console.log(e)
    } finally {
      this.setState({ initialized: true })
    }
  }

  render = (): JSX.Element => {
    return <Provider {...store}>Hello</Provider>
  }
}

export default App
