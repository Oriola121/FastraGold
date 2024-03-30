import React from 'react'
import styled from 'styled-components'
import Clist from './Clist'
import fastra from './image/logo.png'

function Rite() {
  return (
    <Rcont>
        <Rwrap>
            <Rhead><img src={fastra} alt="fastra_suite"/></Rhead>
            <Rcent>
                <Centlist><Clist/></Centlist>
            </Rcent>
            <Rbutm>
                Setting
            </Rbutm>
        </Rwrap>
    </Rcont>
  )
}

export default Rite
const Rcont = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`
const Rwrap = styled.div`
width: 70%;
height: 90%;
color: #fff;
`
const Rhead = styled.div`
width: 100%;
height: 15%;
`
const Rcent = styled.div`
width: 100%;
height: 80%;
`
const Rbutm = styled.div`
width: 100%;
height: 5%;
`
const Centlist = styled.div`

`