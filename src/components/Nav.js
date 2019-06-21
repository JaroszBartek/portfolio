import React, { useState } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import styled, { css } from 'styled-components';
import Hamburger from './Hamburger'

const navItems = [
    { name: "Start", path: "/#home" },
    { name: "Projektowanie", path: "/#design" },
    { name: "Kod", path: "/#code" },
    { name: "Animacje", path: "/#animation" },
    { name: "Video", path: "/#video" },
    { name: "Kontakt", path: "/#contact" },
]

const Navigation = styled.nav`
    position: absolute;
    top: 0;
    visibility: ${({ navOpen }) => navOpen ? 'visible' : 'hidden'};
    padding-top: 100px;
    width: 100vw;
    height: 100vh;
    pointer-events: auto;
    transform: ${({ navOpen }) => navOpen ? 'translateX(0)' : 'translateX(100vw)'};
    background-color: ${({ theme }) => theme.colors.primary};
    box-shadow: -1px 9px 19px -8px rgba(0, 0, 0, .49);
    transition: all .5s ease-in-out;

    ${({ theme }) => theme.media.tablet} {
        width: 450px;
        transform: ${({ navOpen }) => navOpen ? 'translateX(0)' : 'translateX(450px)'};
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-top: 0;
    }
    & ul {
        width: 90%;
        list-style: none;
        padding: 0;
        margin: auto;
    }
  `;

const liTransitionDelay = () => {
    let styles = '';

    for (let i = 0; i < 6; i += 1) {
        styles += `
        :nth-child(${i + 1}) {
            transition-delay: ${0.3 + (0.05 * i)}s
        }`
    }
    return css`${styles}`;
}

const ListItem = styled.li`
      position: relative;
      border-bottom: 2px solid ${({ theme }) => theme.colors.underscores};
      padding: 15px 10px;
      transform: translateX(${({ linkOpacity }) => linkOpacity ? '0' : '50px'});
      opacity: ${({ linkOpacity }) => linkOpacity ? '1' : '0'};
      transition: all .5s ease-in-out;
      ${liTransitionDelay()}
      ::before {
        content: "";
        display: block;
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 2px;
        transition: all 0.4s;
        background: ${({ theme }) => theme.colors.secondary};
        z-index: 10;
        }
        :hover::before {
            width: 50%;
      }   
`;

const StyledLink = styled(NavLink)`
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    `;

const Nav = () => {
    const [isMenuOpen, setMenuState] = useState(false)

    const toggleMenu = () => {
        setMenuState(!isMenuOpen)
    }

    return (
        <>
            <Hamburger onClick={toggleMenu} navOpen={isMenuOpen} />
            <Navigation navOpen={isMenuOpen}>
                <ul >
                    {navItems.map(item => (
                        <ListItem key={item.path}
                            linkOpacity={isMenuOpen}>
                            <StyledLink smooth to={item.path}>
                                {item.name}
                            </StyledLink>
                        </ListItem>
                    ))}
                </ul>
            </Navigation>
        </>
    );

}

export default Nav;