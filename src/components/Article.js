import React from 'react';
import styled from 'styled-components';

const StyledArticle = styled.article`
    position:relative;
    display: grid;
    grid-gap: 5vh
    ::before {
        display: none;
    }

${({ theme }) => theme.media.tablet} {
    ::before {
        content: '';
        display: block;
        position: absolute;
        box-shadow: 10px 10px 40px #b7b6b6a6;
        width: 50vw;
        top: -5vh;
        height: calc(100% + 300px);
        z-index: -20;
      }
} 
`

const Article = (props) => {
    return (
        <StyledArticle id={props.id}>
            {props.children}
        </StyledArticle>
    );
}

export default Article;

