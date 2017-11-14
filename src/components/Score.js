import React, {Component} from 'react'
import './Score.css'

class Score extends Component {
  render() {
    return (
      <div className="score">
        <h1 className="right score-text">Right: {this.props.right}</h1>
        <h1 className="wrong score-text">Wrong: {this.props.wrong}</h1>
      </div>
    )
  }
}

export default Score
