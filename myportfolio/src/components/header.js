import React from 'react';
import { StyledHeader } from './styledComponents';
import Burger from './burger';

const Header = () => {

    return(
        <StyledHeader className='header'>
            <h1>Chris Forrest</h1>
            <h2>Portfolio</h2>
            <Burger />
        </StyledHeader>
    )
}

export default Header;
