import React from 'react';
import styled from 'styled-components';
import Banner from '../sections/Banner';
import Design from '../sections/Design';
import Code from '../sections/Code';
import Animation from '../sections/Animation';
import Video from '../sections/Video';
import Cv from '../sections/Cv';
import Contact from '../sections/Contact';

const StyledMain = styled.main`
    display: grid;
    grid-gap: 20px;
`;

const Main = () => {


    return (
        <StyledMain>
            <Banner />
            <article>
                <Design />
                < Code />
            </article>
            <Animation />
            < Video />
            <Cv />
            <Contact />
        </StyledMain>
    );
}

export default Main;