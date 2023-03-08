//import packages/libraries...
import React from 'react'
import { Link } from "react-router-dom";


//import Styles...
import { styled } from '@linaria/react';
import { MainContent, Content1, Content2, Content3 } from './MainSections';


function MainSections() {


    return (
        <>
            <MainContent>

                <Content1>
                    <h1>CEM .M. ONAL</h1>
                    <p>Software Engineer {`</>`} Web Developer</p>
                </Content1>

                <Content2>
                    <h2>Welcome</h2>
                    <h3> Hi there 👋 I'm Cem,</h3>

                    <i>Who</i>
                    <p>As a software engineer, my current technical focus is primarily on front-end development.<br /></p>
                    <p>I also develop full-stack applications using the MERN and PERN stacks, as being versatile and effective developer, my aim to deliver robust solutions that meet client needs or align with the objectives of the team I'm working with. </p>

                    <i>How</i>
                    <p>I am passionate about creating visually stunning interfaces that provide an intuitive and seamless user experience.
                        My attention to detail ensures that every pixel is perfect and every interaction is seamless, resulting in software that is both beautiful and functional.</p>


                    <p>I am interested in innovative ventures that align with my interests and expertise that challenge me to expand my skillset and knowledge in quality project development.</p>
                    <i>When</i>
                    <p>Please feel free to contact with me 🌟</p>

                    <details>
                        <summary>So want to learn More About Me</summary>
                        <p>
                            My journey into engineering started at a young age when I first dabbled in web development with simple HTML, CSS, JS, and Flash in the 90s. However, it wasn't until later that I fully discovered my passion for coding.</p>

                            <p>I initially studied computer engineering in university, but I didn't feel like I was learning in a creative way, so I ended up switching my major to a management-related area. However, my love for web projects never stopped, and I continued working on various projects using HTML, CSS, JS, and Joomla.</p>

                            <p>At our family company, I also gained experience setting up the local network, server, database, and other important tasks. Over the last 5 years, I started to get more involved with web application projects, and I began searching and experimenting with small projects.</p>

                            <p>Around 2018, I decided to fully commit to learning full-stack web development, and I realized that I wanted to become a software engineer. 
                            As I learned the basics of software engineering through online resources, I quickly discovered that the possibilities to create solutions to modern problems are limitless.
                            I'm excited to be a software engineer because I have a passion for creativity and innovation, and I believe that technology can be used to solve many of the world's most pressing problems.</p> 
                            
                            <p>As a software engineer, I am constantly learning and growing, and I am eager to continue exploring new technologies and finding creative ways to solve complex problems.

                            Ultimately, my journey into engineering has been a long and winding road, but I am grateful for all of the experiences and skills that I have gained along the way. I am excited to bring my unique perspective and passion for creativity to a role as a software engineer.</p>
                    </details>
                </Content2>

                <Content3>

                </Content3>


            </MainContent>

        </>
    )
}

export default MainSections