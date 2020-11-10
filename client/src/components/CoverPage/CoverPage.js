import logo from '../../images/logo.svg'
import './coverpage.css'

function CoverPage(props) {
	const handleClick = () => {
		document.getElementById('coverpage').id = 'coverpage-animation'
		setTimeout(() => {
			document.getElementById('coverpage-animation').id = 'coverpage-none'
			props.handleView('picker')
		}, 950)
	}
	return (
		<div id='coverpage'>
			<img id='logo' src={logo} alt='logo'></img>
			<button id='coverpage-btn' onClick={() => handleClick()}>
				START
			</button>
		</div>
	)
}

export default CoverPage
