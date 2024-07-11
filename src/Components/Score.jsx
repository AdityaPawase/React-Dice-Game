import React from 'react'
import styled from "styled-components"
function Score({update}) {

  
  return (
    <Scorecontainer>
      <h1>{update}</h1>
      <p>Total Score</p>
    </Scorecontainer>
  )
}
const Scorecontainer=styled.div`
  
   
  
    h1{
        margin-top: 0px;
        align-items: center;
        margin-left: 30px;
        font-size: 5rem;
    }
    p{
        position: absolute;
        font-weight: 900;
        font-size: 24px;
        margin-top: -50px;
    }
`
export default Score
