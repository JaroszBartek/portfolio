import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const type = keyframes`
0% {
    width: 0;
  }
  1% {
    opacity: 1;
  }
  99.9% {
    border-right: 2px solid #ef6864;
  }
  100% {
    opacity: 1;
    border: none;
  }
  `
const cursor = keyframes`
  50% {
    opacity: 0;
  }`

const cursorAnimation = props => css`
  ${cursor} .5s step-end infinite alternate
  `

const animation = props => css`
  ${type} ${props => (props.length * 0.1).toFixed(1)}s steps(${props.length}, end);
  `

const txt = ["<!doctype html>", "<html>", "<head> ", `<meta charset="utf-8">`, `<meta name="viewport"> `, `<meta name="description">`, "</head> ", "<body>  "]

const Animation = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
`
const Paragraph = styled.p`
  color: #000000;
  display: inline-block;
  width: ${({ length }) => (length * 1.33).toFixed(2)}rem;
  font-size: 1.9rem;
  font-weight: bold;
  border-right: 2px solid #ef6864;
  overflow: hidden;
  margin: 0;
  white-space: nowrap;
  letter-spacing: 2px;
  line-height: 2;
  animation: ${animation};
  opacity: 0;
  animation-fill-mode: forwards;
  animation-delay: ${({ index }) => (index * 2.5)}s;
  :last-of-type {
    position: relative;
    ::after {
      content: "";
      position: absolute;
      height: 100%;
      width: 2px;
      opacity: 1;
      background: #ef6864;
      animation: ${cursorAnimation};
    } 
  }
`

const typing = txt.map((paragraph, i) => (
  <Paragraph length={paragraph.length} index={i} key={i}>{paragraph}</Paragraph>
));

const Code = () => {
  return (
    <>
      <div>
        <h2>Kod</h2>
        <p>
          W projektach wykorzystuję głównie HTML, CSS i JavaScript. Dbam, aby kod był
          czytelny i semantyczny, a strony wyświetlały się poprawnie na wszystkich
          urządzeniach. Dodatkowe narzędzia, które ułatwiają mi życie: SCSS, Git,
          Wordpress. Obecnie uczę się Reacta.
                </p>
      </div>
      <div>
        <Animation>
          {typing}
        </Animation>
      </div>

    </>
  );
}

export default Code;