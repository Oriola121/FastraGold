import React from 'react'
import styled from 'styled-components'
import Rite from './Rite'
import Left from './Left'

function Main() {
  return (
    <Maincont>
        <Ritey><Rite/></Ritey>
        <Lefty><Left/></Lefty>
    </Maincont>
  )
}

export default Main

const Maincont = styled.div`
width: 100%;
height: 100vh;
display: flex;

@media screen and (max-width: 1075px){
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  // flex-wrap: wrap;
  }
`
const Ritey = styled.div`
background: linear-gradient(180deg, #09285D 0%, #020A17 100%);
width: 240px;
height: 100%;
gap: 0px;
opacity: 0px;

@media screen and (max-width: 1075px){
  background: linear-gradient(180deg, #09285D 0%, #020A17 100%);
  width: 100%;
  height: 100%;
  }
`
const Lefty = styled.div`
background: #FAFAFA;
width: 1440px;
height: 100%;
top: -513px;
left: -720px;
gap: 64px;
opacity: 0px;

@media screen and (max-width: 1075px){
  width: 100%;
  height: 100%;
  }
`