import React from 'react';
import styled, { keyframes } from 'styled-components';

const beatBtn = keyframes`
0% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.1);
  }
  `

const StyledOpen = styled.button`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;
    display: flex;
    border: none;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    opacity: ${({ formOpen }) => formOpen ? '0' : '1'};
    visibility: ${({ formOpen }) => formOpen ? 'hidden' : 'visible'};
    transition: all .3s
    &::before {
        content: "";
        display: block;
        position: absolute;
        z-index: -2;
        width: 100%;
        height: 100%;
        background-color: ${({ theme }) => theme.colors.secondary};
        border-radius: 50%;
        top: 0;
        left: 0;
        box-shadow: 0 10px 30px 0px ${({ theme }) => theme.colors.secondary};
        transition: all .4s;
        animation: ${beatBtn} 1s ease-in-out infinite;
    }
`

const Open = (props) => {
    return (
        <StyledOpen onClick={props.toggleForm} formOpen={props.formOpen}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 382.117 382.117"
                width="50px" height="50px">
                <path
                    d="M336.764,45.945H45.354C20.346,45.945,0,65.484,0,89.5v203.117c0,24.016,20.346,43.555,45.354,43.555h291.41  c25.008,0,45.353-19.539,45.353-43.555V89.5C382.117,65.484,361.772,45.945,336.764,45.945z M336.764,297.72H45.354  c-3.676,0-6.9-2.384-6.9-5.103V116.359l131.797,111.27c2.702,2.282,6.138,3.538,9.676,3.538l22.259,0.001  c3.536,0,6.974-1.257,9.677-3.539l131.803-111.274v176.264C343.664,295.336,340.439,297.72,336.764,297.72z M191.059,192.987  L62.87,84.397h256.378L191.059,192.987z"
                    fill="#FFFFFF" />
            </svg>
        </StyledOpen>
    );
}

export default Open;