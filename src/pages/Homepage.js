import React, { Fragment } from "react";
import Feed from "./ThreeSidepage/Feed";
import Notification from "./ThreeSidepage/Notification";
import Profile from "./ThreeSidepage/Profile";

import Header from "./ThreeSidepage/Header";
import styled, { css } from "styled-components";

const SameContent = css`
  background-color: #ebeae8;
`;

const HomepageStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  ${SameContent}

  @media (min-width: 668px) {
    ${SameContent}
    display: grid;
    grid-template-columns: 0.5fr 1fr 0.7fr;
    padding: 90px 35px;
  }
`;

const Homepage = () => {
  return (
    <Fragment>
      <div className="header-style">
        <Header />
      </div>
      <HomepageStyled>
        <Profile />
        <Feed />
        <Notification />
      </HomepageStyled>
    </Fragment>
  );
};

export default Homepage;
