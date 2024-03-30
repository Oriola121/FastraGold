import React from 'react'
import styled from 'styled-components'
import Clist from './Clist'
import fastra from './image/logo.png'
import { BsArrowLeft } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";


function Rite() {
  return (
    <Rcont>
        <Rwrap>
            <Rhead><div className='hedlog'><img src={fastra} alt="fastra_suite"/> 
            <BsArrowLeft /></div></Rhead>
            <Rcent>
                <Centlist><Clist/></Centlist>
            </Rcent>
            <Rbutm><div className='reicon'><IoSettingsOutline className='icon'/>
            <p className='menu'>Setting</p></div></Rbutm>
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

.hedlog{
  display: flex;
  justify-content: space-between;
}
`
const Rcent = styled.div`
width: 100%;
height: 80%;
`
const Centlist = styled.div`

`
const Rbutm = styled.div`
width: 100%;
height: 5%;

.reicon{
  display: flex;
}

.menu{
  color: #FFFFFF;
  font-size: 15px;
  // margin: 50px 30px;
  // line-height: 3em;
}

.icon{
  font-size: 15px;
  margin-top: 18px;
  // margin-left: 20px;
  margin-right: 15px;
}
`