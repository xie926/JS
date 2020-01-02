import React, { Component } from 'react';
import { renderRoutes} from 'react-router-config'

class App extends Component {
  render() { 
    const props = this.props
    return ( 
      <div>
        App
        {/* 把命中的子路由再渲染一次 */}
        { renderRoutes(props.route.routes) }
      </div>
     );
  }
}
 
export default App;
