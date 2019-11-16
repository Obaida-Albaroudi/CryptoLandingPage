import React from 'react'
import { Link } from 'react-router-dom'

import { StyledNavBar, StyledLogo, StyledNavLink, StyledNavLinkContainer } from '../StyledComps'

const NavBar = () => {

    return (
        <StyledNavBar>
            <Link to='/'>
                <StyledLogo src={require(`../assets/logo.png`)} alt='Better Business Logo'  />
            </Link>
                <StyledNavLinkContainer>
                    <StyledNavLink to='/'>Home</StyledNavLink>
                    <StyledNavLink to='/aboutus'>About Us</StyledNavLink>
                    <StyledNavLink to='/fund'>Fund </StyledNavLink>
                    <StyledNavLink to='/contactus'>Contact Us</StyledNavLink>
                </StyledNavLinkContainer>
        </StyledNavBar>
    )
}

export default NavBar;