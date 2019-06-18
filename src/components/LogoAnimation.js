import React from 'react';
import styled from 'styled-components';
import imgBg from '../img/chalk_logo_animation.png';
import imgSm from '../img/chalk_logo.png';
import IntersectBox from '../components/IntersectBox';

const Logo = styled.div`
    background: url(${imgSm}) left center/contain no-repeat;
    height: 20rem;

    ${({ theme }) => theme.media.desktop} {
        background: url(${imgBg});
        background-size: cover;
        width: 700px;
        height: 481px;
    }
`

const LogoAnimation = () => {
    return (
        <IntersectBox initial="scroll">
            <Logo className="logo" />
        </IntersectBox>
    );
}

export default LogoAnimation;