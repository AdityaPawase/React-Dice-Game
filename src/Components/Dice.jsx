
import { useState } from "react";
import styled from "styled-components"

function Dice({diceimg,rollDice,resetScore,showRule,btnName}) {
  
   
  
  
   
  
  return (
    <Dicesection>
           <div >
             <img  src={diceimg} alt="image" />
           </div>
           <div>
           <button onClick={rollDice}>
              Roll A Dice
            </button>
            <button className="second" onClick={resetScore}>
              Reset Score
            </button>
            <button className="third" onClick={showRule}>
              {btnName}
            </button>
           </div>
           
           
    
      
    </Dicesection>
  )
}
const Dicesection=styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: -15px;


button{
  font-size:1.3em;
border:1px solid black;
border-radius: 3px;
background-color: black;
color: white;
width: 230px;
height: 40px;
margin: 30px;
cursor: pointer;
&:hover{
  background-color: white;
  color: black;
  transition: 0.4s background ease-in;
}
}

    
`

export default Dice
