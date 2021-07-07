import React, { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const Layout: FunctionComponent = (props) => (
  <div>
    <div className="container">{props.children}</div>
  </div>
);
