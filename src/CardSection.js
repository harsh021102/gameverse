import React from 'react'
import CardContainer from './card-components/CardContainer'
import {Routes,Route} from 'react-router-dom'
import './CardSection.css'
function CardSection() {
  return (
    <div className='card__section'>
      <CardContainer/>
    </div>
  )
}

export default CardSection