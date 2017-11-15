import React, { Component } from 'react'
import {connect} from 'redux'
import './Choice.css'
import * as PokeUtils from '../utils'

class Choice extends Component {

  render() {
    return (
      <div className="choice" onClick={() => this.props.onClick(this.props.ind)}>
        <p>{PokeUtils.ind2name(this.props.ind-1)}</p>
      </div>
    )
  }
}

export default Choice
