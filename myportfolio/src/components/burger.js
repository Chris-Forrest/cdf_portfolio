import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  

  @media (max-width: 640px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 1rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#ccc' : '#333'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Ul = styled.div`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  margin-right: 3px;
  
  @media (max-width: 640px) {
    display:flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 30vh;
    width: 8rem;
    transition: transform 0.3s ease-in-out;
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <Ul open={open}>
        <Link onClick={() => setOpen(!open)} style={{marginRight:"8px", textDecoration:"none", color:"white"}} to="/projects">Projects</Link>
        <Link onClick={() => setOpen(!open)} style={{marginRight:"8px", textDecoration:"none", color:"white"}} to="/">About</Link>
        <Link onClick={() => setOpen(!open)} style={{marginRight:"8px", textDecoration:"none", color:"white"}} to="/contact">Contact</Link>
        <Link onClick={() => setOpen(!open)} style={{ textDecoration:"none", color:"white"}} to="/welcome">Welcome</Link>
      </Ul>
    </>
  )
}

export default Burger