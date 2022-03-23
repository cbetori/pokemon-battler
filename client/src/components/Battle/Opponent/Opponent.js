import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HealthBar from '../HealthBar/HealthBar.js'
import './opponent.css'
import Brock from '../../../images/gym-leaders/Brock.png'
import Misty from '../../../images/gym-leaders/Misty.png'
import Surge from '../../../images/gym-leaders/Lt._Surge.png'
import Blaine from '../../../images/gym-leaders/Blaine.png'
import Erika from '../../../images/gym-leaders/Erika.png'
import Koga from '../../../images/gym-leaders/Koga.png'
import Giovanni from '../../../images/gym-leaders/Giovanni.png'
import Sabrina from '../../../images/gym-leaders/Sabrina.png'

function Opponent(props) {
  const dispatch = useDispatch()
  const gyms = useSelector(state => state.gymLeaders)
  const g = useSelector(state => state.gym)
  const o = useSelector(state => state.opponent)

  const leader = [Brock, Misty, Surge, Erika, Koga, Sabrina, Blaine, Giovanni]

  const handleLeaderAnmation = () => {
    document.getElementById('pokemon-img-opp').id = 'pokemon-img-opp-none'
    document.getElementById('gym-leader-none').id = 'gym-leader'
    setTimeout(() => {
      document.getElementById('pokemon-img-opp-none').id = 'pokemon-img-opp'
      document.getElementById('gym-leader').id = 'gym-leader-none'
    }, 2900)
  }

  const updatePokemon = useCallback(
    (gyms, o, g) => {
      if (o !== gyms[g].pokemon.length - 1 && gyms[g].pokemon[o].health === 0) {
        dispatch({
          type: 'opponent',
          value: 1,
        })
      }
    },
    [dispatch]
  )

  const updateGym = useCallback(
    (gyms, o, g) => {
      if (gyms[g].pokemon[o].health === 0 && o === gyms[g].pokemon.length - 1) {
        if (g === gyms.length - 1) {
          console.log('reset')
          props.handleView('picker')
        } else {
          dispatch({
            type: 'gym',
            value: g,
          })
          dispatch({
            type: 'opponent',
            value: 0,
          })
          dispatch({
            type: 'party-health',
            value: 0,
          })
          handleLeaderAnmation()
        }
      }
    },
    [dispatch, props]
  )

  useEffect(() => {
    handleLeaderAnmation()
  }, [])

  useEffect(() => {
    updatePokemon(gyms, o, g)
    updateGym(gyms, o, g)
  }, [gyms, o, g, updatePokemon, updateGym])

  return (
    <div id='opponent'>
      <HealthBar pokemon={gyms[g].pokemon[o]} />
      <div id='opponentpokemon'>
        <div id='opponentimagewrapper'>
          <img
            className='opponentsprite'
            id='pokemon-img-opp'
            alt='enemies pokemon'
            src={gyms[g].pokemon[o].images}
          />
          <img
            alt='enemies gym leader'
            className='gym-leader'
            id='gym-leader-none'
            src={leader[g]}
          />
        </div>
        <svg id='opponentground'>
          <ellipse
            id='opponentgroundellipse'
            cx='235'
            cy='25'
            rx='200'
            ry='25'></ellipse>
        </svg>
      </div>
    </div>
  )
}

export default Opponent
