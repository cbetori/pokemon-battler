import React from 'react'
import { useSelector } from 'react-redux'
import './pickerheader.css'

function PickerHeader() {
  const countDown = useSelector(state => state.party)
  return (
    <div id='pickerheader'>
      {'Select ' + (6 - countDown.length) + ' Pokemon'}
    </div>
  )
}

export default PickerHeader
