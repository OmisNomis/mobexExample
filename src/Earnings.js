import React, { Component } from 'react';
import { decorate, observable } from 'mobx'
import { observer, inject } from 'mobx-react'

const Earnings = inject("appState") (
  observer(
    class Earnings extends Component {
      render() {
        const { text, onChange, counter } = this.props.appState;
        return (
          <div>
            Display: {text} <br />
            <input type="text" onChange={onChange} /> <br />

            Counter: {counter}

          </div>
        )
      }
    }
  )
)

export default Earnings