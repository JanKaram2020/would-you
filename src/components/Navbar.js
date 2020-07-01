import React, { Component } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import {connect} from "react-redux";
import {setAuthedUser} from "../store/authUser";

class Navigation extends Component {
  logout = () => {
    const { setAuthedUser } = this.props;
    setAuthedUser("");
  };
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/add">
                <Nav.Link>Add</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/leaderboard">
                <Nav.Link>Leaderboard</Nav.Link>
              </LinkContainer>
            </Nav>
            <Navbar.Text>Signed in as: {this.props.authUser}  &nbsp; &nbsp;</Navbar.Text>
            <button className="btn btn-outline-primary" onClick={this.logout}>
              {" "}
              Logout{" "}
            </button>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
function mapStateToProps({authUser}) {
  return {authUser};
}
export default connect(mapStateToProps, {setAuthedUser})(Navigation);
//Todo: needs authedUser