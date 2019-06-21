import React from 'react';
import styled from 'styled-components';
import Banner from '../layout/Banner';
import Design from '../layout/Design';
import Code from '../layout/Code';
import Animation from '../layout/Animation';
import Video from '../layout/Video';
import Cv from '../layout/Cv';
import Contact from '../layout/Contact';
import Article from '../layout/Article';

const StyledMain = styled.main`
    display: grid;
    grid-gap: 5vh
`
const StyledSection = styled.section`
    box-sizing: border-box;
    display: grid;
    grid-column-gap: 2rem;
    grid-template-columns: 1fr;
    place-items: center;
    width: 100%;
    max-width: ${({ banner }) => banner ? '100vw ' : '1600px'};
    margin: ${({ banner }) => banner ? '0' : '0 auto'};
    padding: ${({ banner }) => banner ? '0' : '1rem'};
    
    ${({ theme }) => theme.media.tablet} {
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    }

    h2 {
        color: ${({ theme }) => theme.colors.title};
        font-size: 2.5rem;
        letter-spacing: 2px;
        font-weight: bold;
        text-transform: uppercase;
        margin: 30px 0; 
        ${({ theme }) => theme.media.tablet} {
            font-size: 3.5rem;
        }
        ::before {
            content: "";
            display: block;
            margin-bottom: 5px;
            width: 100px;
            height: 5px;
            background: linear-gradient(90deg, rgba(239,104,100,0.7) 0%, rgba(255,255,255,0.9) 100%);
        } 
    }
`

const sectionsList = [
    { content: <Banner />, id: "home" },
    { content: <Design />, id: "design" },
    { content: <Code />, id: "code" },
    { content: <Animation />, id: "animation" },
    { content: <Video />, id: "video" },
    { content: <Cv />, id: "cv" },
    { content: <Contact />, id: "contact" },
]

const Section = (props) => {
    return (
        <StyledSection {...props} id={props.id}>
            {props.children}
        </StyledSection>
    );
}

const Main = () => {

    const sections = sectionsList.map((section) => (
        <Section key={section.id} id={section.id}>{section.content}</ Section >
    ));

    return (
        <StyledMain>
            <Section banner id="home">
                <Banner />
            </Section>
            <Article>
                {sections.slice(1, 3)}
            </Article>
            {sections.slice(3)}
        </StyledMain>
    );
}

export default Main;