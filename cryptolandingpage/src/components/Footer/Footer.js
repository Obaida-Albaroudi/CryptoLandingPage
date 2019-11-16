import React from 'react'
import { StyledFooter, StyledCopyright, StyledFooterNavLink, StyledFooterNavLinkContainer, StyledMobileNav } from '../../StyledComps'

const Footer = () => {
    
    return (
        <StyledFooter>
            <StyledCopyright>ALL RIGHTS RESERVED ©</StyledCopyright>

            <StyledFooterNavLinkContainer>
                <StyledFooterNavLink to='contactus'>Contact Us</StyledFooterNavLink>
                <StyledFooterNavLink >Crypto Fund</StyledFooterNavLink>
            </StyledFooterNavLinkContainer>
        </StyledFooter>
    )
}

export default Footer;