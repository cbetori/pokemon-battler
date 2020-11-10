import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Header from './Header/Header'
import Opponent from './Opponent/Opponent'
import Player from './Player/Player'
import Footer from './Footer/Footer'
import './battle.css'

function Battle(props) {
	return (
		<div id='battle'>
			<Header handleView={props.handleView} />
			<div id='players'>
				<Opponent handleView={props.handleView} />
				<Player />
			</div>
			<div id='footer'>
				<Footer />
			</div>
		</div>
	)
}

export default Battle
