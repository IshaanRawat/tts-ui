import React, { Component } from 'react';

import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  state = {
    logInfo: {
      isLoggedIn: false,
      loggedInAs: ""
    }
  }

  handleLogin(type) {
    this.setState({
      logInfo: {
        isLoggedIn: true,
        loggedInAs: type
      }
    });
  }

  handleLogout() {
    this.setState({
      logInfo: {
        isLoggedIn: false,
        loggedInAs: ""
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Section logInfo={this.state.logInfo} handleLogin={this.handleLogin} handleLogout={this.handleLogout}/>
        <Footer />
      </div>
    );
  }
}

export default App;
