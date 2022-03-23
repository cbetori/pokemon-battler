import React from 'react'
import { useDispatch } from 'react-redux'
import './pokemonsprite.css'

function PokemonSprite(props) {
  const dispatch = useDispatch()

  return (
    <div
      key={'sprite' + props.data.num}
      id={'sprite' + props.data.num}
      className='sprite'
      onClick={() => dispatch({ type: 'party', value: props.data })}>
      <img
        alt='pokemon'
        className='sprite-title'
        id={props.data.num}
        src={props.data.images.front}
      />
      <div className='sprite-title'>{props.data.name}</div>
    </div>
  )
}

export default PokemonSprite
