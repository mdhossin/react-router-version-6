// import { CircularProgress } from "@mui/material";
import React from "react";
import { Navigate, useLocation } from "react-router";

// import useAuth from "../../../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
    // ekahane isloading ta useAuth thake asbe
//   const { user, isLoading } = useAuth();
  let location = useLocation();
//   if (isLoading) {
//     return <CircularProgress></CircularProgress>;
//   }
// just for practice
let user = true
  if (user) {
    return children;
  }
  return <Navigate to="/home" state={{ from: location }} />;
};
export default PrivateRoute;