import styled from 'styled-components';

export const StyledComponent = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const StyledProjectCard = styled.div`
display: flex;
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
`
 export const StyledVerticalBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1px;
  padding: 1px;
  align: center;
`;

export const StyledLink = styled.td`
  color:  #0000EE;
  text-decoration: underline;
  cursor: pointer;
`

export const StyledCSection = styled.div`
display: flex;
justify-content: space-around;
`