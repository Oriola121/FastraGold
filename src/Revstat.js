import React from 'react'
import styled from 'styled-components'
import reve from './image/revenue.png'
import tts from './image/sales.png'
import emp from './image/employees.png'
import clt from './image/clients.png'

function Revstat() {
  return (
    <Revcont>
        <Revwrap>
            <img src={reve} alt="revenues" className='rev_stat'/>
            <img src={tts} alt="total sales" className='rev_stat'/>
            <img src={emp} alt="employees" className='rev_stat'/>
            <img src={clt} alt="clients" className='rev_stat'/>
        </Revwrap>
    </Revcont>
  )
}

export default Revstat

const Revcont = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: flex-start;
align-items: center;

`
const Revwrap = styled.div`
width: 90%;
height: 100%;
display: flex;
justify-content: space-around;

@media screen and (max-width: 1075px){
  display: flex;
  flex-wrap: wrap;
}
.rev_stat{
    height: 130px;

    
@media screen and (max-width: 1075px){
  width: 130px;
 margin: 10px;
}
}
`