import React, { Component } from 'react';
import logo from './logo.svg';
import Test from './Test.js'
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Container } from "semantic-ui-react"
import MainPanel from './MainPanel.js'

class App extends Component {
  render() {
    return (
      <Container>
      <div className="App">

        <MainPanel /> 
      </div>

      
      </Container>
    );
  }
}

export default App;
