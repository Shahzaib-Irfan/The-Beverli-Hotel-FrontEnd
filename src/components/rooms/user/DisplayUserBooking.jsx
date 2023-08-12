import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

const DisplayUserBooking = ({
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
  count,
}) => {
  const [requiredRoom, setRequiredRoom] = useState({});

  const fetchRequiredRoom = async (roomId) => {
    try {
      let response = await axios.get(
        `http://localhost:4000/getSingleRoom?id=${roomId}`
      );
      const data = response.data;
      data && setRequiredRoom(data[0]);
    } catch (err) {
      console.log(err);
    }
  };

  const Pay = async (roomId) => {
    try {
      let response = await axios.post(`http://localhost:4000/pay?id=${roomId}`);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchRequiredRoom(roomId);
  }, [_id]);

  if (count === 1)
    return (
      <>
        <SingleRoomWrapper>
          <div className="room-box">
            <div className="image-wrapper">
              <img
                src={`http://localhost:4000/images/${requiredRoom.image}`}
                alt={requiredRoom.roomNo}
              />
            </div>
            <div className="info-wrapper">
              <div className="room-name">{requiredRoom.roomNo}</div>
              <div className="room-dates">
                <div className="arrival">
                  <span className="label">Arrival:</span>
                  <span className="value">
                    {arrivalDate.slice(0, 10) + " " + arrivalTime}
                  </span>
                </div>
                <div className="departure">
                  <span className="label">Departure:</span>
                  <span className="value">
                    {departureDate.slice(0, 10) + " " + departureTime}
                  </span>
                </div>
                <div className="arrivalStatus">
                  <span className="label">Status:</span>
                  {approvedStatus ? (
                    <span className="value" style={{ color: "green" }}>
                      Approved
                    </span>
                  ) : (
                    <span className="value" style={{ color: "darkorange" }}>
                      Pending
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="interactions">
              <Link className="details-btn" to={`/userbookings/${_id}`}>
                Details
              </Link>
              {/* Add booking button */}
            </div>
          </div>
        </SingleRoomWrapper>
      </>
    );
  else if (count > 1)
    return (
      <>
        <RoomWrapper>
          <div className="room-box">
            <div className="image-wrapper">
              <img
                src={`http://localhost:4000/images/${requiredRoom.image}`}
                alt={requiredRoom.roomNo}
              />
            </div>
            <div className="info-wrapper">
              <div className="room-name">{requiredRoom.roomNo}</div>
              <div className="room-dates">
                <div className="arrival">
                  <span className="label">Arrival:</span>
                  <span className="value">
                    {arrivalDate.slice(0, 10) + " " + arrivalTime}
                  </span>
                </div>
                <div className="departure">
                  <span className="label">Departure:</span>
                  <span className="value">
                    {departureDate.slice(0, 10) + " " + departureTime}
                  </span>
                </div>
                <div className="arrivalStatus">
                  <span className="label">Status:</span>
                  {approvedStatus ? (
                    <span className="value" style={{ color: "green" }}>
                      Approved
                    </span>
                  ) : (
                    <span className="value" style={{ color: "darkorange" }}>
                      Pending
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="interactions">
              <Link className="details-btn" to={`/userbookings/${_id}`}>
                Details
              </Link>
              {/* Add booking button */}
            </div>
          </div>
        </RoomWrapper>
      </>
    );
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
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .image-wrapper {
    width: 100%;
    height: 180px;
    overflow: hidden;
    border-radius: 5px 5px 0 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.2s, opacity 0.2s;
    }
  }

  .info-wrapper {
    width: 100%;
    padding: 10px;
    text-align: center;
  }

  .room-name {
    font-size: 1.25rem;
    font-weight: 600;
  }

  .room-dates {
    display: flex;
    flex-direction: column;
    gap: 5px;
    color: #555555;
  }

  .arrival,
  .departure,
  .arrivalStatus {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .label {
    font-size: 0.9rem;
    font-weight: 600;
    color: #999999;
  }

  .value {
    font-size: 0.9rem;
  }

  .interactions {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }

  .details-btn {
    display: inline-block;
    padding: 8px 20px;
    background-color: #3498db;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    text-decoration: none;
    transition: background-color 0.2s;
    cursor: pointer;

    &:hover {
      background-color: #2980b9;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const SingleRoomWrapper = styled.div`
  width: 100%;
  margin: 6px;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .room-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .image-wrapper {
    width: 100%;
    height: 180px;
    overflow: hidden;
    border-radius: 5px 5px 0 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.2s, opacity 0.2s;
    }
  }

  .info-wrapper {
    width: 100%;
    padding: 10px;
    text-align: center;
  }

  .room-name {
    font-size: 1.25rem;
    font-weight: 600;
  }

  .room-dates {
    display: flex;
    flex-direction: column;
    gap: 5px;
    color: #555555;
  }

  .arrival,
  .departure,
  .arrivalStatus {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .label {
    font-size: 0.9rem;
    font-weight: 600;
    color: #999999;
  }

  .value {
    font-size: 0.9rem;
  }

  .interactions {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }

  .details-btn {
    display: inline-block;
    padding: 8px 20px;
    background-color: #3498db;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    text-decoration: none;
    transition: background-color 0.2s;
    cursor: pointer;

    &:hover {
      background-color: #2980b9;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

export default DisplayUserBooking;
