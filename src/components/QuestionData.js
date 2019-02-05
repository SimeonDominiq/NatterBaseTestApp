import React, { Component } from "react";
import QuestionView from "../pages/Test";

const API_URL = process.env.API_URL,
  API_ACCESS_TOKEN = process.env.API_ACCESS_TOKEN;

class QuestionData extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      questions: {}
    };
  }

  componentDidMount() {
    fetch(API_URL, {
      method: "GET",
      headers: {
        "x-access-token": API_ACCESS_TOKEN
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          questions: data.questions
        });
      });
  }

  render() {
    console.log(this.state.questions);
    let QuestionComponent = "",
      key_id = 0;
    if (this.state.questions.length) {
      QuestionComponent = this.state.questions.map(item => {
        return <QuestionView key={key_id++} itemlist={item} />;
      });
    }

    return (
      <div className="container question-cont">
        <div>
          <h4>My view of me</h4>
        </div>
        <div>{QuestionComponent}</div>
      </div>
    );
  }
}

export default QuestionData;
