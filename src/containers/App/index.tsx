import React from 'react'
import { Button, ConfigProvider } from 'antd'
import { Provider } from 'mobx-react'

import store from 'stores'

// import * as userActions from 'actions/users'

function App(): JSX.Element {
  return (
    <Provider {...store}>
      <ConfigProvider direction="rtl">
        <div className="direction-components rtl">
          <Button>Hello there</Button>
          <Button>Hello onсe more</Button>
        </div>
      </ConfigProvider>
    </Provider>
  )
}

export default App
