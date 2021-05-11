import React from "react";
import styled from "styled-components";

const ProfileStyled = styled.div`
  line-height: 26px;
  text-align: center;
  padding: 10px 0px;

  .describtion {
    font-weight: normal;
    font-size: small;
  }
  .otherInfo {
    padding: 0px 23px;
    text-align: justify;
    font-size: 14px;

    .span-color {
      color: blue;
      float: right;
    }
  }
`;

const ProfileMain = ({ name, describtion, profileView, postView }) => {
  return (
    <ProfileStyled>
      <h1 className="profileHeader">{name}</h1>
      <p className="describtion">{describtion}</p>
      <hr />
      <p className="otherInfo">
        {profileView}
        <span className="span-color">20</span>
        <br />
        {postView}
        <span className="span-color">10</span>
      </p>
    </ProfileStyled>
  );
};

export default ProfileMain;
