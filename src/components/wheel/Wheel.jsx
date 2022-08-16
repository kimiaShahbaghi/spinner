import React, { useState } from "react";
import WheelContainer from "../../assests/images/Ellipse 987.svg";
import Pointer from "../../assests/images/Pointer.svg";
import {
  selectPlaySound,
  selectPrizes,
  selectRotate,
  selectSpinned,
} from "../../redux/wheelSlice";
import Blade from "./Blade/Blade";
import { useSelector } from "react-redux";
import Confetti from "react-confetti";

import "./Wheel.scss";

const Wheel = () => {
  const prizes = useSelector(selectPrizes);
  const rotate = useSelector(selectRotate);
  const spinned = useSelector(selectSpinned);

  const renderBlades = () => {
    return prizes.map((prize, i) => {
      const rotate = i * (360 / prizes.length);
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
      <Confetti
        run={spinned}
        numberOfPieces={100}
        recycle={false}
        tweenDuration={7000}
      />
      <img src={Pointer} id="pointer" />
      <div
        className="wheel__container"
        style={{
          transform: `rotate(${rotate}deg)`,
          transition: "all 6000ms ease-out",
        }}
      >
        <img src={WheelContainer} />
        <div className="wheel__blades">{wheelBlades}</div>
      </div>
    </div>
  );
};

export default Wheel;
