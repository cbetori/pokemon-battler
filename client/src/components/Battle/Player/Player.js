import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import HealthBar from '../HealthBar/HealthBar.js'
import './player.css'

function Player() {
	const party = useSelector((state) => state.party)
	const player = useSelector((state) => state.player)
	console.log(party)
	console.log(player)
	return (
		<div id='player'>
			<div id='playerpokemon'>
				<svg id='playerground'>
					<ellipse
						id='playergroundellipse'
						cx='215'
						cy='140'
						rx='200'
						ry='25'
					></ellipse>
				</svg>
				<div id='playerimagewrapper'>
					<img className='playersprite' src={party[player].images.back} />
				</div>
			</div>
			<HealthBar pokemon={party[player]} />
		</div>
	)
}

export default Player
