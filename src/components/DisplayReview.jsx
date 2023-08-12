import React, { useState, useEffect } from "react";
import styled from "styled-components";

const DisplayReview = ({ _id, userName, review, count }) => {
  if (count === 1)
    return (
      <>
        <SingleReviewWrapper>
          <div className="room-box">
            <div className="info-wrapper">
              <div className="room-name">{userName}</div>
              <div className="review">
                <p>{review}</p>
              </div>
            </div>
          </div>
        </SingleReviewWrapper>
      </>
    );
  else if (count > 1)
    return (
      <>
        <ReviewsWrapper>
          <div className="room-box">
            <div className="info-wrapper">
              <div className="room-name">{userName}</div>
              <div className="review">
                <p>{review}</p>
              </div>
            </div>
          </div>
        </ReviewsWrapper>
      </>
    );
};

const ReviewsWrapper = styled.div`
  width: 45%;
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

  .info-wrapper {
    width: 100%;
    padding: 10px;
    text-align: center;
  }

  .room-name {
    font-size: 1.25rem;
    font-weight: 600;
  }

  .review {
    height: 100px;
    overflow: auto;
  }
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const SingleReviewWrapper = styled.div`
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

  .info-wrapper {
    width: 100%;
    padding: 10px;
    text-align: center;
  }

  .room-name {
    font-size: 1.25rem;
    font-weight: 600;
  }

  .review {
    height: 100px;
    overflow: auto;
  }

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

export default DisplayReview;
