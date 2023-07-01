import React from 'react';
import './App.css';
import Header from './Header.js';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Nav/>
      <Main/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
