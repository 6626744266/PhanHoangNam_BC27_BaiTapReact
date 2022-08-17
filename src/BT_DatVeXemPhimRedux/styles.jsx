import React from 'react'
import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
background-size:cover;
background-image: url('./img/thumb-1920-378546.jpg')  ;
min-height:100vh;
top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;


`


export const Wrapper2 = styled.div`
position:fixed;
top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    background:#000;
    opacity:.85

`

export const Screen = styled.div`
border-bottom: 40px solid orange;
      border-left: 25px solid transparent;
      border-right: 25px solid transparent;
      height: 0;
      width: 100%;
      filter: drop-shadow(0px 16px 13px white);
      `

export const Square = styled.div`
width: 40px;
  height:40px;
  background: red;
  border-radius:5px;

  ${(props) => props.variant === 'selected' && css`
  background:#6bee6c
  
  
  
  `}

  ${(props) => props.variant === 'available' && css`
  background:#efeeee
  
  
  
  `}
`

export const Button = styled.button`


  
  background:${({ isSelected }) => (isSelected ? '#6bee6c' : "white")};
width:35px;
padding:0px 5px;
height:30px;
border-radius:5px;


${(props) => props.isBooked === true && css`
background-color:red;
padding:0px 5px;
border-radius:5px;

pointer-events:none;
  
  `}

  
${(props) => props.variant === "book" && css`
padding:0px 5px;
border-radius:5px;
width:90px;
margin-top:10px;
  
  
  `}

    `

