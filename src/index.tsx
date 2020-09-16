import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'styles/index.less';
import Home from "pages/Home";
import Workshops from 'pages/Workshops';
import Contact from "components/Contact";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/workshops" exact>
            <Workshops />
          </Route>
        </Switch>
      </div>
        <Contact />
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
