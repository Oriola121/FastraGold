import React from 'react'
import styled from 'styled-components'
import { RiDashboardFill } from "react-icons/ri";
import { LiaBookSolid } from "react-icons/lia";
import { MdOutlineInventory2, MdPeopleAlt } from "react-icons/md";
import { TiContacts } from "react-icons/ti";




function Clist() {
  return (
    <Cll>
      <Clwrap>
        <div className='reicon'><RiDashboardFill className='icon'/>
        <p className='menu'>Dashboard</p></div>
        <div className='reicon'><LiaBookSolid className='icon'/>
        <p className='menu'>Books</p></div>
        <div className='reicon'><MdOutlineInventory2 className='icon'/>
        <p className='menu'>Sell</p></div>
        <div className='reicon'><MdOutlineInventory2 className='icon'/>
        <p className='menu'>Source</p></div>
        <div className='reicon'><MdOutlineInventory2 className='icon'/>
        <p className='menu'>Stock</p></div>
        <div className='reicon'><MdPeopleAlt className='icon'/>
        <p className='menu'>Talent</p></div>
        <div className='reicon'><TiContacts className='icon'/>
        <p className='menu'>Contact</p></div>
      </Clwrap>
    </Cll>
  )
}

export default Clist

const Cll = styled.div`
width: 100%;
height: 100%;
`
const Clwrap = styled.div`
width: 90%;
height: 100%;
margin-top: -30px;

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