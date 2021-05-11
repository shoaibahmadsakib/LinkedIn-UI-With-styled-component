import { Avatar } from "@material-ui/core";
import React from "react";
import ProfileData from "../../Components/Data/ProfileData";
import ProfileMain from "../../Components/MainProfile/ProfileMain";

import styled, { css } from "styled-components";

const SameLayout = css`
  background-color: #fff;
  border-radius: 5px;
  height: fit-content;
`;
const SameImage = css`
  background-image: url("https://napervillerecovery.files.wordpress.com/2019/05/sunset-dawn-nature.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: 0px;
  border-radius: 5px 5px 0 0;
  text-align: center;
`;
const SameAvater = css`
  display: flex;
  justify-content: center;
  position: relative;
  top: -32px;
`;

const LayOutStyle = styled.div`
  @media (min-width: 668px) {
    margin: 10px;
    ${SameLayout}

    .image {
      height: 80px;
      ${SameImage}
    }
    .avator {
      ${SameAvater}
    }
  }

  /* mobile */
  @media (max-width: 668px) {
    margin: 70px 10px;
    ${SameLayout}
    .image {
      ${SameImage}
      height: 100px;
    }
    .avator {
      ${SameAvater}
    }
  }
`;

const Profile = () => {
  return (
    <LayOutStyle>
      <div className="image"></div>
      <div className="avator">
        <Avatar style={{ height: "60px", width: "60px" }} />
      </div>
      <div className="profile-content">
        {ProfileData.map((sakibInfo) => (
          <ProfileMain
            name={sakibInfo.proName}
            describtion={sakibInfo.describtion}
            profileView={sakibInfo.view}
            postView={sakibInfo.views}
          />
        ))}
      </div>
    </LayOutStyle>
  );
};

export default Profile;
