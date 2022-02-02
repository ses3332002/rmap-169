import React from 'react'
import { Button, ConfigProvider, Col, Row } from 'antd'
import { Provider } from 'mobx-react'

import store from 'stores'

function App(): JSX.Element {
  type Direction = 'rtl' | 'ltr'

  let direction: Direction = 'rtl'

  function loadLightScheme() {
    let styles = document.createElement('link')
    styles.type = 'text/css'
    styles.rel = 'stylesheet'
    styles.href = './antd.min.css'
    document.head.appendChild(styles)
  }
  function loadDarkScheme() {
    let styles = document.createElement('link')
    styles.type = 'text/css'
    styles.rel = 'stylesheet'
    styles.href = './antd.dark.min.css'
    document.head.appendChild(styles)
  }

  return (
    // <Provider {...store}>
    <>
      Hello
      <ConfigProvider direction={direction}>
        <Row>
          <Col span={24}>
            <Button onClick={loadLightScheme}>Hello there</Button>
            <Button onClick={loadDarkScheme}>Hello onсe more</Button>
          </Col>
        </Row>
      </ConfigProvider>
    </>
    // </Provider>
  )
}

export default App
