import React, { useEffect, useState, useCallback } from 'react'
import data from './data.json'
import CoverPage from './components/CoverPage/CoverPage'
import PokemonPicker from './components/PokemonPicker/PokemonPicker'
import PickerModal from './components/PokemonPicker/PickerModal/PickerModal'
import Battle from './components/Battle/Battle'
import { useDispatch } from 'react-redux'
import './app.css'

function App() {
  const dispatch = useDispatch()

  const handleView = useCallback(id => {
    if (id === 'picker')
      return viewSet(<PokemonPicker handleView={handleView} data={data} />)
    if (id === 'battle') return viewSet(<Battle handleView={handleView} />)
  }, [])

  const [view, viewSet] = useState(<CoverPage handleView={handleView} />)

  const handleBattle = () => {
    handleView('battle')
    dispatch({ type: 'battle', value: true })
  }

  useEffect(() => {
    const battle = localStorage.getItem('battle')

    if (JSON.parse(battle) === true) {
      const party = localStorage.getItem('party')
      const player = localStorage.getItem('player')
      const gym = localStorage.getItem('gym')
      const opponent = localStorage.getItem('opponent')
      const gymleaders = localStorage.getItem('gymleaders')
      dispatch({ type: 'party-storage', value: JSON.parse(party) })
      dispatch({ type: 'player', value: JSON.parse(player) })
      dispatch({ type: 'gym-storage', value: JSON.parse(gym) })
      dispatch({ type: 'opponent', value: JSON.parse(opponent) })
      dispatch({ type: 'gymleaders-storag', value: JSON.parse(gymleaders) })
      viewSet(<Battle handleView={handleView} />)
    }
  }, [dispatch, handleView])

  return (
    <div id={'root'}>
      {view}
      <div id='modalnopokemon'>
        <PickerModal
          back='modalnopokemon'
          message='You need to have at least one Pokemon in your part.'
        />
      </div>
      <div id='modalsubsix'>
        <PickerModal
          back='modalsubsix'
          message='You have less than six Pokemon in your party. Are you sure you want to continue?'
          continue={handleBattle}
        />
      </div>
    </div>
  )
}

export default App
