import { styled } from '@linaria/react';



export const MainContent = styled.div`
    grid-column: 5/20;
    grid-row: 1/9;

    user-select: none;
    display: grid;
    grid-template-columns: repeat(20,5%);
    grid-template-rows: repeat(18,7%); //increase to make page smaller
`



export const Content1 = styled.div`
    grid-column: 1/20;
    grid-row: 2/4;

    color: var(--main-font-color);

    > * { font-family: var(--main-font);}
    > h1 {
         font-size: 32px;-webkit-text-stroke: 3px;letter-spacing: 11px;

         @media (max-width: 780px){font-size: 25px;-webkit-text-stroke: 1px; }
         @media (max-width: 603px){font-size: 20px;-webkit-text-stroke: 1px; }
         @media (max-width: 480px){font-size: 10px;-webkit-text-stroke: 0px; }
        }
    > p {
         font-size: 130px;-webkit-text-stroke: 2px;letter-spacing: -2px;font-family: system-ui;font-weight: bold;line-height: 102px;
        
         @media (max-width: 780px){font-size: 100px;-webkit-text-stroke: 1px; }
         @media (max-width: 603px){font-size: 80px;-webkit-text-stroke: 1px; }
         @media (max-width: 480px){font-size: 70px;-webkit-text-stroke: 1px;line-height: 60px;}
        }
    `


export const Content2 = styled.div`
    grid-column: 1/20;
    grid-row: 6/8;
    
    color: var(--main-font-color);
    line-height: 40px;
    
    > i {padding-left:2%;padding-top:50px;color: #4a5c6c;}
    > h2 { font-size: 60px;-webkit-text-stroke: 3px;letter-spacing: 11px;padding:15px 0px;}
    > h3 { font-size: 40px;padding:10px 0px;padding-left:5%}
    > p:first-letter {padding-left:5%}
    > p { font-size: 19px;letter-spacing: 2px; > a {font-size: 45px;}}


    > details
    {
        list-style: none;
        user-select: none;
        padding: 51px;
        z-index: 50;
        background: #151e1e;
        position: absolute;
        right: 186px;
        border-radius: 85px;
        transition: 1s;
        
        
        > p:first-letter {padding-left:5%}
        > p { font-size: 20px;letter-spacing: 1px;}
        >summary{text-align: end;cursor: pointer;z-index: 50;;background: #151e1e; border-radius: 85px;padding:10px;   > span{font-size:25px;color: turquoise !important;}}

        &[open]{right:0}
    }
`





export const Content3 = styled.div`

    grid-column: 1/20;
    grid-row: 12/15;
    position: relative;
    color: var(--main-font-color);

     
    > figure
    {
        width: 49%;
        height: 48%;
        transition: 1s;
        display: flex;
        position: relative;
        place-items: center;

      

        > img{width: 100%;height:100%;object-fit:cover;transition:1s;border-radius: 20px;transition:1s;box-shadow: 0px 0px 1px 5px #d2dfde36;}

        // will change these hard-coded positons
        &:nth-child(1){position:absolute;top:0;left:0}
        &:nth-child(2){position:absolute;top:0;right:0;}
        &:nth-child(3){position:absolute;bottom:0;left:0;}
        &:nth-child(4){position:absolute;bottom:0;right:0}


        > figcaption
        {
            opacity:0;
            position: absolute;
            left: 0;
            right: 0;
            text-align: center;
            background: #5c626847;
            transition:2s;
            z-index:49;
            border-radius: 8px;
            padding: 30px 0;
            backdrop-filter: blur(8px);
            
            font-weight: 900;
            color: white;
            background: rgb(92 98 104 / 59%);
            text-shadow: 0 0 6px black;

            > h3{font-size: 40px;position: relative;padding: 10px 0px; > span{font-size:20px;height: 100%;position: absolute;left: 10px;top: -15px; color: #e6d800;text-shadow: 0 0 1px black;}}
            > p{font-size: 20px;display: flex;justify-content: space-evenly;padding: 6px 0; > a{place-content: center;display: flex;}}
        }


        
        :hover figcaption
        {
            opacity: 1;
        }

        :hover img
        {
            scale: 1.1;
            z-index: 2;
            box-shadow: 0px 0px 1px 5px turquoise;
        }
    }


`

export const Infotext = styled.p`
    position: absolute;
    top: -103px;
    left: 0;
    font-size: 50px;
    font-size: 60px;
    -webkit-text-stroke: 3px;
    -webkit-letter-spacing: 11px;
    -moz-letter-spacing: 11px;
    -ms-letter-spacing: 11px;
    letter-spacing: 11px;
`


export const Footer = styled.div`
    grid-column: 1/20;
    grid-row: 16/19;
    position: relative;
`