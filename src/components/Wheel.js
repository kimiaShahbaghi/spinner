import React from "react";
import "./Wheel.scss";

const Wheel = () => {
  const prises = ["1", "2", "3", "4", "5"];
  const spinning = ''
  return (
    <div className="container">
      <h3>title</h3>
      <div className={`wheel ${spinning}`}></div>
      <ul>
        {prises.map((prise) => {
          return <li> {prise}</li>;
        })}
      </ul>
    </div>
  );
};

export default Wheel;
