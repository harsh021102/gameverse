import React from 'react'
import styled from 'styled-components'
import './MainHeader.css'
import { MdNotifications,MdArrowDropDown,MdSearch } from "react-icons/md";
import { Avatar } from '@material-ui/core';
import profile from './images/profile.jpg'
function MainHeader() {
  return (
    <div className='chatHeader'>
      <div className="chatHeader__left">
        <div className="chatHeader__search">
          <input placeholder="Search"/>
          <Search size="28"/>
        </div>
        <NotiButton><Notifications size="28"/></NotiButton>
      </div>
      <div className="chatHeader__right">
        <div className="sidebar__profile">
          <Profile >
            <ProAvatar src={profile} style={{ height: '35px', width: '35px' }} />
            <h3>@harsh_160101</h3>
            <MdArrowDropDown size="25"/>
          </Profile>
        </div>
      </div>
    </div>
  )
}
const Profile = styled.button`
  /* padding: 10px; */
  padding: 0 10px;
  border-radius: 10em;
  background: hsl(233, 47%, 13%);
  display: flex;
  justify-content: center;
  color: hsla(0, 0%, 100%, 0.75);
  align-items: center;
  gap: 0.8rem;
  &:hover{
    /* border-radius: 10px; */
    /* transform: scale(1.1); */
    background-color: hsl(233, 47%, 19%);
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    color: hsl(0, 0%, 100%);
  }
`
const Search = styled(MdSearch)`
  padding: 5px;
  cursor: pointer;
`
const NotiButton = styled.button`
  padding: 10px;
  border-radius: 50px;
  background: hsl(233, 47%, 10%);
  display: flex;
  justify-content: center;
  align-items: center;
  color: hsla(0, 0%, 100%, 0.75);
  &:hover{
    background-color: hsl(233, 47%, 19%);
    cursor: pointer;
    transform: scale(1.1);
    transition: 0.3s ease-in-out;
    color: hsl(0, 0%, 100%);
  }
`
const Notifications = styled(MdNotifications)`
  /* color: white; */
`
const ProAvatar = styled(Avatar)`
  &:hover{
    cursor: pointer;
    transform: scale(1.1);
    transition: 0.3s ease-in-out;
  }
`
export default MainHeader