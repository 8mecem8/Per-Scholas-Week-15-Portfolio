import { styled } from '@linaria/react';



export const MainContent = styled.div`
    grid-column: 5/20;
    grid-row: 1/9;

    display: grid;
    grid-template-columns: repeat(20,5%);
    grid-template-rows: repeat(12,5%);
`



export const Content1 = styled.div`
    grid-column: 1/20;
    grid-row: 2/4;

    color: var(--main-font-color);

    > h1 { font-size: 32px;-webkit-text-stroke: 3px;letter-spacing: 11px;}
    > p { font-size: 130px;-webkit-text-stroke: 2px;letter-spacing: -2px;font-family: system-ui;font-weight: bold;line-height: 102px;}
    > * { font-family: var(--main-font);}
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
    > p { font-size: 19px;letter-spacing: 2px;}


    > details
    {
        list-style: none;
        cursor: pointer;
        user-select: none;
        padding: 41px;

        > p:first-letter {padding-left:5%}
        > p { font-size: 28px;letter-spacing: 2px;}
    }
`





export const Content3 = styled.div`

`