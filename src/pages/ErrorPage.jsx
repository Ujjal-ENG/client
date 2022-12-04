import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ErrorPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <iframe
          className="error-animation"
          src="https://embed.lottiefiles.com/animation/98642"
        ></iframe>
      </div>
      <h1>Ohh!! Page Not Found</h1>
      <p>We can not seem to find the page you are looking for</p>
      <button className="btn btn-primary">
        <Link to="/" className="linkbtn">Back TO Home</Link>
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    .error-animation {
      border: none;
      width: 800px;
      height: 500px;
    }
  }
  h1 {
    text-align: center;
    font-weight: 700;
    line-height: 19px;
  }
  p {
    line-height: 1px;
  }
  .btn{
    padding: 15px;
  }
  .linkbtn{
    color: white;
    font-weight: 700;
    font-size: 1rem;
    padding: 10px;
  }
`;
export default ErrorPage;
