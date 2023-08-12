import React from "react";
import { Navigate } from "react-router-dom";
// will remove later
import { useAuthContext } from "../contexts/AuthContext";

const AdminPrivateRoute = ({ children }) => {
  const { user } = useAuthContext();
  if (user) {
    if (
      user.email !== "shahzaibirfan1012@gmail.com" ||
      user.email !== "shahzaibtest@mail.com"
    ) {
      return children;
    } else {
      return <Navigate to="/" />;
    }
  } else {
    return <Navigate to="/" />;
  }
};
export default AdminPrivateRoute;
