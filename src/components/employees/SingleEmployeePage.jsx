import { React, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useEmployeesContext } from "../../contexts/EmployeesContext";
import Loading from "../constants/Loading";
import styled from "styled-components";

const SingleEmployee = () => {
  const { id } = useParams();
  const { setLoading, loading, employees, setEmployees } =
    useEmployeesContext();
  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/employees/getSingleEmployee?id=${id}`
      );
      const data = await response.json();
      console.log(data);
      setEmployees(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  if (!employees) {
    return <h2 className="section-title">no Employee to display</h2>;
  } else {
    const { name, email, contact, image, cnic, salary } = employees[0];
    return (
      <Wrapper>
        <section className="section room-section">
          <Link to="/manageemployees" className="btn btn-primary">
            Back
          </Link>
          <h2 className="section-title">{name}</h2>
          <div className="room">
            <img src={`http://localhost:4000/images/${image}`} alt={name}></img>
            <div className="room-info">
              <p>
                <span className="room-data">name :</span>
                {name}
              </p>
              <p>
                <span className="room-data">email :</span>
                {email}
              </p>
              <p>
                <span className="room-data">contact :</span>
                {contact}
              </p>
              <p>
                <span className="room-data">CNIC :</span>
                {cnic}
              </p>
              <p>
                <span className="room-data">salary :</span>
                {"Rs. " + salary + "/-"}
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

export default SingleEmployee;