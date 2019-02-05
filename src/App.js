import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "./css/Styles.css";

class App extends Component {
  render() {
    return (
      <div>
        <h2>This is App</h2>
        <Link to="/test">Start</Link>
      </div>
    );
  }
}

export default App;
