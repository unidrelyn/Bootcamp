import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "../Screens/Header";
import Login from "../Routes/PrivateRoute/ejemplo";
//import PrivateRoute from "./PrivateRoute";
//import TodoList from "../Screens/Home/components/TodoList"

function RoutesApp () {
  return (
    <Router>
      <div>
        <Header />
        <Route component={Login} />
      </div>
    </Router>
  );
}

export default RoutesApp;