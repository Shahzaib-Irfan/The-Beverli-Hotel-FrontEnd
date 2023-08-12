import { React, useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useAuthContext } from "../../../contexts/AuthContext";
import Loading from "../../constants/Loading";
import styled from "styled-components";

const SingleUserBooking = () => {
  const { id } = useParams();
  const {
    setLoading,
    loading,
    userBookings,
    fetchSingleUserBooking,
    roomId,
    setRoomId,
  } = useAuthContext();
  const [requiredRoom, setRequiredRoom] = useState({});

  const fetchRequiredRoom = async (roomId) => {
    try {
      const response = await fetch(
        `http://localhost:4000/getSingleRoom?id=${roomId}`
      );
      console.log(response);
      const data = await response.json();
      console.log("Single Room:", data);
      data && setRequiredRoom(data[0]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchSingleUserBooking(id);
  }, [id]);

  useEffect(() => {
    fetchRequiredRoom(userBookings[0].roomId);
  }, [fetchSingleUserBooking]);

  if (loading) {
    return <Loading />;
  }
  if (!userBookings) {
    return <h2 className="section-title">no booking to display</h2>;
  } else if (userBookings.length !== 0) {
    const { roomNo, image, rate } = requiredRoom;
    const {
      name,
      email,
      contact,
      departureDate,
      departureTime,
      arrivalDate,
      arrivalTime,
      children,
      adults,
    } = userBookings[0];
    return (
      <Wrapper>
        <section className="section room-section">
          <Link to="/userbookings" className="btn btn-primary">
            Back
          </Link>
          <h2 className="section-title">{roomNo}</h2>
          <div className="room">
            <img
              src={image ? `http://localhost:4000/images/${image}` : ""}
              alt={roomNo}
            ></img>
            <div className="room-info">
              <p>
                <span className="room-data">Room No :</span>
                {roomNo}
              </p>
              <p>
                <span className="room-data">Customer Name :</span>
                {name}
              </p>
              <p>
                <span className="room-data">email :</span>
                {email}
              </p>
              <p>
                <span className="room-data">Contact :</span>
                {contact}
              </p>
              <p>
                <span className="room-data">Arrival :</span>
                {arrivalDate.slice(0, 10) + " " + arrivalTime}
              </p>
              <p>
                <span className="room-data">departure :</span>
                {departureDate.slice(0, 10) + " " + departureTime}
              </p>
              <p>
                <span className="room-data">children :</span>
                {children}
              </p>
              <p>
                <span className="room-data">adults :</span>
                {adults}
              </p>
              <p>
                <span className="room-data">Bill :</span>
                {"Rs. " +
                  (Number(departureDate.slice(8, 10)) -
                    Number(arrivalDate.slice(8, 10))) *
                    rate +
                  "/-"}
              </p>
            </div>
          </div>
        </section>
      </Wrapper>
    );
  }
};

const Wrapper = styled.div`
  .room-section {
    text-align: center;
  }

  .section {
    padding: 5rem 0;
  }

  .section-title {
    font-size: 2rem;
    text-transform: capitalize;
    letter-spacing: 0.3rem;
    text-align: center;
    margin-bottom: 3.5rem;
    margin-top: 1rem;
  }

  .room {
    width: 85vw;
    max-width: 1170px;
    margin: 0 auto;
    text-align: left;
  }

  .room img {
    border-radius: 0.25rem;
    width: 100%;
    height: 400px;
  }

  .room p {
    font-weight: bold;
    text-transform: capitalize;
    line-height: 1.8;
  }

  .room span {
    margin-right: 0.5rem;
  }

  .room-data {
    background: #d4e6a5;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    color: #476a2e;
  }

  .room-info {
    padding-top: 2rem;
  }

  @media screen and (min-width: 992px) {
    .room {
      display: grid;
      grid-template-columns: 2fr 3fr;
      gap: 3rem;
      align-items: center;
    }

    .room-info {
      padding-top: 0;
    }
  }

  .btn-primary {
    background: #476a2e;
    color: #fff;
    border-color: transparent;
  }

  .btn-primary:hover {
    background: #d4e6a5;
    color: #476a2e;
  }
  .btn,
  .btn-white,
  .btn-primary {
    text-transform: uppercase;
    letter-spacing: 0.3rem;
    color: #476a2e;
    border: 2px solid #476a2e;
    padding: 0.45rem 0.8rem;
    display: inline-block;
    transition: all 0.3s linear;
    cursor: pointer;
    font-size: 0.8rem;
    background: transparent;
    border-radius: 0.25rem;
    display: inline-block;
  }

  .btn:hover {
    background: #476a2e;
    color: #fff;
  }
`;

export default SingleUserBooking;
