import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

class Question extends Component {
  render() {
    return (
      <div>
        <Card className="text-center" style={{ marginTop: "10px" }}>
          <Card.Header>
            <img
              src={`${this.props.img}`}
              style={{ width: "40px", borderRadius: "50%" }}
              alt={this.props.Author}
            />
            <strong> {" " + this.props.Author}</strong> asks
          </Card.Header>
          <Card.Body>
            <Card.Title><span className="text-primary">Would you rather</span></Card.Title>
            <h1 className="d-inline-block">{`${this.props.op1} `}</h1>
            <span className="text-primary"> &nbsp; or &nbsp;</span>
            <h1 className="d-inline-block"> {`${this.props.op2}`}</h1>
            <Card.Body>
              <Link
                to={"questions/" + this.props.id}
                className="btn btn-primary"
              >
                {this.props.Answer ? `Answer` : `Show results`}
              </Link>
            </Card.Body>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default Question;
