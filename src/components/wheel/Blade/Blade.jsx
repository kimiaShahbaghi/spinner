import React from "react";
import './Blade.scss'
const Blade = (props) => {
  const style = { transform: `rotate(${props.rotate}deg)` };
  return (
    <div className="Blade" style={style}>
      <img src={props.img} />
    </div>
  );
};

export default Blade;
