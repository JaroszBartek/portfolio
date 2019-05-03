import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import Banner from '../sections/Banner';
import Design from '../sections/Design';
import Code from '../sections/Code';
import Animation from '../sections/Animation';
import Video from '../sections/Video';
import Cv from '../sections/Cv';
import Contact from '../sections/Contact';
import img from '../img/banner_background.jpg';

const StyledMain = styled.main`
    display: grid;
    grid-gap: 2rem;
    &>section:first-child {
        background: url(${img}) no-repeat center/cover;
        height: 100vh;
    }
`;

const sectionsList = [
    { content: <Banner />, id: "home" },
    { content: <Design />, id: "design" },
    { content: <Code />, id: "code" },
    { content: <Animation />, id: "animation" },
    { content: <Video />, id: "video" },
    { content: <Cv />, id: "cv" },
    { content: <Contact />, id: "contact" },
]

const Main = () => {

    const sections = sectionsList.map((section, i) => (
        <Section key={section.id} id={section.id}>{section.content}</ Section >
    ));

    return (
        <StyledMain>
            {sections.slice(0, 1)}
            <article>
                {sections.slice(1, 3)}
            </article>
            {sections.slice(3)}
        </StyledMain>
    );
}

export default Main;