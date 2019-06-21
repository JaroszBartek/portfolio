import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from '../helpers/theme'
import Header from '../components/Header';
import Main from './Main';
import Footer from '../components/Footer';


const GlobalStyle = createGlobalStyle`
html {
  font-size: 62.5%;
}
*, *::before, *::after {
  box-sizing: border-box;
}
*:focus {
  outline: 3px outset #ef6864ab;
  outline-offset: 2px;
}
body {
  padding: 0;
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fonts.main};
  font-family: "Poppins", sans-serif;
  letter-spacing: 1px;
  line-height: 1.5;
}
button {
  cursor: pointer;
}
`;

const FrontPage = () => {

  return (
    <ThemeProvider theme={theme} >
      <Router basename={ProcessingInstruction.env.PUBLIC_URL}>
        <GlobalStyle />
        <>
          <Header />
          <Main />
          <Footer />
        </>
      </Router>
    </ThemeProvider>
  );

}

export default FrontPage;
