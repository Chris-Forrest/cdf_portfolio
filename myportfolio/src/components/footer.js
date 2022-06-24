import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
   
   
   background-color: grey;
   position: fixed;
   bottom: 0;
   left: 0;
   width: 100%;
   height: 30px;
`

const Footer = () => {

    return(
        <StyledFooter>
            <p>Background Image by <a href="https://unsplash.com/@jjying?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">JJ Ying</a> on <a href="https://unsplash.com/s/photos/technology-background?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  </p>
        </StyledFooter>
    )

}

export default Footer;