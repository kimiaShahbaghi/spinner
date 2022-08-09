import React from "react";
import "./Content.scss";

const Content = (props) => {
  return (
    <div className="content">
      <h4>{props.title}</h4>
      <p>{props.description}</p>
    </div>
  );
};

export default Content;
