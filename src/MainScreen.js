import React from 'react'
import CardSection from './CardSection'
import MainHeader from './MainHeader'
import './MainScreen.css'
// import MainHeader from './MainHeader'
function MainScreen() {
  return (
    <div className="mainscreen">
      <MainHeader/>
      <CardSection/>
      {/* <h2>Hello world</h2> */}
    </div>
  )
}

export default MainScreen