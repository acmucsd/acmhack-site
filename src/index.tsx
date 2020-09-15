import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'styles/index.less';
import Home from "pages/Home";
import Contact from "components/Contact";
import WorkshopPage from "pages/Workshops";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/workshops" exact>
            <WorkshopPage />
          </Route>
        </Switch>
        <Contact />
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
