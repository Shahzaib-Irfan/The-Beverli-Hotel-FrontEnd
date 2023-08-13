import { React, createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const EmployeesContextProvider = createContext();

const EmployeesContext = ({ children }) => {
  //const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState("");
  const fetchEmployees = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://smoggy-cheddar-banon.glitch.me/employees/getemployees"
      );
      const data = await response.data;
      console.log(data);
      setEmployees(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching employees:", error);
    }
  };
  const handleUpdateDelete = async (id) => {
    if (mode === "Update") {
      // try {
      //   const response = await axios.get(
      //     `http://localhost:4000/UpdateRoom?id=${id}`
      //   );
      // } catch (error) {
      //   console.error("Error updating room:", error);
      // }
    } else if (mode === "Delete") {
      try {
        const response = await axios.get(
          `https://smoggy-cheddar-banon.glitch.me/employees/deleteemployee?id=${id}`
        );
      } catch (error) {
        console.error("Error deleting room:", error);
      }
    }
  };
  return (
    <EmployeesContextProvider.Provider
      value={{
        employees,
        setEmployees,
        loading,
        setLoading,
        mode,
        setMode,
        fetchEmployees,
        handleUpdateDelete,
      }}
    >
      {children}
    </EmployeesContextProvider.Provider>
  );
};

export const useEmployeesContext = () => {
  return useContext(EmployeesContextProvider);
};
export { EmployeesContext, EmployeesContextProvider };
