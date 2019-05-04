import React from 'react';
import styled from 'styled-components';
import tentacles from '../img/butterfly-tentacles.png';
import wings from '..img/butterfly-animation.png';

const StyledWrapper = styled.div`
    position: relative;
    transform: rotateZ(-20deg) rotate3d(0, 1, 0, 10deg) scale3d(1, 1, 1);
    transform-origin: 51% 50%;
    top: 20%;
    width: 300px;
    height: 175.5px;
    transform-style: preserve-3d;
    margin:auto;
    `
const Tentacles = styled.div`
    background: url(${tentacles}) no-repeat;
    position:absolute;
    width:16px;
    height:41.5px;
    left: 147px;
    top: 9px;
    background-size: cover;
  `
const RightWing = styled.div`
    transform: rotateX(30deg)  translate3d(-200px, 0px, 0px) rotate3d(0, 1, 0, 160deg);
    transform-origin: top right;
    position: absolute;
    left: 200px;
    top: 0px;
    width: 150px;
    height: 178.5px;
    background: url(${wings}) no-repeat;
    background-size: cover;
    `

const Butterfly = () => {
    return (
        <StyledWrapper>
            <Tentacles />
            <div></div>
            <RightWing />
        </StyledWrapper>
    );
}

export default Butterfly;