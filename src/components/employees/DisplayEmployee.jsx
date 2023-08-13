import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEmployeesContext } from "../../contexts/EmployeesContext";
const DisplayEmployee = ({
  _id,
  name,
  email,
  contact,
  cnic,
  image,
  salary,
}) => {
  const { handleUpdateDelete, mode } = useEmployeesContext();
  return (
    <>
      <RoomWrapper>
        <div className="room-box">
          <img
            onClick={() => handleUpdateDelete(_id)}
            src={`https://smoggy-cheddar-banon.glitch.me/images/${image}`}
            alt={name}
            style={{ cursor: "pointer" }}
          />
          <div className="room-box-footer">
            <p style={{ color: "green" }}>{name}</p>
            <p style={{ marginLeft: "40px" }}>{"Rs. " + salary + "/-"} </p>
          </div>
          <div>
            <Link to={`/manageemployees/${_id}`} className="btn">
              Details
            </Link>
            {mode === "Update" ? (
              <Link
                to={`/manageemployees/updateemployee/${_id}`}
                className="btn"
              >
                Update
              </Link>
            ) : null}
          </div>
        </div>
      </RoomWrapper>
    </>
  );
};

const RoomWrapper = styled.div`
  .room-box {
    width: 100%;
    margin: 6px;
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .room-box img {
    height: 70%;
    width: 100%;
    object-fit: cover;
    border-radius: 5px 5px 0 0;
  }

  .room-box-footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    gap: 2;
  }
  .btn {
    font-size: 1rem;
    padding: 0.25rem 0.5rem;
  }
  @media (max-width: 768px) {
    .room-box {
      width: 100%;
    }
  }
`;
export default DisplayEmployee;
