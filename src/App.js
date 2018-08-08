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
        <header className="App-header" role="banner">
          <a href="/">
            {/* here would be a good place for an image that also goes ./ */}
          </a>
          <h1 className="App-title">Learn More Better</h1>
          <nav id="nav" classNaem="App-Nav">
            <ul className="App-nav-ul">
              <li className="App-nav-li">
                <a href="#">NAV-LINK</a>
              </li>

              <li className="App-filter-li">
                <a href="#">filter-LINK</a>
              </li>
              <li className="App-filter-li">
                <a href="#">filter-LINK</a>
              </li>
              <li className="App-filter-li">
                <a href="#">NAV-LINK</a>
              </li>
              <li className="App-filter-li">
                <a href="#">filter-LINK</a>
              </li>
              <li>
                <a href="#">NAV-LINK</a>
              </li>
            </ul>
          </nav>

        </header>
        <section className="App-filter">
        <h2 className="App-filter-title"> filter</h2>
          <ul className="App-filter-ul">
            <li className="App-filter-li">
                <a href="#">filter-LINK</a>
            </li>
            <li className="App-filter-li">
                <a href="#">filter-LINK</a>
            </li>
            <li className="App-filter-li">
                <a href="#">filter-LINK</a>
            </li>
            <li className="App-filter-li">
                <a href="#">filter-LINK</a>
            </li>
          </ul>
        </section>
        <p className="App-about">THIS IS WHAT THE APP DOES</p>
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
