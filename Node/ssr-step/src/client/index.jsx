import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import Header from '../components/Header'
import { renderRoutes } from 'react-router-config'
import routes from '../routers'

const App = function() {
  return (
    <BrowserRouter>
      <div>{ renderRoutes(routes) }</div>
    </BrowserRouter>
  )
}
{/* 复用已有的html, 负责事件绑定 */}
ReactDom.hydrate(<App />, document.getElementById('app'))