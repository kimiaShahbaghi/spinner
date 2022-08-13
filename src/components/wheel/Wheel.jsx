import React, { useState } from "react";
import WheelContainer from "../../assests/images/Ellipse 987.svg";
import Pointer from "../../assests/images/Pointer.svg";
import { selectPrizes, selectRotate } from "../../redux/wheelSlice";
import Blade from "./Blade/Blade";
import { useSelector } from "react-redux";
import "./Wheel.scss";

const Wheel = () => {
  const prizes = useSelector(selectPrizes);
  const rotate = useSelector(selectRotate);

  const renderBlades = () => {
    return prizes.map((prize, i) => {
      const rotate = i * 60;
      return (
        <Blade
          id={prize.id}
          img={prize.image}
          title={prize.title}
          rotate={rotate}
          key={i}
        />
      );
    });
  };

  const wheelBlades = renderBlades();

  return (
    <div className="wheel">
      <img src={Pointer} id="pointer" />
      <div
        className="wheel__container"
        style={{
          transform: `rotate(${rotate}deg)`,
          transition: "all 3000ms ease-out",
        }}
      >
        <img src={WheelContainer} />
        <div className="wheel__blades">{wheelBlades}</div>
      </div>
    </div>
  );
};

export default Wheel;
