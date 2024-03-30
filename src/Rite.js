import React,{useState} from 'react'
import styled from 'styled-components'
import Clist from './Clist'
import fastra from './image/logo.png'
import { BsArrowLeft } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import {FaBars, FaTimes} from 'react-icons/fa'


function Rite() {
  const [click, setClick] = useState(true);

	const handClick = () => {
		setClick(!click)
	}
  return (
    <Rcont>
        <Rwrap>
            <Rhtop>
            <Rhead><div className='hedlog'><img src={fastra} alt="fastra_suite"/> 
            <BsArrowLeft /></div>
            <MobileIcon onClick={handClick}>{click? <FaBars/> : <FaTimes/>}</MobileIcon >
            </Rhead></Rhtop>

            <Rhold onClick={handClick} click={click}>
            <Rcent>
                <Centlist><Clist/></Centlist>
            </Rcent>
            <Rbutm><div className='reicon'><IoSettingsOutline className='icon'/>
            <p className='menu'>Setting</p></div></Rbutm></Rhold>
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
// display: flex;
// justify-content: center;
// align-items: center;
`
const MobileIcon = styled.div`
display: none;
@media screen and (max-width: 1075px){
display: block;
position: absolute;
right: 30px;
color: #fff;
top: 1rem;
}
`
const Rhtop = styled.div`
width: 100%;
height: 15%;
margin-bottom: 20px;
@media screen and (max-width: 1075px){
  margin-top: 10px;
  width: 20%;
`
const Rhead = styled.div`
width: 100%;
height: 100%;

.hedlog{
  display: flex;
  justify-content: space-between;
}
`
const Rhold = styled.div`
width: 100%;
height: 85%;
@media screen and (max-width: 1075px){
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 60px;
    background: linear-gradient(180deg, #09285D 0%, #020A17 100%);
    height: 70vh;
    width: 13%;
    right: ${({click}) => (click ?  '-100%' : 0)};
    transition: all 2s ease;
    z-index: 1;
  }
`
const Rcent = styled.div`
width: 100%;
height: 95%;

`
const Centlist = styled.div`

`
const Rbutm = styled.div`
width: 100%;
height: 5%;

@media screen and (max-width: 1075px){
  margin-top: -4rem;
}
.reicon{
  display: flex;
}

.menu{
  color: #FFFFFF;
  font-size: 15px;
}

.icon{
  font-size: 15px;
  margin-top: 18px;
  margin-right: 15px;
}
`