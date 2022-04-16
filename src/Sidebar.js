import React from 'react'
import './Sidebar.css'
import styled from 'styled-components'
import { MdSettings,MdChatBubble,MdVideoCameraBack,MdMusicNote } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { IoLogoGameControllerB } from "react-icons/io";
function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <h2>GameVerse</h2>
        </div>
        <div className="sidebar__icon__container">
          <div className="sidebar__icons">
            <GameButton><Gamepad size="35" /></GameButton>
            <UserButton><UserAlt size="29"/></UserButton>
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
  /* color: hsla(0, 0%, 100%, 0.75); */
  /* padding: 4px; */
`
const GameButton = styled.button`
  padding: 12px;
  border-radius: 50px ;
  background: hsl(244, 38%, 16%);
  color: hsla(0, 0%, 100%, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  /* box-shadow: -1px 7px 7px 2px hsla(244, 38%, 16%,50%); */
  &:hover{
    transform: scale(1.1);
    border-radius: 10px;
    transition: 0.3s ease-in-out;
    color:hsl(0, 0%, 100%);
  }
`
const UserButton = styled.button`
  padding: 10px;
  border-radius: 10em;
  background: hsl(244, 38%, 16%);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: hsla(0, 0%, 100%, 0.75);
  &:hover{
    transform: scale(1.1);
    border-radius: 10px;
    transition: 0.3s ease-in-out;
    color:hsl(0, 0%, 100%);
  }
`
const UserAlt = styled(BiUser)`
  padding: 4px;
  /* color: hsl(0, 0%, 100%); */
  `
const ChatButton = styled.button`
  padding: 12px;
  border-radius: 10em;
  background: hsl(233, 47%, 13%);
  display: flex;
  color: hsla(0, 0%, 100%, 0.75);
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover{
    border-radius: 10px;
    transform: scale(1.1);
    transition: 0.3s ease-in-out;
    color: hsl(0, 0%, 100%);
  }
`
const ChatBubble = styled(MdChatBubble)`
  /* color: pink; */
`
const SettingButton = styled.button`
  padding: 10px;
  border-radius: 10em;
  background: hsl(233, 47%, 13%);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: hsla(0, 0%, 100%, 0.75);
  &:hover{
    transform: scale(1.1);
    border-radius: 10px;
    transition: 0.3s ease-in-out;
    color: hsl(0, 0%, 100%);
  }
`
const Settings = styled(MdSettings)`
  /* color: #ec1035; */
`
const StreamButton = styled.button`
  padding: 10px;
  border-radius: 10em;
  background: hsl(233, 47%, 13%);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: hsla(0, 0%, 100%, 0.75);
  &:hover{
    border-radius: 10px;
    transform: scale(1.1);
    transition: 0.3s ease-in-out;
    color: hsl(0, 0%, 100%);
  }
`
const Stream = styled(MdVideoCameraBack)`
  /* color: #b3f716; */
`
const MusicButton = styled.button`
  padding: 10px;
  border-radius: 10em;
  background: hsl(233, 47%, 13%);
  display: flex;
  justify-content: center;
  color: hsla(0, 0%, 100%, 0.75);
  align-items: center;
  cursor: pointer;
  &:hover{
    border-radius: 10px;
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
    color: hsl(0, 0%, 100%);
  }
`
const Music = styled(MdMusicNote)`
  /* color: green; */
`
export default Sidebar