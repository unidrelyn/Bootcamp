import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  withRouter
} from "react-router-dom";

import PrivateRoute from "./layout";

import styles from "./styles.module.scss";

function AuthExample() {
  return (
    <Router>
      <div>
        <AuthButton />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const AuthButton = withRouter(
  ({ history }) =>
    fakeAuth.isAuthenticated ? (

      <PrivateRoute path="/TodoList" fakeAuth={fakeAuth} history={history} />
      /*<p>
        Welcome!{" "}
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push("/"));
          }}
        >
          Sign out
        </button>
      </p>*/
    ) : (
      <Redirect to={"/login"} />
    )
);

class Login extends Component {
  state = { redirectToReferrer: false };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {

    let { from } = this.props.location.state || { from: { pathname: "/" } };
    let { redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <div className={styles.login}>
        <label className={styles.info}>
          E-Mail
        </label>
        <input name="email"  type="text" placeholder="email" />
        <label className={styles.info}>
          Password
        </label>
        <input name="password"  type="password" placeholder="*****" />
        <button className={styles.button} onClick={this.login}>Log in</button>
      </div>
    );
  }
}

export default AuthExample;