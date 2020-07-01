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
      <div className="container text-center">
        <form onSubmit={this.submitHandler}>
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label column="">
              <h4>Select your user name</h4>
            </Form.Label>
            <Form.Control as="select" custom onChange={this.changeHandler}>
              <option value="">...</option>
              {this.props.users.map((u) => (
                <option key={u.id} value={u.name}>
                  {u.name}
                </option>
              ))}
              {/*<option value="jan1">1</option>*/}
              {/*<option value="jan2">2</option>*/}
              {/*<option value="jan3">3</option>*/}
              {/*<option value="jan4">4</option>*/}
              {/*<option value="jan5">5</option>*/}
            </Form.Control>
          </Form.Group>
          <input type="submit" className="btn btn-outline-primary btn-lg" disabled={disabled}/>
        </form>
      </div>
    );
  }
}
function mapStateToProps({ authUser, users }) {
  return { authUser, users: Object.values(users) };
}
export default connect(mapStateToProps, { setAuthedUser })(Login);
// TODO: needs list of users, setAuthUserAction
