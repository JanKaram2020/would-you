import React, { Component } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import { connect } from "react-redux";
import { setAuthedUser } from "../store/authUser";

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
              <Navbar.Brand href="#home">
                <LinkContainer to="/">
                  <img
                      alt=""
                      src={'/download.png'}
                      width="30"
                      height="30"
                      className="d-inline-block align-top rounded-circle border border-primary"
                  />
                </LinkContainer>
              </Navbar.Brand>
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
            <Navbar.Text>
              {" "}
              Signed in as:  &nbsp;
              <span className="text-primary">
                {this.props.users[this.props.authUser].name}
              </span>{" "}
              &nbsp;
            </Navbar.Text>
            <span>
              <img
                src={this.props.users[this.props.authUser].avatarURL}
                alt={this.props.users[this.props.authUser].name}
                style={{ width: "50px"}}
                className="rounded-circle border border-primary"
              />
              &nbsp; &nbsp;
            </span>
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
function mapStateToProps({ authUser, users }) {
  return { authUser, users };
}
export default connect(mapStateToProps, { setAuthedUser })(Navigation);
