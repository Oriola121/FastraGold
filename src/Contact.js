import React from 'react'
import styled from 'styled-components'
import advatar4 from './image/avatar (4).png'
import advatar5 from './image/avatar (5).png'
import advatar6 from './image/avatar (6).png'
import advatar7 from './image/avatar (7).png'
import advatar8 from './image/avatar (8).png'
import advatar9 from './image/avatar (9).png'
import advatar10 from './image/avatar (10).png'



function Contact() {
  return (
    <Concont>
        <Conwrap>
            <div className='avat'>
                <img src={advatar4} alt='avatar' className='avacon'/>
                <div className='avatext'><p className='cards'>Aslam Dhikrullahi</p>
                <p className='client'>vendor</p></div></div>
            <div className='avat'>
                <img src={advatar5} alt='avatar' className='avacon'/>
                <div className='avatext'><p className='cards'>Aslam Dhikrullahi</p>
                <p className='client'>client</p></div></div>
            <div className='avat'>
                <img src={advatar6} alt='avatar' className='avacon'/>
                <div className='avatext'><p className='cards'>Aslam Dhikrullahi</p>
                <p className='client'>employee</p></div></div>
            <div className='avat'>
                <img src={advatar7} alt='avatar' className='avacon'/>
                <div className='avatext'><p className='cards'>Aslam Dhikrullahi</p>
                <p className='client'>vendor</p></div></div>
            <div className='avat'>
                <img src={advatar8} alt='avatar' className='avacon'/>
                <div className='avatext'><p className='cards'>Aslam Dhikrullahi</p>
                <p className='client'>client</p></div></div>
            <div className='avat'>
                <img src={advatar9} alt='avatar' className='avacon'/>
                <div className='avatext'><p className='cards'>Aslam Dhikrullahi</p>
                <p className='client'>employee</p></div></div>
            <div className='avat'>
                <img src={advatar10} alt='avatar' className='avacon'/>
                <div className='avatext'><p className='cards'>Aslam Dhikrullahi</p>
                <p className='client'>vendor</p></div></div>
        </Conwrap>
    </Concont>
  )
}

export default Contact

const Concont = styled.div`
width: 100%;
height: 100%;
// display: flex;


`
const Conwrap = styled.div`
width: 92%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-around;

@media screen and (max-width: 1075px){
    margin: 20px;
}

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
`