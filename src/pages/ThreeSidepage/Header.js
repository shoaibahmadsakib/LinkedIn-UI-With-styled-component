import React from "react";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";
import MessageIcon from "@material-ui/icons/Message";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import InputBase from "@material-ui/core/InputBase";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AppsIcon from "@material-ui/icons/Apps";
import styled, { css } from "styled-components";
import StickyHeader from "react-sticky-header";
import "react-sticky-header/styles.css";

const SameHeader = css`
  display: flex;
  justify-content: space-around;
  background-color: #fff;
`;

const HeaderPart = styled.div`
  ${SameHeader}
  height: 60px;
  
  .search-bar,
  .try-free,
  .app-icon,
  .message-icon {
    display: none !important;
  }
  @media (min-width: 668px) {
    ${SameHeader}
    padding-bottom: 0px;

    .app-icon,
    .try-free,
    .search-bar {
      display: block !important;
    }
    .second-part {
      display: flex;
      align-items: center;
    }
    .search-bar {
      background-color: aliceblue;
      border-radius: 10px;
    }
  }
`;

const useStyles = makeStyles((theme) => ({
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),

    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
const Header = () => {
  const classes = useStyles();
  return (
    <StickyHeader
      header={
        <HeaderPart>
          <div className="first-part">
            <IconButton aria-label="delete">
              <LinkedInIcon style={{ color: "blue", fontSize: "40px" }} />
            </IconButton>
            <IconButton aria-label="delete">
              <SearchIcon />
              <InputBase
                className="search-bar"
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </IconButton>
            <IconButton aria-label="delete">
              <HomeIcon />
            </IconButton>
            <IconButton aria-label="delete">
              <PeopleIcon />
            </IconButton>

            <IconButton aria-label="delete" className="message-icon">
              <MessageIcon />
            </IconButton>
            <IconButton aria-label="delete">
              <NotificationsActiveIcon />
            </IconButton>
            <IconButton aria-label="delete">
              <Avatar />
            </IconButton>
          </div>
          <div className="second-part">
            <IconButton aria-label="delete">
              <MoreVertIcon />
            </IconButton>
            <IconButton aria-label="delete" className="app-icon">
              <AppsIcon />
            </IconButton>
            <p className="try-free">try Premium free for 1 month</p>
          </div>
        </HeaderPart>
      }
    ></StickyHeader>
  );
};

export default Header;
