import React from 'react'
import './pickerfooter.css'
import { useSelector, useDispatch } from 'react-redux'

function PickerFooter(props) {
  const dispatch = useDispatch()
  const party = useSelector(state => state.party)

  const handleClick = count => {
    if (count === 0) return handleNoPokemon()
    if (count < 6) return handleSubSix()
    return handleBattle()
  }

  const handleNoPokemon = () => {
    document.getElementById('modalnopokemon').style.display = 'block'
  }

  const handleSubSix = () => {
    document.getElementById('modalsubsix').style.display = 'block'
  }

  const handleBattle = () => {
    props.handleView('battle')
    dispatch({ type: 'battle', value: true })
  }

  return (
    <div id='pickerfooter'>
      <button onClick={() => handleClick(party.length)} id='footerbtn'>
        Next
      </button>
    </div>
  )
}

export default PickerFooter
