import React, { useEffect, useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PokemonList from '../PokemonList/PokemonList'
import './footer.css'

function Footer(props) {
	const dispatch = useDispatch()
	const party = useSelector((state) => state.party)
	const player = useSelector((state) => state.player)
	const gym = useSelector((state) => state.gymLeaders)
	const o = useSelector((state) => state.opponent)
	const g = useSelector((state) => state.gym)
	const [dialog, dialogSet] = useState('What would you like to do?')

	const attack = useCallback(
		(move, o) => {
			dispatch({
				type: 'gymleaders',
				value: { pokemon: party[player], attack: move, opponent: o, gym: g },
			})
			let attackDialog = dialog
			dialogSet('WAITING FOR OPPONENT TO ATTACK')
			document.getElementById('optionsbox').style.pointerEvents = 'none'
			setTimeout(() => {
				dispatch({
					type: 'party-attacked',
					value: { pokemon: gym[g].pokemon[o], player: player },
				})
				document.getElementById('optionsbox').style.pointerEvents = 'auto'
				dialogSet(attackDialog)
			}, 1000)
		},
		[dispatch, g, gym, party, player]
	)

	const handleFight = useCallback(
		(o) => {
			let result = []
			for (let i = 0; i < 4; i++) {
				result.push(
					<div
						key={party[player].attacks[i].name}
						onClick={() => attack(party[player].attacks[i], o)}
					>
						{party[player].attacks[i].name}
					</div>
				)
			}
			dialogSet(<div id='attacks'>{result}</div>)
			return <div id='attacks'>{result}</div>
		},
		[attack, party, player]
	)

	const handlePokemon = () => {
		document.getElementById('pokemonlist-container-none').id =
			'pokemonlist-container'
	}

	const handleBag = () => {
		dialogSet('SORRY THAT HAS NOT BEEN BUILT OUT YET, JUST ATTACK!')
	}

	const handleRun = () => {
		dialogSet("YOU CAN'T RUN FROM A GYM LEADER, THATS EMBARRASSING...")
	}

	useEffect(() => {
		console.log('footer')
		if (party[player].health <= 0) {
			let test = false
			for (let i = 0; i < party.length; i++) {
				if (party[i].health > 0) {
					test = true
				}
			}
			if (test) handlePokemon()
		} else {
			setTimeout(() => {
				handleFight(o)
			}, 500)
		}
	}, [party, o, player, handleFight])

	return (
		<div id='battlefooter'>
			<PokemonList />
			<div id='attackbox'>{dialog}</div>
			<div id='optionsbox'>
				<div className='optionsbox-line'>
					<div id='fight' onClick={() => handleFight(o)} className='option'>
						Fight
					</div>
					<div onClick={() => handleBag()} className='option'>
						Bag
					</div>
				</div>
				<div className='optionsbox-line'>
					<div onClick={() => handlePokemon()} className='option'>
						Pokemon
					</div>
					<div onClick={() => handleRun()} className='option'>
						Run
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
