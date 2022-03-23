import React, { useEffect, useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './pokemonlist.css'

function PokemonList() {
	const dispatch = useDispatch()
	const party = useSelector((state) => state.party)
	const [list, listSet] = useState([])

	const hideView = () => {
		document.getElementById('pokemonlist-container').id =
			'pokemonlist-container-none'
	}

	const handlePokemonChange = useCallback(
		(i, party) => {
			if (party[i].health !== 0) {
				dispatch({ type: 'player', value: i })
				hideView()
			}
		},
		[dispatch]
	)

	const handleList = useCallback(
		(party) => {
			let result = []
			for (let i = 0; i < party.length; i++) {
				result.push(
					<div
						key={'pokemonlist' + i}
						onClick={() => {
							handlePokemonChange(i, party)
						}}
						className='pokemonlist-item'
					>
						<img
							alt='pokemon'
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
		},
		[handlePokemonChange]
	)

	useEffect(() => {
		console.log('list')
		listSet(handleList(party))
	}, [party, handleList])

	return (
		<div id='pokemonlist-container-none'>
			<div id='pokemonlist'>
				<div>{list}</div>
			</div>
		</div>
	)
}

export default PokemonList
