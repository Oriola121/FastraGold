import React from 'react'
import styled from 'styled-components'
import Revstat from './Revstat'
import Hact from './Hact'

function Lhed() {
  return (
    <LHcont>
        <LHwrap>
          <LHtop>Overview</LHtop>
          <LHmid><Revstat/></LHmid>
          <LHend><Hact/></LHend>
        </LHwrap>
    </LHcont>
  )
}

export default Lhed

const LHcont = styled.div`
width: 100%;
height: 100%;
display: flex;
`
const LHwrap = styled.div`
width: 100%;
height: 100%; 
`
const LHtop = styled.div`
width: 100%;
height: 10%;
margin-top: 20px;
margin-left: 30px;
font-family: Product Sans Medium;
font-size: 32px;
font-weight: 500;
line-height: 38.82px;
text-align: left;
`
const LHmid = styled.div`
width: 100%;
height: 25%;
`
const LHend = styled.div`
width: 100%;
height: 60%;
// background-color: blue;
`