import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "./css/Styles.css";

class App extends Component {
  render() {
    return (
      <div className="container question-cont">
        <h1>9 to 5 Test</h1>
        <Link to="/test">Start</Link>
      </div>
    );
  }
}

export default App;
