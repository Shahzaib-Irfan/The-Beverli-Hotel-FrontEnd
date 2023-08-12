import React, { useEffect } from "react";
import styled from "styled-components";
import { useRoomsContext } from "../../../contexts/RoomsContext";
import Loading from "../../constants/Loading";
import DisplayApprovedBooking from "./DisplayApprovedBooking";

const ApprovedBookings = () => {
  const { approvedBookings, fetchApprovedBookings, loading } =
    useRoomsContext();

  useEffect(() => {
    fetchApprovedBookings();
  }, []);

  if (loading) {
    return <Loading />;
  } else if (approvedBookings.length === 0) {
    return (
      <RoomsWrapper>
        <div className="no-rooms">
          <h2>No bookings are approved at the moment!</h2>
        </div>
      </RoomsWrapper>
    );
  } else {
    return (
      <RoomsWrapper>
        <div className="right-top">
          <center style={{ height: "40px" }}>
            <h1>Approved Bookings</h1>
          </center>
        </div>
        <div className="right-bottom">
          <div className="section">
            <div className="room-container">
              {approvedBookings.map((booking, index) => {
                return <DisplayApprovedBooking {...booking} count={approvedBookings.length} />;
              })}
            </div>
          </div>
        </div>
      </RoomsWrapper>
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

  .right-top {
    height: 45%;
  }

  .right-bottom {
    position: relative;
    height: 55%;
    display: flex;
    flex-direction: row;
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

  @media(max-width: 768px){
    .right-bottom{
      flex-direction: column;
    }
  }
`;

export default ApprovedBookings;
