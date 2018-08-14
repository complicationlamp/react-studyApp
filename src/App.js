import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect, Link} from 'react-router-dom';


import Header from "./components/Header"
import AppInfo from "./components/AppInfo"
import Filter from "./components/Filter"
import Form from "./components/Form"
import NoteCard from "./components/noteCard"
import Quiz from "./components/Qiuz"
import Feedback from "./components/Feedback"
import Footer from "./components/Footer"

import './App.css';
import './Form.css';
import './noteCard.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <AppInfo/>
        <Form/>
        <Filter/>
        <NoteCard/>
        <Quiz/>
        <Feedback/>
        <Footer/>
      </div>
    );
  }
}

export default App;
