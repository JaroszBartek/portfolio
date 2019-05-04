import React from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';

const StyledHeader = styled.header`
    position: fixed;
    display: flex;
    padding: 0;
    justify-content: flex-end;
    width: 100%;
    box-sizing: border-box;
    z-index: 500;
    `;

const Header = () => {
    return (
        <StyledHeader>
            <Nav />
        </StyledHeader>
    );
}

export default Header;