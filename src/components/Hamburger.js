import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    z-index: 999;
    outline: none;
	border: none;
    background: transparent;
    cursor: pointer;
    `;

const DivHamburger = styled.div`
    max-width: 100%;
    width: 50px;
    height: 5px;
    background: #ffffff;
    position:absolute;
    box-shadow: 0 2px 5px rgba(0,0,0,.2);
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
        background: #ffffff;
        position:absolute;
        left: 0;
        box-shadow: 0 2px 5px rgba(0,0,0,.2);
        transition: .5s;
    }
    ::before {
        top: -10px;
    }
    ::after {
        top: 10px;
    }
`;

const Hamburger = (props) => {

    return (
        <Button type="button" aria-label="Menu" onClick={props.hamburgerHandler}>
            <DivHamburger></DivHamburger>
        </Button>
    );
}

export default Hamburger;