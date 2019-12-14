import React from 'react';

class Header extends React.Component {
  componentWillMount() {
    console.log('component will')
  }
  buy() {
    console.log(12070105)
  }
  render () {
    return (
      <div>
        hello server yul
        <button onClick={this.buy}>buy</button>
      </div>
    )
  }
}

export default Header