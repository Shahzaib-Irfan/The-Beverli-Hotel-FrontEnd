import { React, useState } from "react";
import Image1 from "../../assets/employees.jpg";
import Image2 from "../../assets/employee.jpg";

import styled from "styled-components";

const AddEmployee = () => {
  return (
    <>
      <AddEmployeeContainer>
        <article className="img-container">
          <img src={Image1} alt="" className="main-img" />
          <img src={Image2} alt="" className="accent-img" />
        </article>
        <article className="form-article">
          <form
            action="https://smoggy-cheddar-banon.glitch.me/employees/addemployee"
            method="post"
            encType="multipart/form-data"
          >
            <div class="form-floating mb-3">
              <input
                type="text"
                name="name"
                class="form-control"
                id="floatingInput"
                placeholder="Name"
              />
              <label for="floatingInput">Name.</label>
            </div>
            <div class="form-floating mb-3" style={{ marginTop: "5px" }}>
              <input
                type="text"
                name="email"
                class="form-control"
                id="InputEmail"
                placeholder="Email"
              />
              <label for="InputEmail">Email</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                name="contact"
                class="form-control"
                id="InputEmployeeContact"
                placeholder="Employee Contact"
              />
              <label for="InputEmployeeContact">Contact</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                name="cnic"
                class="form-control"
                id="InputEmployeeCNIC"
                placeholder="Employee CNIC"
              />
              <label for="InputEmployeeCNIC">CNIC</label>
            </div>
            <div style={{ marginTop: "10px" }}>
              <input
                type="file"
                id="imageUpload"
                name="image"
                accept="image/*"
              />
            </div>
            <div style={{ margin: "10px 0px 0px 10px" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <label htmlFor="rate">Salary</label>
                <input
                  style={{ margin: "0px 0px 0px 10px" }}
                  type="number"
                  id="rate"
                  name="salary"
                />
              </div>
            </div>
            <button className="cool-button" type="submit">
              Add Employee
            </button>
          </form>
        </article>
      </AddEmployeeContainer>
    </>
  );
};

const AddEmployeeContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  .img-container {
    width: 50%;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
  }

  .main-img {
    width: 100%;
    height: 550px;
    object-fit: cover;
    border-radius: 10px;
  }

  .accent-img {
    position: absolute;
    bottom: 0;
    right: -25px;
    width: 250px;
    border-radius: 10px;
  }

  .form-article {
    flex: 1;
    padding: 3rem;
    max-width: 500px;
  }

  .form-floating {
    margin-bottom: 1.5rem;
  }

  .form-control {
    width: 100%;
    padding: 1rem;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  label {
    font-size: 16px;
  }

  /* Base styles for the cool submit button */
  .cool-button {
    margin-top: 10px;
    display: inline-block;
    padding: 12px 24px;
    background-color: #4caf50; /* Green background color */
    color: #fff; /* Text color */
    border: none;
    border-radius: 30px;
    font-size: 16px;
    cursor: pointer;
    outline: none;
    transition: background-color 0.3s ease;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  }

  /* Gradient background effect */
  .cool-button {
    background-image: linear-gradient(to right, #4caf50, #63a69f);
  }

  /* Hover effect */
  .cool-button:hover {
    background-image: linear-gradient(to right, #63a69f, #4caf50);
  }

  /* Optional: Add a box-shadow on hover for an additional effect */
  .cool-button:hover {
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 992px) {
    flex-direction: column;

    .img-container {
      width: 100%;
      max-height: 400px;
    }

    .main-img {
      height: 100%;
    }

    .accent-img {
      display: none;
    }

    .form-article {
      padding: 2rem;
    }
  }
`;

export default AddEmployee;
