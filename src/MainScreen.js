import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CardSection from './CardSection'
import MainHeader from './MainHeader'
import MemoryGame from './games/memory-game/MemoryGame'
import './MainScreen.css'
import Test from './Test'
// import MainHeader from './MainHeader'
function MainScreen() {
  return (
    <div className="mainscreen">
      <MainHeader/>
      <Routes>
        <Route path="/" element={<CardSection/>}/>
        <Route path="gameverse" element={<CardSection/>}/>
        <Route path="memory-game" element={<MemoryGame/>}></Route>
      </Routes>
{/* 
      </Route>
        <Route path='/gameverse' element={<CardSection/>}>
        </Route> */}
        {/* <Route path='/memory-game' element={<MemoryGame/>}/> */}
    </div>
  )
}

export default MainScreen