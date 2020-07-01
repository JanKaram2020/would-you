import React, { Component } from "react";
import { Badge, Card } from "react-bootstrap";
class Leader extends Component {
  render() {
    const numberGenerator = (n) => {
      // eslint-disable-next-line default-case
      switch (n) {
        case 1:
          return "First";
        case 2:
          return "Second";
        case 3:
          return "Third";
      }
    };
    return (
      <div >
        <Card
          style={{
            width: "20rem",
            marginLeft: "20px",
            display: "inline-block",
          }}
          className="border border-primary"
        >
          <Card.Img variant="top" src={`${this.props.img}`} />
          <Card.Body>
            <Badge variant="primary">
              {numberGenerator(this.props.number + 1)}
            </Badge>
            <h1> {this.props.name}</h1>
            <Card.Text>
              Questions: <span className="text-primary font-weight-bold"> {this.props.q}</span>{" "}
              <br />
              Answers: <span className="text-primary font-weight-bold"> {this.props.a}</span>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Leader;
