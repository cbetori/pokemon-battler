import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import HealthBar from '../HealthBar/HealthBar'
import './pokemonlist.css'

function PokemonList() {
	const dispatch = useDispatch()
	const party = useSelector((state) => state.party)
	const [list, listSet] = useState([])

	const hideView = () => {
		document.getElementById('pokemonlist-container').id =
			'pokemonlist-container-none'
	}

	const handlePokemonChange = (i) => {
		if (party[i].health !== 0) {
			dispatch({ type: 'player', value: i })
			hideView()
		}
	}

	const handleList = () => {
		let result = []
		for (let i = 0; i < party.length; i++) {
			result.push(
				<div
					onClick={() => {
						handlePokemonChange(i)
					}}
					className='pokemonlist-item'
				>
					<img
						className='pokemonlist-img'
						key={i}
						src={party[i].images.front}
					/>
					<div className='pokemonlist-name'>{party[i].name}</div>
					<div className='pokemonhealthbgr-list'>
						<div
							className='pokemonhealth-list'
							style={{ width: party[i].health * 100 + '%' }}
						/>
					</div>
				</div>
			)
		}
		return result
	}

	useEffect(() => {
		listSet(handleList())
	}, [])

	useEffect(() => {
		listSet(handleList())
	}, [party])

	return (
		<div id='pokemonlist-container-none'>
			<div id='pokemonlist'>
				<div>{list}</div>
				{/* <button onClick={() => hideView()} id='pokemonlist-close'>
					Close
				</button> */}
			</div>
		</div>
	)
}

export default PokemonList
