import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import UserContext from "../../helpers/UserContext";

const ProtectedRoute = ({ exact, path, children }) => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Redirect to="/login" />
  }

  // console.log(user)

  return (
    <Route exact={exact} path={path}>
      {children}
    </Route>
  );
}

export default ProtectedRoute;