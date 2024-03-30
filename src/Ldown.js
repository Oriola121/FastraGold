import React from 'react'
import styled from 'styled-components'
import advatar from './image/avatar.png'
import Employees from './Employees'
import Contact from './Contact'

function Ldown() {
  return (
    <LDcont>
        <LDwrap>
          <LDtop>
            <img src={advatar} alt='avatar'/>
            <p className='admin'>Admimistrator</p>
          </LDtop>
          <LDmid>
            <Midhed>
              <p className='worker'>Employees</p></Midhed>
            <Employees/></LDmid>
          <LDend>
            <Endhed>
              <p>Contact</p></Endhed>
            <Contact/></LDend>
        </LDwrap>
    </LDcont>
  )
}

export default Ldown

const LDcont = styled.div`
width: 100%;
height: 100%;
display: flex;
`
const LDwrap = styled.div`
width: 90%;
height: 100%;
`
const LDtop = styled.div`
width: 100%;
height: 10%;
display: flex;
justify-content: space-between;
align-items: center;

.admin{
  width: 100%;
  height: 10%;
  margin-top: -10px;
  margin-left: 15px;
  font-family: Product Sans Medium;
  font-size: 20px;
  font-weight: 500;
  line-height: 38.82px;
  // text-align: left;
}
`
const LDmid = styled.div`
width: 100%;
height: 30%;
margin-top: -15px;
line-height: 10px;

`
const Midhed = styled.div`

`
const LDend = styled.div`
width: 100%;
height: 50%;
margin-top: 20px;
line-height: 8px;
`
const Endhed = styled.div`
margin-top: 30px;

`