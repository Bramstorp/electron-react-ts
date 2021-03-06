import React, { FunctionComponent } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import { HomeDemo } from "./modules/HomeDemo";

export const Home: FunctionComponent = () => {
  let { url } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${url}`} exact={true} component={HomeDemo} />
    </Switch>
  );
};
