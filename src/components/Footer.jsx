import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <div>
        <h5>
          &copy; {new Date().getFullYear()}
          <span> The Beverly Hills </span>
        </h5>
      </div>
      <div>
        <h5>All rights reserved</h5>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  position: sticky;
  bottom: 0;
  height: 5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #222;
  text-align: center;
  span {
    color: hsl(22, 31%, 52%);
  }
  h5 {
    color: #fff;
    margin: 0.1rem;
    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  margin-top: 8rem; /* Negative margin to pull footer back up */
  z-index: 1; /* Ensure the footer is above the content */
  @media (min-width: 776px) {
    flex-direction: row;
  }
`;

export default Footer;
