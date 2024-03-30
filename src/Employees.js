import React from 'react'
import styled from 'styled-components'
import advatar from './image/avatar.png'
import advatar1 from './image/avatar (1).png'
import advatar2 from './image/avatar (2).png'
import advatar3 from './image/avatar (3).png'


function Employees() {
  return (
    <Empcont>
        <Empwrap>
            <div className='avat'>
                <img src={advatar} alt='avatar' className='avacon'/>
                <div className='avatext'><p className='cards'>Aslam Dhikrullahi</p>
                <p className='client'>admingi</p></div></div>
            <div className='avat'>
                <img src={advatar1} alt='avatar' className='avacon'/>
                <div className='avatext'><p className='cards'>Aslam Dhikrullahi</p>
                <p className='client'>client</p></div></div>
            <div className='avat'>
                <img src={advatar2} alt='avatar' className='avacon'/>
                <div className='avatext'><p className='cards'>Aslam Dhikrullahi</p>
                <p className='client'>employee</p></div></div>
            <div className='avat'>
                <img src={advatar3} alt='avatar' className='avacon'/>
                <div className='avatext'><p className='cards'>Aslam Dhikrullahi</p>
                <p className='client'>vendor</p></div></div>
        </Empwrap>
    </Empcont>
  )
}

export default Employees

const Empcont = styled.div`
width: 100%;
height: 100%;
// display: flex;
`
const Empwrap = styled.div`
width: 92%;
height: 100%;


width: 92%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-around;


.avat{
    width: 100%;
    height: 15px;
    background-color: #fff;
    // box-shadow: 1px 1px 1px grey;
    border-style: ridge;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    border-radius: 8px;

}

.avacon{
    width: 25px;
}

.cards{
    margin-left: 5px;
    font-size: 13px;
    font-family: poppins;
}

.avatext{
}

.client{
    margin-left: 5px;
    font-size: 10px;
    font-family: poppins; 
}
}
`