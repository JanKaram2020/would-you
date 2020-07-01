import React, { Component } from "react";
import Navigation from "../components/Navbar";
import Leader from "../components/leader";
import { Row } from "react-bootstrap";
import { connect } from "react-redux";

class Leaderboard extends Component {
  render() {
    const sorted = this.props.usersData.sort(
        (a, b) =>
            ((Object.values(a.answers).length +
                a.questions.length) -
                (Object.values(b.answers).length + b.questions.length))
    ).reverse();
    return (
      <div>
        <Navigation />
        <Row className="justify-content-center">
          {sorted.map((u, i) => (
            <Leader
              number={i}
              key={u.id}
              img={u.avatarURL}
              q={u.questions.length}
              a={Object.values(u.answers).length}
              name={u.name}
            />
          ))}
        </Row>
      </div>
    );
  }
}
function mapStateToProps({ users }) {
  const usersData = Object.values(users);
  return { usersData };
}
export default connect(mapStateToProps)(Leaderboard);
