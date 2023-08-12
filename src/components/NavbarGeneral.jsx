import React from "react";
import Navbar from "./Navbar";
import AdminNavbar from "./AdminNavbar";
import UserNavbar from "./UserNavbar";
import { useAuthContext } from "../contexts/AuthContext";
const NavbarGeneral = () => {
  const { isAuthenticated, user } = useAuthContext();
  return (
    <>
      {!isAuthenticated ? (
        <Navbar />
      ) : user.email === "shahzaibirfan1012@gmail.com" ? (
        <AdminNavbar />
      ) : (
        <UserNavbar />
      )}
    </>
  );
};

export default NavbarGeneral;
