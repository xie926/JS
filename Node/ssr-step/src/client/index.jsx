import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { renderRoutes} from 'react-router-config'
// import Header from '../components/Header'
import { BrowserRouter } from 'react-router-dom'
import routes from '../routers'

const App = function() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <div>
        { renderRoutes(routes)}
      </div>
    </BrowserRouter>
  )
}
// hydrate  复用已有的html 负责事件绑定
ReactDom.hydrate(<App />, document.getElementById('app'))