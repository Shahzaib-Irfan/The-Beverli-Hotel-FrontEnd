import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

const Room = ({ _id }) => {
  const { user } = useAuthContext();
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

  useEffect(() => {
    fetchRequiredRoom(_id);
  }, [_id]);
  return (
    <Wrapper>
      <div className="container">
        <img
          src={`http://localhost:4000/images/${requiredRoom.image}`}
          alt={requiredRoom.roomNo}
        />
        {user ? (
          user["email"] === "shahzaibirfan1012@gmail.com" ||
          user["email"] === "shahzaibtest@mail.com" ? (
            <Link to={`/managerooms/${_id}`} className="link">
              <FaSearch />
            </Link>
          ) : (
            <Link to={`/viewrooms/${_id}`} className="link">
              <FaSearch />
            </Link>
          )
        ) : null}
      </div>
      <footer>
        <h5>{requiredRoom.roomNo}</h5>
        <p>Rs. {requiredRoom.rate}/-</p>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .container {
    position: relative;
    background: #222;
    border-radius: 0.25rem;
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: 0.25rem;
    transition: all 0.3s linear;
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: hsl(22, 31%, 52%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: all 0.3s linear;
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: #fff;
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
  }

  footer p {
    color: hsl(22, 31%, 52%);
    letter-spacing: 0.1rem;
  }
`;
export default Room;
