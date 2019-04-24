import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from '../components/Nav';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Header />
        <Main />
        <Footer />
      </div>
    </Router>

  );
}

export default App;
