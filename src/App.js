import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Footer from "./components/Footer";

import ListEmployees from "./components/ListEmployees";
import Header from "./components/Header";

import CreateOrUpdateEmployee from "./components/CreateOrUpdateEmployee";

function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <Header />
          <div className="container">
            <Switch>
              <Route path="/" exact component={ListEmployees}></Route>
              <Route path="/employees" component={ListEmployees}></Route>

              <Route
                path="/add-employee/:id"
                component={CreateOrUpdateEmployee}
              ></Route>
              {/* <Route
                path="/update-employee/:id"
                component={UpdateEmployee}
              ></Route> */}
            </Switch>
          </div>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
