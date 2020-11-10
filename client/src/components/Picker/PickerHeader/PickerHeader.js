import { useSelector } from 'react-redux'
import './pickerheader.css'

function PickerHeader(props) {
	const countDown = useSelector((state) => state.party)
	return (
		<div id='pickerheader'>
			{'Select ' + (6 - countDown.length) + ' Pokemon'}
		</div>
	)
}

export default PickerHeader
