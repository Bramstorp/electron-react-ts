import React, { FunctionComponent } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import { ProfileDemo } from "./modules/ProfileDemo";

export const Profile: FunctionComponent = () => {
  let { url } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${url}`} exact={true} component={ProfileDemo} />
    </Switch>
  );
};
