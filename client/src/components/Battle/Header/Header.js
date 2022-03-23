import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import BattleModal from '../BattleModal/BattleModal'
import Brock from '../../../images/gym-heads/Brock.png'
import Misty from '../../../images/gym-heads/Misty.png'
import Surge from '../../../images/gym-heads/Lt._Surge.png'
import Erika from '../../../images/gym-heads/Erika.png'
import Koga from '../../../images/gym-heads/Koga.png'
import Sabrina from '../../../images/gym-heads/Sabrina.png'
import Blaine from '../../../images/gym-heads/Blaine.png'
import Giovanni from '../../../images/gym-heads/Giovanni.png'
import './header.css'

function Header(props) {
	const g = useSelector((state) => state.gym)

	const handleCurrentGym = (g) => {
		if (g > 0) {
			document.getElementById('gym-' + (g - 1)).style.filter = 'blur(3px)'
		}
		document.getElementById('gym-' + g).style.filter = 'blur(0px)'
	}

	const handleBack = () => {
		props.handleView('picker')
	}

	useEffect(() => {
		handleCurrentGym(g)
	}, [g])

	return (
		<div id='header'>
			<div id='battle-modal-hidden'>
				<BattleModal
					back='battle-modal-hidden'
					message='Going back will erase all of your progress. Are you sure?'
					action={handleBack}
				/>
			</div>
			<div
				id='back'
				onClick={() =>
					(document.getElementById('battle-modal-hidden').style.display =
						'flex')
				}
			>
				<i id='arrow' />
				Back
			</div>
			<div id='header-images'>
				<div className='head-wrapper'>
					<img id='gym-0' alt='gym-0' className='gym-head' src={Brock} />
				</div>
				<div className='head-wrapper'>
					<img id='gym-1' alt='gym-1' className='gym-head' src={Misty} />
				</div>
				<div className='head-wrapper'>
					<img id='gym-2' alt='gym-2' className='gym-head' src={Surge} />
				</div>
				<div className='head-wrapper'>
					<img id='gym-3' alt='gym-3' className='gym-head' src={Erika} />
				</div>
				<div className='head-wrapper'>
					<img id='gym-4' alt='gym-4' className='gym-head' src={Koga} />
				</div>
				<div className='head-wrapper'>
					<img id='gym-5' alt='gym-5' className='gym-head' src={Sabrina} />
				</div>
				<div className='head-wrapper'>
					<img id='gym-6' alt='gym-6' className='gym-head' src={Blaine} />
				</div>
				<div className='head-wrapper'>
					<img id='gym-7' alt='gym-7' className='gym-head' src={Giovanni} />
				</div>
			</div>
		</div>
	)
}

export default Header
