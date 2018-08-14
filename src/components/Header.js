import React from "react";
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import NoteCard from "./noteCard";
import App from "../App";

export function Headder() {
	return(
    <Router>
      <div className="App-header" >
        <header role="banner">
          <h1 className="App-navbar-title"><Link to="/">Learn More Better</Link></h1>
          <h2 className="App-navbar-link"><Link to="/noteCard">Flash Cards</Link></h2> 
        </header>
        <main>
          <Route exact path="/" component={App} />
          <Route exact path="/NoteCard" component={NoteCard} />
        </main>
      </div>
    </Router>
	);
}

export default connect(Headder);