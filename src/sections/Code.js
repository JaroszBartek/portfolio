import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import IntersectBox from '../components/IntersectBox';

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

const cursorAnimation = () => css`
  ${cursor} .5s step-end infinite alternate
  `

const animation = props => css`
  ${type} ${props => (props.length * 0.1).toFixed(1)}s steps(${props.length}, end);
  `

const txt = ["", "<!doctype html>", "<html>", "<head> ", `<meta charset="utf-8">`, `<meta name="viewport"> `, `<meta name="description">`, "</head> ", "<body> "]


const Paragraph = styled.p`
  color: #000000;
  display: block;
  width: ${({ length }) => (length * 1.2).toFixed(2)}rem;
  font-size: 1.6rem;
  font-weight: bold;
  border-right: 2px solid #ef6864;
  overflow: hidden;
  margin: 0;
  white-space: nowrap;
  letter-spacing: 2px;
  line-height: 2;
  opacity: 0;

  ${({ theme }) => theme.media.tablet} {
    font-size: 1.9rem;
    width: ${({ length }) => (length * 1.33).toFixed(2)}rem;
  }

  :last-of-type {
    width: 9.5rem;
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
  .is-active & {
    animation: ${animation};
    animation-fill-mode: forwards;
    animation-delay: ${({ letters }) => (letters * 0.1).toFixed(2)}s;
  }
`
const Order1 = styled.div`
  order: 1;
`
const Order2 = styled.div`
order: 2;
max-width: 600px;
`

let letters = 0;
const typing = txt.map((paragraph, i) => {
  let index = i > 0 ? (i - 1) : 0;
  return (
    <Paragraph letters={letters += txt[index].length} length={paragraph.length} key={i}>
      {paragraph}
    </Paragraph>
  );
});

const Code = () => {
  return (
    <>
      <Order2>
        <h2>Kod</h2>
        <p>
          W projektach wykorzystuję głównie HTML, CSS i JavaScript. Dbam, aby kod był
          czytelny i semantyczny, a strony wyświetlały się poprawnie na wszystkich
          urządzeniach. Dodatkowe narzędzia, które ułatwiają mi życie: SCSS, Git,
          Wordpress, React.
        </p>
      </Order2>
      <Order1>
        <IntersectBox initial="addClass">
          {typing}
        </IntersectBox>
      </Order1>

    </>
  );
}

export default Code;