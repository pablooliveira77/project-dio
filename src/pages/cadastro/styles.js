import styled from "styled-components";

export const Container = styled.main`
   width: 100%;
   max-width: 80%;
   margin: 0 auto;
   margin-top: 2rem;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
`

export const Title = styled.h2`
   font-family: 'Open Sans', sans-serif;
   font-style: normal;
   font-weight: 700;
   font-size: 32px;
   width: 320px;
   margin-bottom: 20px;
   line-height: 42px;
   color: #fff;
`

export const TitleLogin = styled.p`
   font-family: 'Open Sans', sans-serif;
   font-style: normal;
   font-weight: 700;
   font-size: 32px;
   margin-bottom: 20px;
   line-height: 42px;
`

export const SubLogin = styled.p`
   font-family: 'Open Sans', sans-serif;
   font-style: normal;
   font-weight: 400;
   font-size: 18px;
   margin-bottom: 35px;
   line-height: 25px;
`

export const LoginText = styled.p`
   font-family: 'Open Sans', sans-serif;
   font-style: normal;
   font-weight: 700;
   font-size: 14px;
   line-height: 19.07px;
   color: #fff;

   a {
      color: #23DD7A;
   }
`

export const CriarText = styled.p`
   font-family: 'Open Sans', sans-serif;
   font-style: normal;
   font-weight: 400;
   font-size: 18px;
   line-height: 24.51px;
   width: 300px;
   margin-top: 20px;
   color: #fff;
`

export const Wrapper = styled.div`
   max-width: 300px;
`

export const Column = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
   gap: 20px;
`