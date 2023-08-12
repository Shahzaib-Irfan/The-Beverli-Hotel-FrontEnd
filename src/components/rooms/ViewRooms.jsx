import { React, useEffect, useState } from "react";
import styled from "styled-components";
import { useRoomsContext } from "../../contexts/RoomsContext";
import DisplayRoomUser from "./DisplayRoomUser";
import Loading from "../constants/Loading";
const ViewRooms = () => {
  const { rooms, fetchRooms, loading, setLoading } = useRoomsContext();
  useEffect(() => {
    fetchRooms();
  }, []);
  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <RoomsWrapper>
          <center>
            <h1>Rooms</h1>
          </center>
          <div className="right-bottom">
            <div className="section">
              <div className="room-container">
                {rooms.map((room, index) => {
                  const { _id, roomNo, roomType, rate, image } = room;
                  return (
                    <DisplayRoomUser
                      _id={_id}
                      name={roomNo}
                      roomType={roomType}
                      rate={rate}
                      image={image}
                    />
                  );
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
  .right-bottom {
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    aligh-items: center;
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
export default ViewRooms;
