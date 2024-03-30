import React from 'react'
import styled from 'styled-components'

function Hact() {
  return (
    <Hactcont>
        <Hactwrap>
            <h3>Latest Activities</h3>
            <p className='card'>Aslam Dhikrullahi created a new invoice INV001.</p>
            <p className='card'>Aslam Dhikrullahi applied for leave</p>
            <p className='card'>24 Desktop Computers were shipped to Client (Aslam Dhikrullahi).</p>
            <p className='card'>Aslam Dhikrullahi added 32 Laptops to the inventory.</p>
            <p className='card'>You assigned admin privileges to Aslam Dhikrullahi.</p>
            <p className='card'>Aslam Dhikrullahi created a new invoice INV001.</p>
        </Hactwrap>
    </Hactcont>
  )
}

export default Hact

const Hactcont = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
margin-top: -25px;
`
const Hactwrap = styled.div`
width: 92%;
height: 100%;


.card{
    font-size: 13px;
    font-family: poppins;
    width: 80%;
    height: 15px;
    background-color: #fff;
    // box-shadow: 1px 1px 1px grey;
    border-style: ridge;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    border-radius: 8px;
`