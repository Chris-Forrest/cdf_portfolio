import React from 'react';
import {StyledCSection, StyledLink} from "./styledComponents";

const ContactSection = () => {

    return(
        <StyledCSection>
            <h3>chrisforrest737@gmail.com</h3>
            <StyledLink onClick={() => window.open("https://www.linkedin.com/in/chrisforrest737/")}>LinkedIn</StyledLink>
        </StyledCSection>
    )
}

export default ContactSection;