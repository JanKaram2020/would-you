import React, { Component } from "react";
import Navigation from "../components/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import { Button } from "react-bootstrap";

class NoMatch extends Component {
  render() {
    return (
      <div className="text-center">
        <Navigation />
        <h3 className="text-center"> Ooops , wrong url </h3>
        <LinkContainer to="/">
          <Button size="lg">Home</Button>
        </LinkContainer>
      </div>
    );
  }
}
export default NoMatch;
