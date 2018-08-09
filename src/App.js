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
          <nav id="nav" classNaem="App-nav">
            <ul className="App-nav-ul">
              <li className="App-nav-li">
                <a href="#">nav-link</a>
              </li>
              <li className="App-nav-li">
                <a href="#">nav-link</a>
              </li>
              <li className="App-nav-li">
                <a href="#">nav-link</a>
              </li>
              <li className="App-nav-li">
                <a href="#">nav-link</a>
              </li>
              <li className="App-nav-li">
                <a href="#">nav-link</a>
              </li>
              <li className="App-nav-li">
                <a href="#">nav-link</a>
              </li>
            </ul>
          </nav>

        </header>

        <section className="App-filter">
        <h2 className="App-filter-title"> filter</h2>
          <ul className="App-filter-ul">
            <li className="App-filter-li">
                <a href="#">filter-link</a>
            </li>
            <li className="App-filter-li">
                <a href="#">filter-link</a>
            </li>
            <li className="App-filter-li">
                <a href="#">filter-link</a>
            </li>
            <li className="App-filter-li">
                <a href="#">filter-link</a>
            </li>
          </ul>
        </section>
        <section className="App-info">
          <p className="App-about">THIS IS WHAT THE APP DOES</p>
          <p className="App-intro">
            To get started, click login or register.
          </p>
        </section>
        <Form/>

        <NoteCard/>
        <section className="App-quiz">
        <h4 className="App-quiz-questionHeader"><strong>Q:</strong>What are the things</h4>
					<ul className="App-quiz-answerList">
						<li className="App-quiz-possibleAnswer">Answer 1</li>
						<li className="App-quiz-possibleAnswer">Answer 2</li>
						<li className="App-quiz-possibleAnswer">Answer 3</li>
						<li className="App-quiz-possibleAnswer">Answer 4</li>
					</ul>
        <h4 className="App-quiz-questionHeader"><strong>Q:</strong>What are the things</h4>
					<ul className="App-quiz-answerList">
						<li className="App-quiz-possibleAnswer">Answer 1</li>
						<li className="App-quiz-possibleAnswer">Answer 2</li>
						<li className="App-quiz-possibleAnswer">Answer 3</li>
						<li className="App-quiz-possibleAnswer">Answer 4</li>
					</ul>
        </section>
        <section className="App-feeback">
          <h5 className="App-feeback-title">Feedack section</h5>
            <section className="App-feedback-subject"> JS</section>
              <p className="App-feedback-content">texttexttexttexttexttexttext</p>
            <section className="App-feedback-subject"> HTML</section>
              <p className="App-feedback-content">texttexttexttexttexttexttext</p>
        </section>

        {/* =========================BUILD NOTES================================= */}
        {/* Maybe: not sure if thefooter is needed, but might be a nice touch */}
        {/* =========================BUILD NOTES================================= */}
        <section className="App-footer">
          <h5 className="App-footer-title">footer filler </h5>
            <p>maybe a link or two?</p>
        </section>
      </div>
    );
  }
}

export default App;
