import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import QuestionData from "./components/QuestionData";
import Success from "./pages/Success";

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/test" component={QuestionData} />
      <Route path="/success" component={Success} />
    </div>
  </Router>
);

export default Routes;
