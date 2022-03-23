import React, { useEffect, useState, useCallback } from 'react'
import PokemonSprite from './PokemonSprite/PokemonSprite'
import PickerHeader from './PickerHeader/PickerHeader'
import PickerFooter from './PickerFooter/PickerFooter'
import './pokemonpicker.css'
import { useDispatch } from 'react-redux'

function PokemonPicker(props) {
  const dispatch = useDispatch()
  const [pokemonList, pokemonListSet] = useState([])

  const createList = useCallback(array => {
    let result = []
    let genArray = []
    let gen = 1
    for (let data of array) {
      if (data.generation === gen) {
        genArray.push(<PokemonSprite key={data.num} data={data} />)
        continue
      }
      if (data.generation !== gen || data.num === array.length) {
        result.push(
          <div key={gen} id={gen} className='generation-list'>
            <div className='generation-title-wrapper'>
              <div className='generation-title'>{'Generation ' + gen}</div>
              <button
                id={gen}
                onClick={e => handleExpand('display' + e.target.id)}
                className='generation-btn'>
                Expand
              </button>
            </div>
            <div id={'display' + gen} className='generation-display'>
              {genArray}
            </div>
          </div>
        )
        gen++
        genArray = []
        genArray.push(<PokemonSprite key={data.num} data={data} />)
        continue
      }
    }
    return result
  }, [])

  const handleExpand = id => {
    if (
      document.getElementById(id).style.display === 'none' ||
      document.getElementById(id).style.display === ''
    ) {
      document.getElementById(id).style.display = 'inline-flex'
    } else {
      document.getElementById(id).style.display = 'none'
    }
  }

  useEffect(() => {
    pokemonListSet(createList(props.data))
  }, [props.data, createList])

  useEffect(() => {
    dispatch({ type: 'battle', value: false })
    dispatch({ type: 'player', value: 0 })
    dispatch({ type: 'gym', value: 7 })
    dispatch({ type: 'opponent', value: 0 })
    dispatch({ type: 'party-reset', value: [] })
  }, [dispatch])
  return (
    <div id='pokemonpicker'>
      <div id='pokemonpickerwrapper'>
        <PickerHeader />
        <div id='pokemonlistcontainer'>
          <div>{pokemonList}</div>
        </div>
        <PickerFooter handleView={props.handleView} />
      </div>
    </div>
  )
}

export default PokemonPicker
