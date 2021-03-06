import React from 'react'
import './SubCard.css'
import styled from 'styled-components'
import { IoLogoGameControllerB } from "react-icons/io";
import chess from '../images/chess.jpg'
import wordle from '../images/wordle.png'
import twozerofoureight from '../images/2048.jpg'
import { Link, useNavigate } from 'react-router-dom';
function SubCard() {
    const navigate = useNavigate();
  return (
    <div className="outer__container">
      <section>
          <div className="container__1">
              <div className="card">
                  <div className="imgBx">
                      <img src={chess}></img>
                  </div>
                  <div className="content__sub">
                      <div className="contentBx">
                          <h3>Memory Game<br/> <span>Train your muscle memory</span> </h3>
                      </div>
                      <ul className="sci">
                        <li>
                            <GameButton onClick={()=>navigate("/memory-game")}><Gamepad size="35" /></GameButton>
                        </li>
                      </ul>
                  </div>
              </div>
              <div className="card">
                  <div className="imgBx">
                      <img src={twozerofoureight}></img>
                  </div>
                  <div className="content__sub">
                      <div className="contentBx">
                          <h3>Someone Famouse<br/> <span>Creative Designer</span> </h3>
                      </div>
                      <ul className="sci">
                          <li><a href="#"><GameButton><Gamepad size="35" /></GameButton></a></li>
                      </ul>
                  </div>
              </div>
              <div className="card">
                  <div className="imgBx">
                      <img src={wordle}></img>
                  </div>
                  <div className="content__sub">
                      <div className="contentBx">
                          <h3>Someone Famouse<br/> <span>Creative Designer</span> </h3>
                      </div>
                      <ul className="sci">
                          <li><a href="#"><GameButton><Gamepad size="35" /></GameButton></a></li>
                      </ul>
                  </div>
              </div>
          </div>
      </section>
    </div>
  )
}
const Gamepad = styled(IoLogoGameControllerB)`
  /* color: hsla(0, 0%, 100%, 0.75); */
  /* padding: 4px; */
`
const GameButton = styled.button`
  /* padding: 12px; */
  width: 100px;
  height: 50px;
  border-radius: 10px ;
  background: hsl(244, 38%, 16%);
  color: hsla(0, 0%, 100%, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 3px solid hsl(244, 38%, 16%);
  &:hover{
    transform: scale(1.1);
    transition: 0.3s ease-in-out;
    color: white;
  }
`
export default SubCard