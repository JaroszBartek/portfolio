import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.a`
    position: relative;
    z-index: 1;
    text-align: center;
    padding: 14px 18px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 16px;
    font-weight: 900;
    transition: all .1s;
    ::before, ::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: ${({ theme }) => theme.colors.secondary};
        transition: all 0.25s cubic-bezier(0.23, 1, 0.32, 1);
    }
    ::before {
        left: 0;
        top: 0;
    }
    ::after {
        right: 0;
        bottom: 0;
    }
    span::before, span::after {
        content: "";
        position: absolute;
        width: 2px;
        height: 100%;
        background-color: ${({ theme }) => theme.colors.secondary};
        transition: all 0.25s cubic-bezier(0.23, 1, 0.32, 1);
        }
    span::before {
        left: 0;
        top: 0;
    }
    span::after {
        right: 0;
        bottom: 0;
    }
    :hover::before, 
    :hover::after {
        width: 12px;
    }
    :hover span::before, 
    :hover span::after {
        height: 12px;
    }
`
const Button = (props) => {
    return (
        <StyledButton href='https://jaroszbartek.github.io/curriculum-vitae'
            tabindex="0"
            target="_blank">
            <span>{props.children}</span>
        </StyledButton>
    );
}

export default Button;