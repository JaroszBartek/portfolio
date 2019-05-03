import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
padding: 2rem;
`

const Section = (props) => {
    return (
        <StyledSection id={props.id}>
            {props.children}
        </StyledSection>

    );
}

export default Section;

