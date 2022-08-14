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
import Sound from "react-sound";

import spinSound from "../../assests/sound/spinning.mp3";

import "./Wheel.scss";

const Wheel = () => {
  const prizes = useSelector(selectPrizes);
  const rotate = useSelector(selectRotate);
  const spinned = useSelector(selectSpinned);
  const playSound = useSelector(selectPlaySound);

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
          transition: "all 3000ms ease-out",
        }}
      >
        <img src={WheelContainer} />
        <Sound url={spinSound} playStatus={playSound ? "PLAYING" : "STOPPED"} />
        <div className="wheel__blades">{wheelBlades}</div>
      </div>
    </div>
  );
};

export default Wheel;
