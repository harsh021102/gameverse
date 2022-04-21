import React from 'react'
import './Sidebar.css'
import styled from 'styled-components'
import { MdSettings,MdChatBubble,MdVideoCameraBack,MdMusicNote } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { IoLogoGameControllerB } from "react-icons/io";
import { keyframes } from 'styled-components';
function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <h2>GameVerse</h2>
        </div>
        <div className="sidebar__icon__container">
          <div className="sidebar__icons">
            <GameButton><GamepadAnimation size="35" /></GameButton>
            <UserButton>
              <UserAlt size="29"/>
              </UserButton>
            <ChatButton><ChatBubble size='30'/></ChatButton>
            <SettingButton><Settings size='30'/></SettingButton>
            <StreamButton><Stream size='30'/></StreamButton>
            <MusicButton><Music size='30'/></MusicButton>
          </div>
        </div>
    </div>
  )
}
const GamepadAnimation = styled(IoLogoGameControllerB)`
    /* from{
        filter: hue-rotate(0deg);
    }
    to{
        filter: hue-rotate(360deg);
    } */
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
  border: 3px solid hsl(244, 38%, 16%);
  box-shadow: 2px 2px 2px #00000080,
                10px 10px 12px #00000080,
                inset 2px 2px 12px #00000080,
                inset 2px 2px 12px #00000080,
                inset 2px 2px 12px #00000080,
                inset 2px 2px 12px #00000080;
                /* text-shadow:0px 0px 50px #0072ff,
                0px 0px 100px #0072ff,
                0px 0px 150px #0072ff,
                0px 0px 200px #0072ff;
  animation: animate 3s linear; */
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
  border: 3px solid hsl(244, 38%, 16%);
  box-shadow: 2px 2px 2px #00000080,
                10px 10px 12px #00000080,
                inset 2px 2px 12px #00000080,
                inset 2px 2px 12px #00000080,
                inset 2px 2px 12px #00000080,
                inset 2px 2px 12px #00000080;
  &:hover{
    transform: scale(1.1);
    border-radius: 10px;
    transition: 0.3s ease-in-out;
    color:hsl(0, 0%, 100%);
  }
`
const UserAlt = styled(BiUser)`
  padding: 4px;
  color: #fff;
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
  border: 3px solid hsl(244, 38%, 16%);
  box-shadow: 2px 2px 2px #00000080,
                    10px 10px 12px #00000080,
                    inset 2px 2px 12px #00000080,
                    inset 2px 2px 12px #00000080,
                    inset 2px 2px 12px #00000080,
                    inset 2px 2px 12px #00000080;
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
  border: 3px solid hsl(244, 38%, 16%);
  box-shadow: 2px 2px 2px #00000080,
                    10px 10px 12px #00000080,
                    inset 2px 2px 12px #00000080,
                    inset 2px 2px 12px #00000080,
                    inset 2px 2px 12px #00000080,
                    inset 2px 2px 12px #00000080;
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
  border: 3px solid hsl(244, 38%, 16%);
  box-shadow: 2px 2px 2px #00000080,
                    10px 10px 12px #00000080,
                    inset 2px 2px 12px #00000080,
                    inset 2px 2px 12px #00000080,
                    inset 2px 2px 12px #00000080,
                    inset 2px 2px 12px #00000080;
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
  border: 3px solid hsl(244, 38%, 16%);
  box-shadow: 2px 2px 2px #00000080,
                    10px 10px 12px #00000080,
                    inset 2px 2px 12px #00000080,
                    inset 2px 2px 12px #00000080,
                    inset 2px 2px 12px #00000080,
                    inset 2px 2px 12px #00000080;
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