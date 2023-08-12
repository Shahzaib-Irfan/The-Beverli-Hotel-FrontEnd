import React from "react";
import { Navigate } from "react-router-dom";
// will remove later
import { useAuthContext } from "../contexts/AuthContext";

const UserPrivateRoute = ({ children }) => {
  const { user } = useAuthContext();
    if (!user) {
        return <Navigate to="/" />;
    }
    return children;
};
export default UserPrivateRoute;
