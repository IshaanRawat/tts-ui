import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';

import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BrowserRouter>
          <Section />
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
