import React, { Component } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import styled, { css } from 'styled-components';
import Hamburger from './Hamburger'

const navItems = [
    { id: 1, name: "Start", path: "/#home" },
    { id: 2, name: "Projektowanie", path: "/#design" },
    { id: 3, name: "Kod", path: "/#code" },
    { id: 4, name: "Animacje", path: "/#animations" },
    { id: 5, name: "Video", path: "/#video" },
    { id: 6, name: "Kontakt", path: "/#contact" },
]

const Navigation = styled.nav`
    position: absolute;
    top: 0;
    visibility: ${({ navOpen }) => navOpen ? 'visible' : 'hidden'};
    padding-top: 100px;
    width: 100vw;
    height: 100vh;
    right: ${({ navOpen }) => navOpen ? '0' : '-100vw'};
    background-color: #ffffff;
    box-shadow: -1px 9px 19px -8px rgba(0, 0, 0, .49);
    transition: all .5s ease-in-out;

    ${({ theme }) => theme.media.tablet} {
        width: 450px;
        right: ${({ navOpen }) => navOpen ? '0' : '-450px'};
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
      padding: ${({ linkOpacity }) => linkOpacity ? '15px 70px' : '15px 70px 15px 10px'};
      opacity: ${({ linkOpacity }) => linkOpacity ? '0' : '1'};
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

class Nav extends Component {
    state = {
        navOpen: false,
        linkOpacity: true,
    }

    hamburgerHandler = () => {
        this.setState(prevState => ({
            navOpen: !prevState.navOpen,
            linkOpacity: !prevState.linkOpacity
        }));
    }


    render() {
        return (
            <>
                <Hamburger hamburgerHandler={this.hamburgerHandler} />
                <Navigation navOpen={this.state.navOpen}>
                    <ul >
                        {navItems.map(item => (
                            <ListItem key={item.id}
                                linkOpacity={this.state.linkOpacity}>
                                <StyledLink smooth to={item.path}>           {item.name}
                                </StyledLink>
                            </ListItem>
                        ))}
                    </ul>
                </Navigation>
            </>
        );
    }

}

export default Nav;