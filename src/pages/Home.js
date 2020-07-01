import React, { Component } from "react";
import Navigation from "../components/Navbar";
import { Tabs, Tab } from "react-bootstrap";
import Question from "../components/Question";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    console.log("answered are", this.props.answered);
    console.log("unanswered are", this.props.unanswered);
    return (
      <div>
        <Navigation />
        <div className="w-50 mx-auto">
          <Tabs defaultActiveKey="Unanswered" id="uncontrolled-tab-example">
            <Tab eventKey="Unanswered" title="Unanswered">
              {this.props.unanswered.map((q) => (
                <Question
                    Answer
                  Author={this.props.users[q.author].name}
                  op1={q.optionOne.text}
                  op2={q.optionTwo.text}
                  img={this.props.users[q.author].avatarURL}
                  id={q.id}
                  key={q.id}
                />
              ))}
            </Tab>
            <Tab eventKey="Answered" title="Answered">
              {this.props.answered.map((q) => (
                <Question

                  Author={this.props.users[q.author].name}
                  op1={q.optionOne.text}
                  op2={q.optionTwo.text}
                  img={this.props.users[q.author].avatarURL}
                  id={q.id}
                  key={q.id}
                />
              ))}
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ authUser, users, questions }) {
  const ansId = Object.keys(users[authUser].answers);
  const unAnsId = Object.keys(questions).filter((q) => !ansId.includes(q));
  const answered = Object.values(questions)
    .filter((question) => ansId.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);
  const unanswered = Object.values(questions)
    .filter((question) => unAnsId.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);
  return {
    answered,
    unanswered,
    users,
  };
}
export default connect(mapStateToProps)(Home);
// TODO: needs questions from questions
