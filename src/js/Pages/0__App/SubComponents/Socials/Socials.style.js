import { styled } from '@linaria/react';




export const SocialContainer = styled.div`
    position: fixed;
    left:50px;
    bottom: 70px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    > a
    {
        > img{width:30px;}


        :hover
        {
            filter: contrast(0.5);
        }
    }
`