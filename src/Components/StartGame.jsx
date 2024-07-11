import React from 'react'
import styled from "styled-components"
import { useState } from 'react'

function StartGame(props) {
  

  return (
    
    <Section>
        
        <div className="container">
          <img src="dice.avif" alt="dice image" />
        </div>
        <div className="content">
            <h1>Dice Game</h1>
        <Button onClick={props.toggle}>
            Play Game
        </Button>
        </div>
        
        
    </Section>  
    
  )
}

const Section=styled.section`
  display: flex;
  margin-top: 50px;
  margin-left: 400px;
  align-items: center;
  gap: 100px;
  .content {

    
  
    h1{
      font-size: 5rem;
      height: 50px;
    }
    

  }
  .content{
    gap: 50px;
  }

  
`

const Button=styled.button`
font-size:1.5em;
border:1px solid black;
border-radius: 3px;
background-color: black;
color: white;
width: 200px;
height: 50px;
cursor: pointer;
&:hover{
  background-color: white;
  color: black;
  transition: 0.4s background ease-in;
}


`

export default StartGame
