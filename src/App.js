import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "./css/Styles.css";

class App extends Component {
  render() {
    return (
      <div className="container question-cont">
        <h1>9 to 5 Test</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis bibendum
          sit amet massa vitae scelerisque. Aliquam blandit viverra nisi quis
          venenatis. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Donec viverra risus augue. Duis laoreet rutrum lorem eu
          pulvinar.
        </p>
        <div class="text-center">
          <Link to="/test" class="btn">
            Start
          </Link>
        </div>
      </div>
    );
  }
}

export default App;
