import { combineReducers } from 'redux'
import data from '../data.json'
import gyms from '../gyms.json'

/*
party: 
	1. As the user clicks pokemon their information gets added to an array(background will also get darker)
	2. An additional click on the same pokemon will remove them for array(background will go back to original color)
player:
	1. Numerical value that identifies the current pokemon you are battling with


gymLeaders:
	1. Array of objects holding all gym leaders and their pokemon
	2. Pokemons health bar information is held here
gym:
	1. Numerical value that identifies the current gym you are battling
opponent:
	1. Numerical value that identifies the current gym leaders currently active pokemon

*/
// state = [data[5], data[0], data[75], data[148], data[86], data[25]],
export const party = (state = [], action) => {
	if (
		action.type === 'party' &&
		action.value !== undefined &&
		action.value !== null
	) {
		let result = [...state]
		let duplicates = true
		for (let i = 0; i < result.length; i++) {
			if (result[i].num === action.value.num) {
				duplicates = false
				result.splice(i, 1)
				document.getElementById(
					'sprite' + action.value.num
				).style.backgroundColor = 'inherit'
			}
		}
		if (duplicates && result.length < 6) {
			action.value.health = 1
			result.push(action.value)
			document.getElementById(
				'sprite' + action.value.num
			).style.backgroundColor = 'grey'
		}
		localStorage.setItem('party', JSON.stringify(result))
		return result
	}
	if (action.type === 'party-attacked' && action.value !== undefined) {
		const pokemon = action.value.pokemon
		const attack =
			pokemon.moves[Math.floor(Math.random() * pokemon.moves.length)]
		let result = [...state]
		let player = result[action.value.player]
		let attackPower = pokemon.stats.attack * (attack.power / 100)
		let attackDmg = (attackPower / player.stats.defense) * 10
		let attackResult = player.health - attackDmg / player.stats.hp
		player.health = attackResult <= 0 ? 0 : attackResult
		localStorage.setItem('party', JSON.stringify(result))
		return result
	}
	if (action.type === 'party-health' && action.value !== undefined) {
		let result = [...state]
		for (let i = 0; i < result.length; i++) {
			result[i].health = 1
		}
		localStorage.setItem('party', JSON.stringify(result))
		return result
	}
	if (action.type === 'party-storage' && action.value !== undefined) {
		return action.value
	}
	if (action.type === 'party-reset' && action.value !== undefined) {
		return []
	}

	return state
}

export const player = (state = 0, action) => {
	if (
		action.type === 'player' &&
		action.value !== undefined &&
		action.value !== null
	) {
		localStorage.setItem('player', JSON.stringify(action.value))
		return action.value
	}
	return state
}

export const gym = (state = 7, action) => {
	if (
		action.type === 'gym' &&
		action.value !== undefined &&
		action.value !== null
	) {
		state = state + 1
		if (state === 8) {
			state = 0
		}
		localStorage.setItem('gym', JSON.stringify(state))
		return state
	}
	if (
		action.type === 'gym-storage' &&
		action.value !== undefined &&
		action.value !== null
	) {
		if (action.value === 8) {
			action.value = 0
			localStorage.setItem('gym', JSON.stringify(state))
		}
		return action.value
	}
	return state
}

export const opponent = (state = 0, action) => {
	if (
		action.type === 'opponent' &&
		action.value !== undefined &&
		action.value !== null
	) {
		if (action.value === 0) {
			state = 0
		} else {
			state = state + 1
		}
		localStorage.setItem('opponent', JSON.stringify(state))
		return state
	}
	return state
}

export const gymLeaders = (state = gyms, action) => {
	if (
		action.type === 'gymleaders' &&
		action.value !== undefined &&
		action.value !== null
	) {
		let result = [...state]
		let attack = action.value.attack
		let pokemon = action.value.pokemon
		let opponent = result[action.value.gym].pokemon[action.value.opponent]
		let attackPower = pokemon.stats.attack * (attack.power / 100)
		let attackDmg = (attackPower / opponent.stats.defense) * 1000
		let attackResult = opponent.health - attackDmg / opponent.stats.hp

		opponent.health = attackResult <= 0 ? 0 : attackResult
		localStorage.setItem('gymleaders', JSON.stringify(result))
		return result
	}
	if (
		action.type === 'gymleaders-storage' &&
		action.value !== undefined &&
		action.value !== null
	) {
		return action.value
	}
	return state
}

export const battle = (state = false, action) => {
	if (
		action.type === 'battle' &&
		action.value !== undefined &&
		action.value !== null
	) {
		localStorage.setItem('battle', JSON.stringify(action.value))
		return action.value
	}
	return state
}

export const rootReducer = combineReducers({
	party,
	player,
	gym,
	opponent,
	gymLeaders,
	battle,
})
