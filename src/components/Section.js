import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
display: grid;
grid-gap: 2rem;
grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
padding: 2rem;

 h2 {
    color: ${({ theme }) => theme.colors.title};
    font-size: 3.5rem;
    letter-spacing: 2px;
    font-weight: bold;
    margin: 30px 0; 
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

const Section = (props) => {
    return (
        <StyledSection id={props.id}>
            {props.children}
        </StyledSection>

    );
}

export default Section;

