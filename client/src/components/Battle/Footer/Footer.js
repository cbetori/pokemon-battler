import React, { useEffect, useState } from 'react'
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

	const handleSelection = (id, o) => {
		if (id === 'fight') return handleFight(o)
		if (id === 'bag') return handleBag()
		if (id === 'run') return handleRun()
		if (id === 'pokemon') return handlePokemon()
	}

	const handleFight = (o) => {
		let result = []
		for (let i = 0; i < 4; i++) {
			result.push(
				<div
					key={party[player].attacks[i]}
					onClick={() => attack(party[player].attacks[i], o)}
				>
					{party[player].attacks[i].name}
				</div>
			)
		}
		dialogSet(<div id='attacks'>{result}</div>)
		return <div>result</div>
	}

	const handleBag = () => {
		dialogSet('SORRY THAT HAS NOT BEEN BUILT OUT YET, JUST ATTACK!')
	}

	const handleRun = () => {
		dialogSet("YOU CAN'T RUN FROM A GYM LEADER, THATS EMBARRASSING...")
	}

	const handlePokemon = () => {
		document.getElementById('pokemonlist-container-none').id =
			'pokemonlist-container'
	}

	const attack = (move, o) => {
		dispatch({
			type: 'gymleaders',
			value: { pokemon: party[player], attack: move, opponent: o, gym: g },
		})

		dialogSet('WAITING FOR OPPONENT TO ATTACK')
		document.getElementById('optionsbox').style.pointerEvents = 'none'
		setTimeout(() => {
			dispatch({
				type: 'party-attacked',
				value: { pokemon: gym[g].pokemon[o], player: player },
			})
			document.getElementById('optionsbox').style.pointerEvents = 'auto'
		}, 500)
	}

	useEffect(() => {
		setTimeout(() => {
			handleSelection('fight', o)
		}, 500)
	}, [o])

	useEffect(() => {
		handleSelection('fight', o)
	}, [player])

	useEffect(() => {
		if (party[player].health <= 0) {
			handleSelection('pokemon')
		} else {
			setTimeout(() => {
				handleSelection('fight', o)
			}, 500)
		}
	}, [party])

	return (
		<div id='battlefooter'>
			<PokemonList />
			<div id='attackbox'>{dialog}</div>
			<div id='optionsbox'>
				<div className='optionsbox-line'>
					<div
						id='fight'
						onClick={() => handleSelection('fight')}
						className='option'
					>
						Fight
					</div>
					<div onClick={() => handleSelection('bag')} className='option'>
						Bag
					</div>
				</div>
				<div className='optionsbox-line'>
					<div onClick={() => handleSelection('pokemon')} className='option'>
						Pokemon
					</div>
					<div onClick={() => handleSelection('run')} className='option'>
						Run
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
