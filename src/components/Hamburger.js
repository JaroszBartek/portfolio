import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    margin: 20px;
    z-index: 999;
    outline: none;
	border: none;
    background: none;
    cursor: pointer;
    `;

const DivHamburger = styled.div`
    max-width: 100%;
    width: 50px;
    height: 5px;
    background: ${({ theme, navOpen }) => navOpen ? 'transparent' : theme.colors.primary};
    position: absolute;
    box-shadow: ${({ navOpen }) => navOpen ? '0 2px 5px rgba(0,0,0,0)' : '0 2px 5px rgba(0,0,0,.3)'};
    transition: all .5s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;

    ::before,
    ::after {
        content: '';
        max-width: 100%;
        width: 50px;
        height: 5px;
        background: ${({ theme }) => theme.colors.primary};
        position:absolute;
        left: 0;
        box-shadow: 0 2px 5px rgba(0,0,0,.3);
        transition: .5s;
    }
    ::before {
        top: -10px;
        transform: translateY(${({ navOpen }) => navOpen ? '10px' : '0'}) rotate(${({ navOpen }) => navOpen ? '45deg' : '0'});
    }
    ::after {
        top: 10px;
        transform: translateY(${({ navOpen }) => navOpen ? '-10px' : '0'}) rotate(${({ navOpen }) => navOpen ? '135deg' : '0'});
    }
`;

const Hamburger = ({ navOpen, ...props }) => {

    return (
        <Button type="button" aria-label="Menu" {...props}>
            <DivHamburger navOpen={navOpen} />
        </Button>
    );
}

export default Hamburger;