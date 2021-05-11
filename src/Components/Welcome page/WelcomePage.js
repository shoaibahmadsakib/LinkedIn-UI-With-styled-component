import React, { Fragment } from "react";
import LinkedIn from "../../image/linkedin.png";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import styled from "styled-components";

const WelcomeHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 40px;
`;

const WelcomeText = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;

  h1 {
    display: flex;
    margin: 100px 0px 40px 0px;
    font-size: 36px;
    text-align: justify;
    padding: 0px 110px;
    font-weight: normal;
    color: #2977c9;
  }
  img {
    height: 200px;
    width: auto;
  }
  @media screen and (min-width: 600px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    h1 {
      margin: 0;
      padding: 50px 0px 0px 44px;
      width: 470px;
      font-size: 56px;
      color: #2977c9;
    }
    img {
      width: 400px;
      height: 450px;
    }
  }
`;
const Button1 = styled(Button)`
  border-radius: 10px !important;

  a {
    text-decoration: none;
    color: black;
  }
`;

const WelcomePage = () => {
  return (
    <Fragment>
      <WelcomeHeader>
        <div className="linkedin-logo">
          <img src={LinkedIn} alt="linkedin" height="35px" width="120px" />
        </div>
        <div className="signin-signup">
          <Button1>
            <Link to="/signup">join now</Link>
          </Button1>

          <Button1 variant="outlined" color="primary">
            <Link to="/signin">sign in</Link>
          </Button1>
        </div>
      </WelcomeHeader>
      <WelcomeText>
        <h1>Welcome to your professional community</h1>

        <img
          src="https://static-exp1.licdn.com/sc/h/d58zfe6h3ycgq5l1ccjpkrtdn"
          alt=""
        />
      </WelcomeText>
    </Fragment>
  );
};

export default WelcomePage;
