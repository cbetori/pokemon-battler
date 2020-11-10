import React from 'react'
import './healthbar.css'

function HealthBar(props) {
	return (
		<div id='pokemondetail'>
			<div id='pokemontitle'>
				<div id='pokemonname'>{props.pokemon.name}</div>
				<div id='pokemonlvl'>Lv50</div>
			</div>
			<div id='pokemonhealthbgr'>
				<div
					id='pokemonhealth'
					style={{ width: props.pokemon.health * 100 + '%' }}
				/>
			</div>
		</div>
	)
}

export default HealthBar
