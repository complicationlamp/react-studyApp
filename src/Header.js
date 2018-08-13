import React from "react";
export default function Headder(){
	return(
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
	);
}