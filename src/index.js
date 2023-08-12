import React from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import { AuthContext } from "./contexts/AuthContext";
import { RoomsContext } from "./contexts/RoomsContext";
import { EmployeesContext } from "./contexts/EmployeesContext";

const root = createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain={process.env.REACT_APP_DOMAIN_ID}
    clientId={process.env.REACT_APP_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
    cacheLocation="localstorage"
  >
    <AuthContext>
      <RoomsContext>
        <EmployeesContext>
          <App />
        </EmployeesContext>
      </RoomsContext>
    </AuthContext>
  </Auth0Provider>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
