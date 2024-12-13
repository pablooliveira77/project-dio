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

export const TitleHighLigth = styled.span`
   color: #e41050;
`

export const TextContent = styled.p`
   font-family: 'Open Sans', sans-serif;
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   width: 420px;
   margin-bottom: 20px;
   line-height: 22px;
   color: #fff;
`