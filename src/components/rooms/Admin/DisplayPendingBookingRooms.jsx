import { React, useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useRoomsContext } from "../../../contexts/RoomsContext";
const DisplayPendingBookingRooms = ({
  _id,
  roomId,
  name,
  email,
  contact,
  arrivalDate,
  arrivalTime,
  departureDate,
  departureTime,
  children,
  adults,
  approvedStatus,
}) => {
  const [requiredRoom, setRequiredRoom] = useState(null);
  const approveOrReject = async (mode) => {
    try {
      const { roomNo } = requiredRoom;
      let response = await axios.put(
        `https://smoggy-cheddar-banon.glitch.me/approvebooking?id=${_id}&mode=${mode}&email=${email}&name=${name}&arrivalDate=${arrivalDate}&arrivalTime=${arrivalTime}&departureDate=${departureDate}&departureTime=${departureTime}&roomNo=${roomNo}`
      );
    } catch (err) {
      console.log(err);
    }
  };
  const fetchRequiredRoom = async (roomId) => {
    try {
      let response = await axios.get(
        `https://smoggy-cheddar-banon.glitch.me/getSingleRoom?id=${roomId}`
      );
      const data = response.data;
      data && setRequiredRoom(data[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchRequiredRoom(roomId);
  }, [_id]);
  if (requiredRoom !== null) {
    return (
      <>
        <RoomWrapper>
          <div className="room-box">
            <img
              src={`https://smoggy-cheddar-banon.glitch.me/images/${requiredRoom.image}`}
              alt={requiredRoom.roomNo}
              style={{ cursor: "pointer" }}
            />
            <div className="room-box-footer">
              <p style={{ color: "green" }}>{requiredRoom.roomNo}</p>
              <p style={{ marginLeft: "40px" }}>{contact} </p>
            </div>
            <div className="room-box-footer">
              <p style={{ color: "green" }}>
                {arrivalDate.slice(0, 10) + " " + arrivalTime}
              </p>
              <p style={{ marginLeft: "40px", color: "red" }}>
                {departureDate.slice(0, 10) + " " + departureTime}{" "}
              </p>
            </div>
            <div>
              <button
                className="btn"
                onClick={() => approveOrReject("Approve")}
              >
                Approve
              </button>
              <button className="btn" onClick={() => approveOrReject("Reject")}>
                Reject
              </button>
            </div>
          </div>
        </RoomWrapper>
      </>
    );
  }
};

const RoomWrapper = styled.div`
  width: 25%;
  margin: 6px;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  display: flex;
  posistion: relative;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1192px) {
    width: 40%;
  }
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
    width: 100%;
    flex-direction: column;
  }
`;
export default DisplayPendingBookingRooms;
