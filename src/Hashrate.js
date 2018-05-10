import React, { Component } from 'react';
import { decorate, observable } from 'mobx'
import { observer, inject } from 'mobx-react'
import { Link } from 'react-router-dom'

let renderCounter = 0;

class Hashrate extends Component {
  
  onChange = (e) => {
      this.props.appState.text = e.target.value
  }

  render() {
    const { text } = this.props.appState;
    renderCounter++
    console.log(renderCounter)
    return (
      <div>
        Display: {text} <br />
        <input type="text" onChange={this.onChange} /> <br />

        {/* Counter: {counter} <br /> */}

        <Link to='/earnings/72'>
          Earnings
             </Link>

      </div>
    )
  }
}

export default inject("appState")(observer(Hashrate))