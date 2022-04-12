import React from 'react'
import styled from 'styled-components'
import './MainHeader.css'
import { MdNotifications,MdLocationPin,MdPeople,MdSearch,MdHelpOutline,MdSend } from "react-icons/md";
function MainHeader() {
  return (
    <div className='chatHeader'>
        <div className="chatHeader__left">
          <StreamButton><Notifications size="25"/></StreamButton>
          <div className="chatHeader__search">
            <input placeholder="Search"/>
            <Search size="25"/>
          </div>
        </div>
    </div>
  )
}
const Search = styled(MdSearch)`
  padding: 5px;
  cursor: pointer;
`
const StreamButton = styled.button`
  padding: 10px;
  border-radius: 50px;
  background: transparent;
  /* color: black; */
  /* border: none; */
  &:hover{
    border-radius: 10px;
    transform: scale(1.1);
    transition: 0.3s ease-in-out;
  }
`
const Notifications = styled(MdNotifications)`
  /* color: white; */
`
export default MainHeader