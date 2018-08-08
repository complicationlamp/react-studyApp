import React, { Component } from 'react';
import Form from "./Form"
import NoteCard from "./noteCard.js"

import './App.css';
import './Form.css';
import './noteCard.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Learn More Better</h1>
          <p className="App-about">THIS IS WHAT THE APP DOES</p>
        </header>
        <p className="App-intro">
          To get started, click login or register.
        </p>
        <Form/>
        <NoteCard/>
      </div>
    );
  }
}

export default App;
