import React from 'react'
import './Sidebar.css'
import styled from 'styled-components'
import { MdSettings,MdChatBubble,MdVideoCameraBack,MdMusicNote } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { IoLogoGameControllerB } from "react-icons/io";
import { Button } from 'semantic-ui-react';
// import { Button } from '@mui/material';
function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <h2>GameVerse</h2>
        </div>
        <div className="sidebar__icon__container">
          <div className="sidebar__icons">
            <GameButton><Gamepad size="34" /></GameButton>
            <UserButton><UserAlt size="30"/></UserButton>
            <ChatButton><ChatBubble size='30'/></ChatButton>
            <SettingButton><Settings size='30'/></SettingButton>
            <StreamButton><Stream size='30'/></StreamButton>
            <MusicButton><Music size='30'/></MusicButton>
          </div>
        </div>
    </div>
  )
}
const Gamepad = styled(IoLogoGameControllerB)`
  color: white;
  `
const GameButton = styled.button`
  padding: 10px;
  border-radius: 10em;
  background: transparent;
  /* border: 3px solid gray; */
  color: white;
  /* border: none; */
  &:hover{
    /* border: 3px solid white; */
    transform: scale(1.1);
    transition: 0.3s ease-in-out;
  }
`
const UserButton = styled.button`
  padding: 10px;
  border-radius: 10em;
  background: transparent;
  /* border: 3px solid gray; */
  /* color: white; */
  &:hover{
    transform: scale(1.1);
    transition: 0.3s ease-in-out;
  }
`
const UserAlt = styled(BiUser)`
  padding: 4px;
  /* border-radius: 10em; */
  /* border: 3px solid gray; */
  display: flex;
  justify-content: center;
  color: blue;
  `
const ChatButton = styled.button`
  padding: 10px;
  border-radius: 10em;
  background: transparent;
  /* border: 3px solid gray; */
  /* color: white; */
  &:hover{
    transform: scale(1.1);
    transition: 0.3s ease-in-out;
  }
`
const ChatBubble = styled(MdChatBubble)`
  color: pink;
`
const SettingButton = styled.button`
  padding: 10px;
  border-radius: 10em;
  background: transparent;
  /* border: 3px solid gray; */
  /* color: white; */
  &:hover{
    transform: scale(1.1);
    transition: 0.3s ease-in-out;
  }
`
const Settings = styled(MdSettings)`
  color: #ec1035;
`
const StreamButton = styled.button`
  padding: 10px;
  border-radius: 10em;
  background: transparent;
  /* border: 3px solid gray; */
  /* color: white; */
  &:hover{
    transform: scale(1.1);
    transition: 0.3s ease-in-out;
  }
`
const Stream = styled(MdVideoCameraBack)`
  color: #b3f716;
`
const MusicButton = styled.button`
  padding: 10px;
  border-radius: 10em;
  background: transparent;
  /* border: 3px solid gray; */
  /* color: white; */
  &:hover{
    transform: scale(1.1);
    transition: 0.3s ease-in-out;
  }
`
const Music = styled(MdMusicNote)`
  color: #e416f7;
`
export default Sidebar