import React from "react";
import { Route } from "react-router-dom";

const SpecialRoute = ({ component: Component, ...rest }) => {
  return (
    <>
      <Route {...rest} render={(props) => <Component {...rest} {...props} />} />
    </>
  );
};
export default SpecialRoute;
