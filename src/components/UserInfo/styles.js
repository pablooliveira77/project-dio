import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   flex-direction: row;
   margin-bottom: 24px;

`;

export const NameText = styled.div`
   font-family: 'Open Sans', sans-serif;
   font-style: normal;
   font-weight: 700;
   font-size: 18px;
   line-height: 25px;
   color: #fff;
`

export const UserPicture = styled.img`
   width: 32px;
   height: 32px;
   border-radius: 22px;
   border: 3px solid #fff;
   margin-right: 12px;
`;

export const Progress = styled.div`
   width: 180px;
   height: 6px;
   background: #fff;
   border-radius: 22px;
   position: relative;

   &::after {
      content: '';
      position: absolute;
      width: ${({percentual}) => percentual}%;
      height: 6px;
      top: 0;
      left: 0;
      background: #23dd74;
      border-radius: 3px;
   }
`;