import styled, { keyframes } from 'styled-components';
import React from 'react';

export const StyledLink = styled.td`
  color:  #0000EE;
  text-decoration: underline;
  cursor: pointer;

  &:hover,
  &.active {
    color: purple;
  }

  &.active {
    color: red;
  }
`;

export const StyledComponent = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;

  @media (max-width: 1007px){
    background-color: #d7f095;
  }

  @media (max-width: 640px){
    background-color:#e7eba0;
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledProjectCard = styled.div`
  display: flex;
  opacity: 0.4;
  flex-direction: row;
  border: 1px solid rgb(210, 210, 210);
  border-radius: 5px;
  box-shadow: 10px 8px 12px -2px rgb(128, 127, 197);
  margin-bottom: 8px;
  padding-bottom: 12px;
  background-color: #ccffe5;
  width: 27%; 
  positions: relative;
  flex-wrap: wrap;
  position: relative;
  justify-content: space-between;

  @media (max-width: 1007px){
  width: 45%;
  }

  @media (max-width: 640px){
  width: 75%
  }

  &:hover,
  ${StyledLink}.active{
    opacity: 1;
  }
  color: ${( props ) => 
  props.path ? "red": "#0000EE"};
`;

 export const StyledVerticalBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1px;
  padding: 1px;
  align: center;
`;

export const StyledCSection = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const StyledHeader = styled.div`
  background-color: #3044f2;
  display: flex;
  opacity: 0.2;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  font-size: calc(10px + 2vmin);
  color: white;
  font-family: 'New Tegomin', serif;

  @media (max-width: 1007px){
    background-color: #c5f075;
  }

  @media (max-width: 640px){
    justify-content: space-between;
    background-color:#f1f58c;
    color: #3044f2;
  }

  &:hover {
    opacity: 1;
  }
`;

const animation = keyframes`
  0% { opacity: 0; transform: translateY(300px) skewY(20deg) skewX(20deg) rotateZ(40deg); filter:blur(6px); }
  15% { opacity: 0.50; transform: translateY(200) skewY(13deg) skewX(13deg) rotateZ(30deg); filter:blur(4px);}
  35% { opacity: 0.75; transform: translateY(100) skewY(6deg) skewX(6deg) rotateZ(20deg); filter:blur(2px);}
  60% { opacity: 1; transform: translateY(0) skewY(0deg) skewX(0deg) rotateZ(0deg); filter:blur(0px);}
  100% { opacity: 0; transform: translateY(300px) skewY(20deg) skewX(20deg) rotateZ(40deg); filter:blur(6px); }
`

export const AnimatedWelcomeMessage = styled.span`
  display: inline-block;
  font-size: 5vh;
  opacity:0%;
  animation-name: ${animation};
  animation-duration: 10s;
  animation-fill-mode: forwards;

`

export default function TextAnimation(){
  return (
      <AnimatedWelcomeMessage>
        <p>Welcome</p>
        <p>to my mobile</p>
        <p>responsive</p>
        <p>react app</p>
        <p>portfolio</p>
      </AnimatedWelcomeMessage>
    )
};

