import React from 'react';
import styled, { keyframes } from 'styled-components';
import tentacles from '../assets/img/butterfly-tentacles.png';
import wings from '../assets/img/butterfly-animation.png';
import IntersectBox from './IntersectBox';

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
    width: 280px;
    height: 163.8px;
    transform-style: preserve-3d;
    margin:auto;
    ${({ theme }) => theme.media.tablet} {
        width: 500px;
        height: 297.5px;
    }
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
    .is-active & {
        animation: ${tentaclesRotation} .6s ease-out 4;
    }
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
    .is-active & {
        animation: ${rightWingAni} .6s ease-out 4;
    }
    
    `

const LeftWing = styled(RightWing)`
    transform: rotateX(30deg) rotate3d(0, 1, 0, 0deg);
    left: 0px;
    top: 0px;
    .is-active & {
        animation: ${leftWingAni} .6s ease-out 4;
    }
`

const Butterfly = () => {
    return (
        <IntersectBox initial="addClass">
            <StyledWrapper >
                <Tentacles />
                <LeftWing />
                <RightWing />
            </StyledWrapper>
        </IntersectBox>
    );
}

export default Butterfly;