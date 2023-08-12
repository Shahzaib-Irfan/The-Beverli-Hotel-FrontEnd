import React, { useEffect } from "react";
import styled from "styled-components";
import { useRoomsContext } from "../../../contexts/RoomsContext";
import Loading from "../../constants/Loading";
import DisplayPendingBookingRooms from "./DisplayPendingBookingRooms";

const PendingBookings = () => {
  const { pendingBookings, fetchPendingBookings, loading } = useRoomsContext();

  useEffect(() => {
    fetchPendingBookings();
  }, []);

  if (loading) {
    return <Loading />;
  } else if (pendingBookings.length === 0) {
    return (
      <RoomsWrapper>
        <div className="no-rooms">
          <h2>No rooms available for approval at the moment!</h2>
        </div>
      </RoomsWrapper>
    );
  } else {
    return (
      <>
        <center>
          <h1>Approve Pending Bookings</h1>
        </center>
        <RoomsWrapper>
          <div className="right-bottom">
            <div className="section">
              <div className="room-container">
                {pendingBookings.map((booking, index) => {
                  const {
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
                  } = booking;
                  return <DisplayPendingBookingRooms {...booking} />;
                })}
              </div>
            </div>
          </div>
        </RoomsWrapper>
      </>
    );
  }
};

const RoomsWrapper = styled.div`
  position: relative;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .right-bottom {
    position: relative;
    display: flex;
    flex-direction: row;
    gap: 2rem;
    justify-content: space-between;
    align-items: center;
  }

  .section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  .room-container {
    max-width: 100%;
    display: flex;
    flex-direction: row;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 768px) {
    .right-bottom {
      flex-direction: column;
    }
  }
`;

export default PendingBookings;
