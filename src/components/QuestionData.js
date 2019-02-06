import React, { Component } from "react";
import QuestionView from "../pages/Test";
import Loader from "../pages/Loader";

const API_URL = process.env.API_URL,
  API_ACCESS_TOKEN = process.env.API_ACCESS_TOKEN;

class QuestionData extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      errorLoading: false,
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
        this.buildQuestionsObject(data.questions);
        this.setState({
          isLoading: false,
          errorLoading: false
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          isLoading: false,
          errorLoading: true
        });
      });
  }

  handleSubmit = event => {
    event.preventDefault();

    let skippedQuest = this.checkSkippedQuest(this.state.questions);

    this.setState(prevState => {
      const updatedQuestions = prevState.questions.map(item => {
        if (item.answered === false) {
          item["skipped"] = true;
        }
        return item;
      });
      return {
        questions: updatedQuestions
      };
    });

    if (skippedQuest > 0) {
      alert("Please answer all the Questions!");
    } else {
      // Redirect user to success page
      this.props.history.push("/success");
    }
  };

  /*
      Function to get the number of skipped questions
  */
  checkSkippedQuest = questions => {
    let skip_count = 0;
    questions.forEach(function(question) {
      if (question.answered === false) {
        skip_count = skip_count + 1;
      }
    });
    return skip_count;
  };

  /*
      Handle change function to monitor change in state values
  */
  handleChange = id => {
    this.setState(prevState => {
      const updatedQuestions = prevState.questions.map(item => {
        if (item.id === id) {
          item.answered = true;
        }
        if (item.skipped !== undefined && item.id === id) {
          item.skipped = false;
        }
        return item;
      });
      return {
        questions: updatedQuestions
      };
    });
  };

  /*
      Build new array of objects from the retrieved
      Questions
  */
  buildQuestionsObject = questions => {
    let newQuestObj = [];
    for (let i = 0; i < questions.length; i++) {
      newQuestObj.push({
        id: i + 1,
        question: questions[i],
        answered: false
      });
    }
    this.setState({
      questions: newQuestObj
    });
  };

  render() {
    let QuestionComponent = "";
    if (this.state.questions.length) {
      QuestionComponent = this.state.questions.map(item => {
        return (
          <QuestionView
            key={item.id}
            itemlist={item}
            handleChange={this.handleChange}
          />
        );
      });
    }

    return (
      <div className="container question-cont">
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <main>
            {this.state.errorLoading ? (
              <h1>Unable to fetch Question. Please refresh your Browser</h1>
            ) : (
              <div>
                <div>
                  <h3>My view of me</h3>
                </div>
                <div>
                  <form onSubmit={this.handleSubmit}>
                    {QuestionComponent}
                    <div className="form-button text-center">
                      <input type="submit" value="Submit" className="btn" />
                    </div>
                  </form>
                </div>
              </div>
            )}
          </main>
        )}
      </div>
    );
  }
}

export default QuestionData;
