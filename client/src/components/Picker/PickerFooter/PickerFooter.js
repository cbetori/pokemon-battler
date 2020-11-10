import './pickerfooter.css'
import { useSelector, useDispatch } from 'react-redux'
import PickerModal from '../PickerModal/PickerModal'

function PickerFooter(props) {
	const dispatch = useDispatch()
	const party = useSelector((state) => state.party)

	const handleClick = (count) => {
		if (count === 0) return handleNoPokemon()
		if (count < 6) return handleSubSix()
		return handleBattle()
	}

	const handleNoPokemon = () => {
		document.getElementById('modalnopokemon').style.display = 'block'
	}

	const handleSubSix = () => {
		document.getElementById('modalsubsix').style.display = 'block'
	}

	const handleBattle = () => {
		// dispatch({ type: 'player', value: party[0] })
		props.handleView('battle')
		dispatch({ type: 'battle', value: true })
		// document.getElementById('pokemonpicker').style.display = 'none'
		// document.getElementById('battle').style.display = 'flex'
	}

	return (
		<div id='pickerfooter'>
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
			<button onClick={() => handleClick(party.length)} id='footerbtn'>
				Next
			</button>
		</div>
	)
}

export default PickerFooter
