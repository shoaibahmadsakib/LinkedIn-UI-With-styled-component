import React from "react";
import { Avatar } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import "./FeedBar.css";
import PhotoIcon from "@material-ui/icons/Photo";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import EventIcon from "@material-ui/icons/Event";
import AssignmentIcon from "@material-ui/icons/Assignment";
import PostItem from "./PostItem";

const Feed = () => {
  return (
    <div className="layout-style1">
      <div className="feed-item-style">
        <div className="post-feed">
          <Avatar />
          
          <form>
            <input type="text" placeholder="start a post" />
          </form>
        </div>
        <div className="otherpost-feed">
          <IconButton aria-label="delete">
            <PhotoIcon fontSize="large" color="primary" />
            <span>photo</span>
          </IconButton>
          <IconButton aria-label="delete">
            <OndemandVideoIcon fontSize="large" color="danger" />
            <span>video</span>
          </IconButton>
          <IconButton aria-label="delete">
            <EventIcon fontSize="large" color="secondary" />
            <span>event</span>
          </IconButton>
          <IconButton aria-label="delete">
            <AssignmentIcon fontSize="large" color="secondary" />
            <span>write article</span>
          </IconButton>
        </div>
      </div>
      <div className="feed-item-style">
       <PostItem/>
      </div>
    </div>
  );
};

export default Feed;
