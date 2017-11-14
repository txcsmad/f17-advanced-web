import React, { Component } from 'react'
import './ListChoices.css'
import Choice from './Choice'

class ListChoices extends Component {
  static defaultProps = {
    choices: [1, 2, 3]
  }

  render() {
    const choices = this.props.choices.map((pkmn, id) => {
      return <Choice ind={pkmn} key={id} onClick={this.props.onClick}/>
    })
    return (
      <div className="list-choices" >
        {choices}
      </div>
    )
  }
}

export default ListChoices
