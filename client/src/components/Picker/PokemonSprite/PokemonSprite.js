import { useDispatch } from 'react-redux'
import './pokemonsprite.css'

function PokemonSprite(props) {
	const dispatch = useDispatch()

	return (
		<div
			id={'sprite' + props.data.num}
			className='sprite'
			onClick={() => dispatch({ type: 'party', value: props.data })}
		>
			<img
				className='sprite-title'
				id={props.data.num}
				src={props.data.images.front}
			/>
			<div className='sprite-title'>{props.data.name}</div>
		</div>
	)
}

export default PokemonSprite
