import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from '../theme/theme'
import Nav from '../components/Nav';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';


const GlobalStyle = createGlobalStyle`
html {
  font-size: 62.5%;
}
*, *::before, *::after {
  box-sizing: border-box;
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
`;

const FrontPage = () => {

  return (
    <ThemeProvider theme={theme} >
      <Router>
        <GlobalStyle />
        <div className="Wrapper">
          <Nav />
          <Header />
          <Main />
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );

}

export default FrontPage;
