import React, { Component } from 'react'
import './Choice.css'
import * as PokeUtils from '../utils'

class Choice extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  
  static defaultProps = {
    ind: 1
  }

  handleClick() {
    this.props.onClick(this.props.ind)
  }

  render() {
    return (
      <div className="choice" onClick={this.handleClick}>
        <p>{PokeUtils.ind2name(this.props.ind-1)}</p>
      </div>
    )
  }
}

export default Choice
