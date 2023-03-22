//import packages/libraries...
import React from 'react'
import { Link } from "react-router-dom";


//import Styles...
import { styled } from '@linaria/react';


const LogoContainer = styled.div`
    display: flex;
    place-items: center;
    position: fixed;
    left:50px;
    top: 70px;
    user-select: none;

    @media (max-width: 505px)
      {
        left:20px;
        top: 40px;
      }
    
`

const Logoo = styled.p`
    color: var(--main-font-color);
    font-family: var(--main-font-gokturk);
    font-size: 35px;
    letter-spacing: -7px;

`


function Logo() 
{
  return (
    <>
        <LogoContainer>
            <Link to={'/'} onClick={window.scrollTo(0,0)}><Logoo>MeceM</Logoo></Link>
        </LogoContainer>
    </>
  )
}

export default Logo