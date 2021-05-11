import React, { Fragment } from "react";
import { Avatar } from "@material-ui/core";

import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ShareIcon from "@material-ui/icons/Share";
import SendIcon from "@material-ui/icons/Send";
import IconButton from "@material-ui/core/IconButton";
import styled, { css } from "styled-components";

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
const IconButton1 = styled(IconButton)`
  font-weight: normal;
  font-size: small;
`;
const PostBody = styled.div`
  padding: 10px;
  display: flex;
  justify-content: left;

  .name-para {
    padding-left: 10px;
  }
  p {
    font-size: small;
  }
  h2 {
    font-weight: bold;
  }
`;
const PostContent = styled.div`
  padding: 10px 0px;
      p{
        padding:10px;
      }
  @media (min-width: 668px) {
    .post-image {
      width: 100%;
    }
  }
  .post-image {
    width: 100%;
  }
  img {
    width: inherit;
    height: 287px;
  }
  .reaction{
    display: flex;
    justify-content: left;
    
}
`;



const PostItem = () => {
  return (
    <Fragment>
      <PostBody>
        <Avatar />
        <div className="name-para">
          <h2>sakib</h2>
          <p>hai i ama a digital maarketer</p>
          <span>10.2 pm</span>
        </div>
      </PostBody>
      <PostContent>
        <p className="post-paragraph">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. eligendi,
          ducimus, possimus quos id?
        </p>
        <div className="post-image">
          <img
            src="https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit.jpg"
            alt=""
          />
          <div className="reaction">
            <IconButton1 aria-label="delete">
              <ThumbUpAltIcon />
              <span>like</span>
            </IconButton1>
            <IconButton1 aria-label="delete">
              <ChatBubbleOutlineIcon />
              <span>comment</span>
            </IconButton1>
            <IconButton1 aria-label="delete">
              <ShareIcon />
              <span>share</span>
            </IconButton1>
            <IconButton1 aria-label="delete">
              <SendIcon />
              <span>send</span>
            </IconButton1>
          </div>
        </div>
        <PostFeed>
          <Avatar />
          <form>
            <input type="text" placeholder="comment here" />
          </form>
        </PostFeed>
      </PostContent>
    </Fragment>
  );
};

export default PostItem;
