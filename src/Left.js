import React from 'react'
import styled from 'styled-components'
import Lhed from './Lhed'
import Ldown from './Ldown'


function Left() {
  return (
    <Lcont>
        <Lwrap>
            <Lhead><Lhed/></Lhead>
            <Lbutm><Ldown/></Lbutm>
        </Lwrap>
    </Lcont>
    )
}

export default Left

const Lcont = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`
const Lwrap = styled.div`
width: 95%;
height: 95%;
display: flex;
justify-content: space-between;

@media screen and (max-width: 1075px){
    display: flex;
    flex-direction: column;
}
`
const Lhead = styled.div`
width: 80%;
height: 100%;
// background-color: green;
`
const Lbutm = styled.div`
width: 20%;
height: 100%;


@media screen and (max-width: 1075px){
    width: 100%;
    height: 100%;
}
`