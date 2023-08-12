import React, { useEffect } from "react";
import styled from "styled-components";
import { useAuthContext } from "../contexts/AuthContext";
import Loading from "./constants/Loading";
import DisplayReview from "./DisplayReview";

const ViewReviews = () => {
  const { fetchGivenReviews, loading, reviews } = useAuthContext();

  useEffect(() => {
    fetchGivenReviews();
  }, []);

  if (loading) {
    return <Loading />;
  } else if (reviews.length === 0) {
    return (
      <ReviewsWrapper>
        <div className="no-rooms">
          <h2>No Reviews are found at the moment!</h2>
        </div>
      </ReviewsWrapper>
    );
  } else {
    return (
      <ReviewsWrapper>
        <div className="right-top">
          <center style={{ height: "40px" }}>
            <h1>Vistor Reviews</h1>
          </center>
        </div>
        <div className="right-bottom">
          <div className="section">
            <div className="room-container">
              {reviews.map((review, index) => {
                return <DisplayReview {...review} count={reviews.length} />;
              })}
            </div>
          </div>
        </div>
      </ReviewsWrapper>
    );
  }
};

const ReviewsWrapper = styled.div`
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

export default ViewReviews;
