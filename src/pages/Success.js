import React from "react";
import { Link } from "react-router-dom";

function Success() {
  return (
    <div className="container question-cont">
      <h1>Your answers were submitted successfully!</h1>
      <Link to="/" class="text-center btn">
        Go to Home
      </Link>
    </div>
  );
}

export default Success;
