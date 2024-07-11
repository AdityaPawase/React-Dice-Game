import React, { useState } from 'react'
import styled from "styled-components"
const NumberArr=[1,2,3,4,5,6];


function NumberSelector({num,setNum,error}) {
 
  return (
    
    <NumberSelectorContainer>
      <p className="error">{error}</p>
       <div className="flex">
      {NumberArr.map((val,i)=>(
        <Box 
        isSelected={num==val}
        onClick={()=>setNum(val)}
        key={i}
        >
        {val}
        </Box>
      ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  )
}
const NumberSelectorContainer=styled.div`
display: flex;
flex-direction: column;
align-items: end;
.flex{
  display: flex;
  gap: 15px;

}
p{
  font-size: 24px;
  font-weight: 900;
}
.error{
  color: red;
}
  
`
const Box=styled.div`
    cursor: pointer;
    place-items: center;
    display: grid;
    font-size: 24px;
    font-weight: 700;
    height: 72px;
    width: 72px;
    border: 1px solid black;
    background-color: ${(props)=>(props.isSelected?"black":"white")};
    color: ${(props)=>(props.isSelected?"white":"black")};

   
`

export default NumberSelector
