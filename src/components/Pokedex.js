import React, { Component } from 'react'
import { connect } from 'react-redux'
import ListChoices from './ListChoices'
import Score from './Score'

import { revealPokemon, fetchPokemon, setChoices, selectAnswer } from '../reducers/actions'

import * as PokeUtils from '../utils'

import './Pokedex.css'
import loading from '../img/loading.gif'
import empty_background from '../img/empty_background.png'


const img = new Image();
img.crossOrigin = "Anonymous";


class Pokedex extends Component {
  constructor(props) {
    super(props)

    this.answerHandler = this.answerHandler.bind(this)
  }

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

  toggleBlack() {
    this.props.dispatch(revealPokemon())
  }

  answerHandler (pokemon){
    if(!this.props.pokemon.ready) {
      return
    }
    if (pokemon === this.props.pokemon.pokemon ){
      // Correct
      console.log('correct')

      this.toggleBlack()
      this.props.dispatch(selectAnswer())
      setTimeout(()=> {
        this.toggleBlack()
        let choices = PokeUtils.chooseThreePokemon()
        let answer = Math.floor(Math.random() * 3)
        this.props.dispatch(setChoices(choices))
        this.props.dispatch(fetchPokemon(choices[answer]))
      }, 1000)
    }else {
      console.log('wrong!')
    }
  }

  render() {
    return (
      <div className="pokedex-wrapper">
        <canvas ref="canvas" className="pokedex-canvas" />
        {this.props.pokemon.isFetching ? (<img className={"loading"} src={loading}/>) : (null) }
        <img className="background" src={empty_background} width={960} height={540} />
        <ListChoices choices={this.props.pokemon.choices} onClick={this.answerHandler}/>
      </div>
    )
  }
}

Pokedex = connect((store) => {
  return {
    revealed: store.revealed,
    pokemon: store.pokemon
  }
})(Pokedex)

export default Pokedex
