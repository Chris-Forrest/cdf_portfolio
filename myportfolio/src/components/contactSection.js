import React from 'react';
import styled from 'styled-components';

const StyledCSection = styled.div`
display: flex;
justify-content: space-around;
`

const ContactSection = () => {

    return(
        <StyledCSection>
            <h3>chrisforrest737@gmail.com</h3>
            <a href={'https://www.linkedin.com/in/chrisforrest737/'}>LinkedIn</a>
        </StyledCSection>
    )
}

export default ContactSection;