import React from 'react';
import styled from 'styled-components';
import imgBg from '../img/chalk_logo_animation.png';
import imgSm from '../img/chalk_logo.png';

const Logo = styled.div`
    background: url(${imgSm}) left center/contain no-repeat;
    height: 20rem;

    ${({ theme }) => theme.media.desktop} {
        background: url(${imgBg}) center 0/cover;
        width: 700px;
        height: 481px;
    }
`

const LogoAnimation = () => {
    return (
        <Logo></Logo>
    );
}

export default LogoAnimation;