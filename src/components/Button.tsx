import React, {ReactChildren, ReactNode, useState} from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  font-size: 23px;
  font-weight: 600;
  background-color: white;
  color: MediumVioletRed;
  border: 3px solid MediumVioletRed;
  padding: 10px 30px;
  box-shadow: -3px 4px 0px 0px MediumVioletRed;
  transition: transform 0.1s ease, box-shadow 0.1s ease;
  
  &:hover {
    transform: translateY(2px);
    box-shadow: 0px 0px 0px 0px MediumVioletRed;
  }
  
  &:active {
    outline: none;
    color: white;
    background-color: MediumVioletRed;
  }
  
  &:focus {
    outline: none;
  }
`

function Button({ children, ...others }: { children?: ReactNode } & any) {
    const [mouseIn, setMouseIn] = useState(false);
    return <div
        {...others}
        onMouseEnter={()=>setMouseIn(true)}
        onMouseLeave={()=>setMouseIn(false)}
    ><ButtonWrapper>
        {mouseIn? '>' : " "} {children}  
    </ButtonWrapper></div>
}

export default Button;