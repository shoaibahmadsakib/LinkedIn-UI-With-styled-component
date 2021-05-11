import React from "react";
import { Avatar } from "@material-ui/core";

import Button from '@material-ui/core/Button';
import PhotoIcon from "@material-ui/icons/Photo";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import EventIcon from "@material-ui/icons/Event";
import AssignmentIcon from "@material-ui/icons/Assignment";
import styled, { css } from "styled-components";
import PostItem from "./PostItem";

const PostFeed = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;

  form {
    display: flex;
    flex-grow: 1;
    padding-left: 10px;

    input {
      display: flex;
      width: -webkit-fill-available;
      border-radius: 10px;
      border: 1px solid;
    }
  }
`;
const OtherPostFeed = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
const IconButton1 = styled(Button)`
  font-weight: normal;
  font-size: small;
  span{
    font-weight: normal;
    font-size:12px;
  }
`;

const FeedItemStyle = styled.div`
  @media (min-width: 668px) {
    margin: 10px;
    background-color: #fff;
    border-radius: 5px;
    height: -moz-fit-content;
    height: fit-content;
  }

  
    margin: 10px;
    background-color: #fff;
    border-radius: 5px;
    height: -moz-fit-content;
    height: fit-content;
  
`;
const PostBackGround = styled.div`
  background: #fff;
  margin: 10px;
  border-radius: 8px;
`;

const Feed = () => {
  return (
    <div className="layout-style1">
      <FeedItemStyle>
        <PostFeed>
          <Avatar />
          <form>
            <input type="text" placeholder="start a post" />
          </form>
        </PostFeed>
        <OtherPostFeed>
          <IconButton1 aria-label="delete">
            <PhotoIcon fontSize="medium" color="primary" />
            <span>photo</span>
          </IconButton1>
          <IconButton1 aria-label="delete">
            <OndemandVideoIcon fontSize="medium" color="danger" />
            <span>video</span>
          </IconButton1>
          <IconButton1 aria-label="delete">
            <EventIcon fontSize="medium" color="secondary" />
            <span>event</span>
          </IconButton1>
          <IconButton1 aria-label="delete">
            <AssignmentIcon fontSize="medium" color="secondary" />
            <span>write article</span>
          </IconButton1>
        </OtherPostFeed>
      </FeedItemStyle>
      <PostBackGround>
        <PostItem />
      </PostBackGround>
    </div>
  );
};

export default Feed;
