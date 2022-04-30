import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CardSection from './CardSection'
import MainHeader from './MainHeader'
import './MainScreen.css'
// import MainHeader from './MainHeader'
function MainScreen() {
  return (
    <div className="mainscreen">
      <Routes>
        <Route path='/' element={[<MainHeader/>,<CardSection/>]}>
        </Route>
        <Route path='/gameverse' element={[<MainHeader/>,<CardSection/>]}>
        </Route>
      </Routes>
    </div>
  )
}

export default MainScreen