import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Ul = styled.div`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  margin-right: 3px;
  
  @media (max-width: 640px) {
    display:flex;
    justify-content: space-around;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 10vh;
    width: 32rem;
    transition: transform 0.3s ease-in-out;
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
        <Link style={{marginRight:"8px", textDecoration:"none", color:"#edc98e"}} to="/projects">Projects</Link>
        <Link style={{marginRight:"8px", textDecoration:"none", color:"#edc98e"}} to="/">About</Link>
        <Link style={{marginRight:"8px", textDecoration:"none", color:"#edc98e"}} to="/contact">Contact</Link>
        <Link style={{ textDecoration:"none", color:"#edc98e"}} to="/welcome">Welcome</Link>
    </Ul>
  )
}

export default RightNav