import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import tentacles from '../img/butterfly-tentacles.png';
import wings from '../img/butterfly-animation.png';

const tentaclesRotation = keyframes`
from {
    transform:rotate3d(0, 1, 0, 0deg);
}
50% {
    transform:rotate3d(0, 1, 0, 60deg);
}
to{
    transform:rotate3d(0, 1, 0, 0deg);
}
`
const rightWingAni = keyframes`
from {
    transform:rotateX(30deg) translate3d(-200px, 0px, 0px) rotate3d(0, 1, 0, 160deg);
}
50% {
    transform:rotateX(30deg) translate3d(-200px, 0px, 0px) rotate3d(0, 1, 0, 100deg);
}
to{
    transform:rotateX(30deg) translate3d(-200px, 0px, 0px) rotate3d(0, 1, 0, 160deg);
}`

const leftWingAni = keyframes`
from {
    transform:rotateX(30deg) rotate3d(0, 1, 0, 0deg);
}
50% {
    transform:rotateX(30deg) rotate3d(0, 1, 0, 80deg);
}
to{
    transform:rotateX(30deg) rotate3d(0, 1, 0, 00deg);
}`

const StyledWrapper = styled.div`
    position: relative;
    transform: rotateZ(-20deg) rotate3d(0, 1, 0, 10deg) scale3d(1, 1, 1);
    transform-origin: 51% 50%;
    width: 300px;
    height: 175.5px;
    transform-style: preserve-3d;
    margin:auto;
    ${({ theme }) => theme.media.desktop} {
        width: 600px;
        height: 357px;
    }
    `
const Tentacles = styled.div`
    background: url(${tentacles}) no-repeat;
    position:absolute;
    width: 5.3%;
    height: 23.6%;
    left: 49%;
    top: 5.1%;
    background-size: cover;
    animation: ${tentaclesRotation} .6s ease-out 4;
  `
const RightWing = styled.div`
    transform: rotateX(30deg)  translate3d(-200px, 0px, 0px) rotate3d(0, 1, 0, 160deg);
    transform-origin: top right;
    position: absolute;
    left: 200px;
    top: 0px;
    width: 50%;
    height: 100%;
    background: url(${wings}) no-repeat;
    background-size: cover;
    animation: ${rightWingAni} .6s ease-out 4;
    `

const LeftWing = styled(RightWing)`
    transform: rotateX(30deg) rotate3d(0, 1, 0, 0deg);
    left: 0px;
    top: 0px;
    animation: ${leftWingAni} .6s ease-out 4;
`

const Butterfly = () => {
    return (
        <StyledWrapper>
            <Tentacles />
            <LeftWing />
            <RightWing />
        </StyledWrapper>
    );
}

export default Butterfly;