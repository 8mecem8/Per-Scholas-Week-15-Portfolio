import { styled } from '@linaria/react';




export const SocialContainer = styled.div`
    position: fixed;
    left:50px;
    bottom: 70px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    user-select: none;

    > a
    {
        > img{width:30px;}


        :hover
        {
            filter: contrast(0.5);
        }
    }





    @media (max-width: 505px)
      {
        left:20px;
        bottom: 40px;
      }
`