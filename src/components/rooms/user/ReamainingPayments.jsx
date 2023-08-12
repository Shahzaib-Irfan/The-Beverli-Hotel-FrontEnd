import React, { useEffect } from "react";
import styled from "styled-components";
import { useAuthContext } from "../../../contexts/AuthContext";
import Loading from "../../constants/Loading";
import Payments from "./Payments";

const RemainingPayments = () => {
  const { loading, remainingPayments, fetchUserPayments } = useAuthContext();

  useEffect(() => {
    fetchUserPayments();
  }, []);

  if (loading) {
    return <Loading />;
  } else if (remainingPayments.length === 0) {
    return (
      <BookingsWrapper>
        <div className="no-rooms">
          <h2>You have not booked any room at the moment!</h2>
        </div>
      </BookingsWrapper>
    );
  } else {
    return (
      <BookingsWrapper>
        <div className="right-top">
          <center style={{ height: "40px" }}>
            <h1>Your Pending Payments</h1>
          </center>
        </div>
        <div className="right-bottom">
          <div className="section">
            <div className="room-container">
              {remainingPayments.map((payment, index) => {
                return (
                  <Payments
                    key={index}
                    {...payment}
                    count={remainingPayments.length}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </BookingsWrapper>
    );
  }
};

const BookingsWrapper = styled.div`
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
`;

export default RemainingPayments;
