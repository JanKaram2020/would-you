import React, { useState } from "react";
import Navigation from "../components/Navbar";
import { useParams, Redirect } from "react-router-dom";
import { Card, Row, ProgressBar, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { handleAnswerQuestion } from "../helpers";

function QuestionPage(props) {
  const { id } = useParams();
  const q = props.questions[id];
  const [option, setOption] = useState("");
  if (!Object.keys(props.questions).includes(id)) {
    return <Redirect to="/404" />;
  }
  if (props.ansId.includes(id)) {
    const percentage = Math.round(
      (q.optionOne.votes.length * 100) /
        (q.optionOne.votes.length + q.optionTwo.votes.length)
    );
    return (
      <div>
        <Navigation />
        <Container>
          <Card className="text-center" style={{ marginTop: "10px" }}>
            <Card.Header>
              <img
                src={props.users[q.author].avatarURL}
                style={{ width: "40px", borderRadius: "50%" }}
                alt={props.users[q.author].name}
              />
              <strong> {props.users[q.author].name}</strong> asks
            </Card.Header>
            <Card.Body>
              <Card.Title>
                <span className="text-primary">Would you rather</span>
              </Card.Title>
              <h1 className="d-inline-block">{q.optionOne.text}</h1> or{" "}
              <h1 className="d-inline-block"> {q.optionTwo.text}</h1>
            </Card.Body>
            <Row className="justify-content-center">
              <h5>
                {q.optionOne.votes.includes(props.authUser) ? (
                  <span className="text-primary">
                    {" "}
                    you choose to {q.optionOne.text}
                  </span>
                ) : (
                  <span className="text-warning">
                    {" "}
                    you choose to {q.optionTwo.text}
                  </span>
                )}
              </h5>
              <ProgressBar style={{ width: "90%" }}>
                <ProgressBar
                  animated
                  now={percentage}
                  label={`${percentage}% ${q.optionOne.text}`}
                />
                <ProgressBar
                  animated
                  variant="warning"
                  now={100 - percentage}
                  label={`${100 - percentage}% ${q.optionTwo.text}`}
                />
              </ProgressBar>
            </Row>
          </Card>
        </Container>
      </div>
    );
  } else {
    const handleSubmit = (e) => {
      e.preventDefault();
      props.handleAnswerQuestion(props.authUser, q.id, option);
    };
    return (
      <div>
        <Navigation />
        <div className="container">
          <div className="mt-1 text-center">
            <p>Answer the question:</p>
            <img
              src={props.users[q.author].avatarURL}
              style={{ width: "100px", borderRadius: "50%" }}
              alt={props.users[q.author].name}
            />
            <p>
              <strong>{props.users[q.author].name}</strong> asks
            </p>
            <h3>
              <strong>Would you rather...</strong>
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value={q.optionOne.text}
                      onChange={() => {
                        setOption("optionOne");
                      }}
                    />
                    <label className="form-check-label" htmlFor="inlineRadio1">
                      {q.optionOne.text}
                    </label>
                  </div>
                </div>
                <h2> OR </h2>
                <div className="col">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value={q.optionTwo.text}
                      onChange={() => {
                        setOption("optionTwo");
                      }}
                    />
                    <label className="form-check-label" htmlFor="inlineRadio1">
                      {q.optionTwo.text}
                    </label>
                  </div>
                </div>
              </div>
              <input
                type="submit"
                className="mt-2 btn btn-primary btn-lg btn-block"
                disabled={option === ""}
                value="Submit Answer"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ users, questions, authUser }) {
  const ansId = Object.keys(users[authUser].answers);
  const unAnsId = Object.keys(questions).filter((q) => !ansId.includes(q));
  return {
    users,
    questions,
    authUser,
    ansId,
    unAnsId,
  };
}
export default connect(mapStateToProps, { handleAnswerQuestion })(QuestionPage);
