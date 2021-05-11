import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

import styled, { css } from "styled-components";

const SameLayout = css`
  background-color: #fff;
  height: fit-content;
  border-radius: 5px;
`;

const LayOutStyle = styled.div`
  @media (min-width: 668px) {
    margin: 10px;
    ${SameLayout}
  }
  .add-cart{
  padding: 10px;
}
  @media (max-width: 668px) {
    margin: 70px 10px;
    ${SameLayout}
  }
`;

const AddToFeed = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  .notifiaction-item {
    line-height: 20px;
    padding: 0px 40px 0 20px;
    display: flex;
    flex-direction: column;

    Button {
      width: fit-content;
    }
  }
`;

const Notification = (props) => {
  const [state, setState] = useState([
    {
      name: "sakib",
      para: "Lorem ipsum tis pariatur vero architecto fugiat porro iusto.",
      follow: "+Follow",
    },
    {
      name: "sakib",
      para: "Lorem ipsum tis pariatur vero architecto fugiat porro iusto.",
      follow: "+Follow",
    },
    {
      name: "hasan",
      para: "Lorem ipsum tis pariatur vero architecto fugiat porro iusto.",
      follow: "+Follow",
    },
  ]);

  return (
    <LayOutStyle>
      <h2 className="add-cart">Add to your feed</h2>
      {state.map((item) => (
        <AddToFeed>
          <Avatar style={{ height: "50px", width: "50px" }} />
          <div className="notifiaction-item">
            <h1>{item.name}</h1>
            <span>{item.para}</span>
            <Button variant="outlined">{item.follow}</Button>
          </div>
        </AddToFeed>
      ))}
    </LayOutStyle>
  );
};

export default Notification;
