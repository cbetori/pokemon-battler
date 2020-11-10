import React, { useEffect, useState } from 'react'
import './battlemodal.css'

function BattleModal(props) {
	const [continueBtn, continueBtnSet] = useState([])

	const handleBack = () => {
		document.getElementById(props.back).style.display = 'none'
	}

	useEffect(() => {
		if (props.action !== undefined) {
			continueBtnSet(
				<button
					id='modalcontinue'
					className='modalbtn'
					onClick={() => props.action()}
				>
					Yes
				</button>
			)
		}
	}, [])

	return (
		<div id='battlemodal'>
			<div id='modalform'>
				<div id='modalmesssage'>{props.message}</div>
				<div id='modalbtncontainer'>
					<button
						onClick={() => handleBack()}
						id='modalback'
						className='modalbtn'
					>
						Back
					</button>
					{continueBtn}
				</div>
			</div>
		</div>
	)
}

export default BattleModal
