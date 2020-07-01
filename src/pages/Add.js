import React, { Component } from "react";
import Navigation from "../components/Navbar";
import {connect} from "react-redux";
import {handleSaveQuestion} from "../helpers";
import { Redirect } from "react-router-dom";

class Add extends Component {
  state = {
    option1: "",
    option2: "",
    done:false
  };
  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { option1, option2 } = this.state;
    this.props.handleSaveQuestion(option1, option2, this.props.authUser);
    this.setState({
      option1: "",
      option2: "",
      done: true
    });
  };
  render() {
    if(this.state.done){return (<Redirect to="/"/>)}
    const disabled = this.state.option1 === "" || this.state.option2 === "";
    return (
      <div>
        <Navigation />
        <div className="container">
          <div className="mt-1 text-center">
            <p>Complete the question:</p>
            <h3>
              <span className="text-primary font-weight-bold">Would you rather... </span>
            </h3>
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col">
                  <input
                      id="option1"
                      placeholder="Enter option one..."
                      onChange={this.handleChange}
                      required
                      value={this.state.option1}
                      className="form-control"
                  />
                </div>
                <h2> OR </h2>
                <div className="col">
                  <input
                      id="option2"
                      placeholder="Enter option two..."
                      onChange={this.handleChange}
                      required
                      value={this.state.option2}
                      className="form-control"
                  />
                </div>
              </div>
              <input
                  type="submit"
                  disabled={disabled}
                  className="mt-2 btn btn-primary btn-lg btn-block"
                  value="Add Question"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps({authUser}){
  return {authUser};
}
export default connect(mapStateToProps, {handleSaveQuestion})(Add);
