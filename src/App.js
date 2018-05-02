import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Container } from "semantic-ui-react"
import MainPanel from './MainPanel.js'
import MainPage from './MainPage';

class App extends Component {
  render() {
    return (
        <MainPage/>  
    );
  }
}

export default App;
