import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import { setAuthedUser } from "../store/authUser";

class Login extends Component {
  state = {
    user: "",
  };
  changeHandler = (e) => {
    this.setState({
      user: e.target.value,
    });
  };
  submitHandler = (e) => {
    e.preventDefault();
    const { setAuthedUser } = this.props;
    setAuthedUser(this.state.user);
  };
  render() {
    const disabled = this.state.user === "";
    return (
      <div className="container text-center mt-2">
        <h1> Would you rather </h1>
        <img
          src={"/download.png"}
          // src={process.env.PUBLIC_URL + "/download.png"}
          style={{ width: "200px" }}
          alt="Would you rather logo"
          className="border border-primary rounded-circle"
        />
        <form onSubmit={this.submitHandler}>
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label column="">
              <h4>Select your user name</h4>
            </Form.Label>
            <Form.Control as="select" custom onChange={this.changeHandler}>
              <option value="" disabled={this.state.user !== ""}>
                ...
              </option>
              {this.props.users.map((u) => (
                <option key={u.id} value={u.id}>
                  {u.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <input
            type="submit"
            style={{ width: "200px" }}
            className="btn btn-outline-primary btn-lg"
            disabled={disabled}
          />
        </form>
        <p className="text-muted mt-5">
          {" "}
          "Would you rather" is a conversation or party game that poses a
          dilemma in the form of a question beginning with "would you rather".
          The dilemma can be between two supposedly good options such as "Would
          you rather have the power of flight or the power of invisibility?",
          two attractive choices such as "Would you rather have money or have
          fame?", or two supposedly bad options such as "Would you rather sleep
          with your best friend's lover or your lover's best friend?" The
          players, sometimes including the questioner, then must choose their
          answers. Answering "neither" or "both" is against the rules. This
          leads the players to debate their rationales.
        </p>
      </div>
    );
  }
}
function mapStateToProps({ authUser, users }) {
  return { authUser, users: Object.values(users) };
}
export default connect(mapStateToProps, { setAuthedUser })(Login);
