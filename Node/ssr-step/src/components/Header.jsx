import React from 'react';

/*
* {tag: 'div}
* 浏览器：react-dom div
* 服务端：字符串的 html
*/
class Header extends React.Component {
  render(){
    return (
      <div>
        Hello Server
        <button onClick={this.buy}>buy</button>
      </div>
    )
  }
}