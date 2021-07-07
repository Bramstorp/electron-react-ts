import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { Home } from "./Home/Home";
import { Profile } from "./Profile/Profile";

function App() {
  return (
    <BrowserRouter basename={"/"}>
      <Layout>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/profile" exact={true} component={Profile} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
