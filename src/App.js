import React, { Component } from 'react';
import Form from "./Form"
import NoteCard from "./noteCard.js"
import Header from "./Header.js"
import Filter from "./Filter.js"
import Quiz from "./Qiuz.js"

import './App.css';
import './Form.css';
import './noteCard.css'
import AppInfo from './AppInfo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Filter/>
        <AppInfo/>
        <Form/>
        <NoteCard/>
        <Quiz/>
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
