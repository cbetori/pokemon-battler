import React, { useEffect, useState } from 'react'
import './pickermodal.css'

function PickerModal(props) {
  const [continueBtn, continueBtnSet] = useState([])
  const handleBack = () => {
    document.getElementById(props.back).style.display = 'none'
  }

  useEffect(() => {
    if (props.continue !== undefined) {
      continueBtnSet(
        <button
          id='modalcontinue'
          className='modalbtn'
          onClick={() => {
            props.continue()
            document.getElementById(props.back).style.display = 'none'
          }}>
          Yes
        </button>
      )
    }
  }, [props])

  return (
    <div id='pickermodal'>
      <div id='modalform'>
        <div id='modalmesssage'>{props.message}</div>
        <div id='modalbtncontainer'>
          <button
            onClick={() => handleBack()}
            id='modalback'
            className='modalbtn'>
            Back
          </button>
          {continueBtn}
        </div>
      </div>
    </div>
  )
}

export default PickerModal
