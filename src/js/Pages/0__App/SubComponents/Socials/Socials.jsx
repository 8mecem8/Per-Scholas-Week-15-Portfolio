//import packages/libraries...
import React from 'react'
import { Link } from "react-router-dom";


//import Styles...
import { SocialContainer } from './Socials.style';


//import Local files...
import githublogo from "../../../../../assets/github.png"
import twitterlogo from "../../../../../assets/twitternobg.png"
import linkedinlogo from "../../../../../assets/Linkedinsq.png"


function Socials() {
  return (
    <SocialContainer>
      <Link target="_blank" to={'https://github.com/8mecem8'}><img src={githublogo} alt='GitHub logo'/></Link>
      <Link target="_blank" to={'https://twitter.com/MeceM7'}><img src={twitterlogo} alt='twitter logo'/></Link>
      <Link target="_blank" to={'https://www.linkedin.com/in/cem-mehmet-onal-6034a5207/'}><img src={linkedinlogo} alt='linkedin logo'/></Link>
    </SocialContainer>
  )
}

export default Socials