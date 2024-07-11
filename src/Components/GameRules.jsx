import React from 'react'
import styled from 'styled-components'

function GameRules() {
  return (
   <Rules>
        <h2>How To Play Dice Game</h2>
        <div className="info">
            <p>select any number</p>
            <p>click on roll dice button</p>
            <p>after clicking on button if selected number and dice is same you will get same points as dice have</p>
            <p>if you get wrong number then 2 points will be diducted</p>
        </div>
   </Rules>
  )
}
 const Rules=styled.div`
 height: 250px;
 width: 600px;
 border: 1px solid black;
 background-color: #fbf1f1;
 margin-left: 400px;
 border-radius: 10px;
 h2{
  margin-left: 150px;
 }
 .info{
    font-weight: 800;
    margin-left: 8px;
 }

    
 `




export default GameRules
