//import packages/libraries...
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useNavigate } from "react-router-dom";


//import Styles...
import { Container,MainContent,Content1} from './index.style'


//import Local files...
import useMainStore from '../../Stores/0__MainStore.jsx'
import Logo from './SubComponents/Logo';
import MainSections from './SubComponents/MainSection/MainSections.jsx';
import Socials from './SubComponents/Socials/Socials';

function App() {

  const navigate = useNavigate();

  /*------------------------  App`s Main Store ------------------------*/
  let {user,setUser} = useMainStore((state) => {return state}) //get all properties from center State





  return (
    <>
      <Container>
        <Logo />

        <MainSections />
        

        <Socials />
      </Container>
    </>
  )
}

export default App