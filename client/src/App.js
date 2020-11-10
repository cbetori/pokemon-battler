import React, { useEffect, useState } from 'react'
import data from './data.json'
import CoverPage from './components/CoverPage/CoverPage'
import PokemonPicker from './components/Picker/PokemonPicker/PokemonPicker'
import Battle from './components/Battle/Battle'
import { useSelector, useDispatch } from 'react-redux'
import './app.css'

function App() {
	const dispatch = useDispatch()

	const handleStorage = () => {
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
	}

	const handleView = (id) => {
		if (id === 'picker')
			return viewSet(<PokemonPicker handleView={handleView} data={data} />)
		if (id === 'battle') return viewSet(<Battle handleView={handleView} />)
	}

	const [view, viewSet] = useState(<CoverPage handleView={handleView} />)

	useEffect(() => {
		handleStorage()
	}, [])

	return <div id='app'>{view}</div>
}

export default App
