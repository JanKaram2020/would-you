import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Add from "./pages/Add";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import NoMatch from "./pages/NoMatch";
import QuestionPage from "./pages/QuestionPage";
import {connect} from "react-redux";
import {handleInitialData} from "./helpers";

class App extends React.Component {
  componentDidMount() {
    this.props.handleInitialData();
  }
  render() {
    // console.log(this.props);
    return (
      <div className="App">
        {this.props.authUser !== "" ? (
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/add">
              <Add />
            </Route>
            <Route exact path="/leaderboard">
              <Leaderboard />
            </Route>
            <Route path="/questions/:id" children={<QuestionPage />} />
            <Route path="/404">
              <NoMatch />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        ) : (
          <Route render={() => <Login />} />
        )}
      </div>
    );
  }
}
function mapStateToProps({authUser}){
  return {authUser};
}
export default connect(mapStateToProps,{handleInitialData})(App);
