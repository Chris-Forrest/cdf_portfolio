import React from 'react';
import { StyledHeader } from './styledComponents';
import { Link } from 'react-router-dom';


const Header = () => {


    return(
        <StyledHeader className='header'>
            <h1>Chris Forrest</h1>
            <h2>Portfolio</h2>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/">Home</Link>
        </StyledHeader>
    )
}

export default Header;
