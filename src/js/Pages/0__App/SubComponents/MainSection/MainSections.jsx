//import packages/libraries...
import React from 'react'
import { Link } from "react-router-dom";


//import Styles...
import { styled } from '@linaria/react';
import { MainContent, Content1, Content2, Content3 } from './MainSections.Style';


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
                    <p>Please feel free to contact with me  <a href="mailto:mehmetcemonal@gmail.com">📨</a></p>

                    <details>
                        <summary>So want to learn <span>More About Me 👇</span></summary>
                        <p>
                            My journey into Software Engineering started at a young age when I first dabbled in web development with simple HTML, CSS, JS, and Flash in the 90s. However, it wasn't until later that I fully discovered my passion for coding.</p>

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

                <figure>
                    <img src="https://user-images.githubusercontent.com/42888722/163483137-c590c2eb-096a-4bde-bb12-16b1a592be79.png" alt="Elephant at sunset"/>
                    <figcaption style={{background:'#54ca9cba'}}> 
                    <h3> React E-commerce Web Application </h3>
                        <p>Tech Stack: React.js , Material Ui , Redux , MongoDB, Firebase</p>
                        <p>
                            <Link target="_blank"  to={'https://github.com/8mecem8/React-JS-eCommerce-Web-App'} > 🔗 Github Link <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#fff" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg></Link>    
                            <Link target="_blank"  to={'https://pazaar-react.onrender.com/'} > 🔗 Live Project Link  <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#fff" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg></Link>
                        </p>
                    </figcaption>
                </figure>
                
                <figure>
                    <img src="https://user-images.githubusercontent.com/42888722/146282168-fb71a348-f984-40e6-88d8-880bec7f6aac.png" alt="Elephant at sunset"/>
                    <figcaption style={{background:'rgb(255 153 0 / 57%)'}}>
                        <h3><span style={{color: '#093cf7'}}>Mini Amazon like</span> E-commerce Web Application</h3>
                        <p>Tech Stack: Vanilla Javascript(ES6 Methods), mongo db</p>
                        <p>
                            <Link target="_blank"  to={'https://github.com/8mecem8/Vanilla-Js-eCommerce'} > 🔗 Github Link <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#fff" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg></Link>    
                            <Link target="_blank"  to={'https://buyozon-ecommerce-app.onrender.com/'} > 🔗 Live Project Link  <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#fff" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg></Link>
                        </p>
                    </figcaption>
                </figure>
                <figure>
                    <img src="https://user-images.githubusercontent.com/42888722/215924622-f2666e60-8ca0-4af8-81f7-3636e3c6e0a9.png" alt="Elephant at sunset"/>
                    <figcaption style={{background:'#cca347c2'}}> 
                    <h3> <span style={{color: 'rgb(247 224 9)',left:'145px',top:'-1px'}}>Mini</span> Product Store 🛒</h3>
                        <p>Tech Stack: React.js , Material Ui , Redux , MongoDB, Firebase</p>
                        <p>
                            <Link target="_blank"  to={'https://github.com/8mecem8/React-JS-eCommerce-Web-App'} > 🔗 Github Link <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#fff" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg></Link>    
                            <Link target="_blank"  to={'https://pazaar-react.onrender.com/'} > 🔗 Live Project Link  <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#fff" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg></Link>
                        </p>
                    </figcaption>
                </figure>
                <figure>
                    <img src="https://user-images.githubusercontent.com/42888722/215939908-3b7c115b-8a79-4fea-99c2-bc8c87bdd375.png" alt="Elephant at sunset"/>
                    <figcaption>
                    <h3> 🌒 Space Battle Web Game🌠 </h3>
                        <p>Tech Stack: HTML, JavaScript(ES6 Methods) , Css</p>
                        <p>
                            <Link target="_blank"  to={'https://github.com/8mecem8/SpaceBattleAssignment'} > 🔗 Github Link <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#fff" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg></Link>    
                            <Link target="_blank"  to={'https://8mecem8.github.io/SpaceBattleAssignment/'} > 🔗 Live Project Link  <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#fff" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg></Link>
                        </p>
                    </figcaption>
                </figure>

                </Content3>


            </MainContent>

        </>
    )
}

export default MainSections