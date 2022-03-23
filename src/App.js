import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Claim from "./components/pages/Claim";
import Policy from "./components/pages/Policy";
import Contact from "./components/pages/Contact";
import Profile from "./components/pages/Profile";
import EDocument from "./components/pages/EDocument";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact={true} component={Home}></Route>
            <Route path="/claim" component={Claim}></Route>
            <Route path="/policy" component={Policy}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/profile" component={Profile}></Route>
            <Route path="/e-document" component={EDocument}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
