import React, { Component } from 'react'
import { connect } from 'react-redux'
import { revealPokemon, fetchPokemon, setChoices, selectAnswer } from '../reducers/actions'

import * as PokeUtils from '../utils'

import ListChoices from './ListChoices'

import './Pokedex.css'
import loading from '../img/loading.gif'
import empty_background from '../img/empty_background_pixellated.png'


const img = new Image();
img.crossOrigin = "Anonymous";


class Pokedex extends Component {

  componentDidMount() {
    this.props.dispatch(fetchPokemon(1))
  }

  componentDidUpdate() {
    img.src = this.props.pokemon.image
    console.log(this.props)
    this.updateCanvas()
  }

  drawLoadedImage() {
    if (!this.props.pokemon.isFetching ){
      const canvas = this.refs.canvas
      const context = canvas.getContext("2d")
      context.drawImage(img, 30, 20, 128, 128)
      let imageData = context.getImageData(0,0, canvas.width,  canvas.height)
      let data = imageData.data
      let blackOut = () => {
         for (var i = 0; i < data.length; i += 4) {
             if(data[i + 3] != 0){
                 data[i] = 0
                 data[i + 1] = 59
                 data[i + 2] = 111
             }
          }
          context.putImageData(imageData, 0, 0)
       }

      if (!this.props.revealed) {
         blackOut()
      }
    }
  }

  updateCanvas() {
    const canvas = this.refs.canvas
    const context = canvas.getContext("2d")
    context.clearRect(0, 0, canvas.width, canvas.height)
    img.onload = this.drawLoadedImage.bind(this)
  }

  render() {
    return (
      <div className="pokedex-wrapper">
        <canvas ref="canvas" className="pokedex-canvas" />
        {this.props.pokemon.isFetching ? (<img className={"loading"} src={loading}/>) : (null) }
        <img className="background" src={empty_background} width={960} height={540} />
        <ListChoices choices={this.props.pokemon.choices} onClick={this.props.selectAnswer}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    revealed: state.revealed,
    pokemon: state.pokemon
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleBlack: () => dispatch(revealPokemon()),
    selectAnswer: (ans) => dispatch(selectAnswer(ans)),
    dispatch: dispatch
  }
}

Pokedex = connect(mapStateToProps, mapDispatchToProps)(Pokedex)

export default Pokedex
