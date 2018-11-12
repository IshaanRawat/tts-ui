import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';

import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';

import './App.css';

class App extends Component {
  
  render() {
    console.log(process.env.PUBLIC_URL);
    return (
      <div className="App">
        <Header />
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Section />
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
