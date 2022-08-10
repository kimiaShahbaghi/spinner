import React, { useState } from "react";
import WheelContainer from "../../assests/images/Ellipse 987.svg";
import Pointer from "../../assests/images/Pointer.svg";
import "./Wheel.scss";
import { selectPrizes, selectRotate } from "../../redux/wheelSlice";
import Blade from "./Blade/Blade";
import { selectIsFinished } from "../../redux/wheelSlice";

import spin from "./spin";
import { useSelector } from "react-redux";

const Wheel = () => {
  const prizes = useSelector(selectPrizes);
  const rotate = useSelector(selectRotate);
  const [finished, setFinished] = useState(false);
  const [selectedBlade, setSelectedBlade] = useState(undefined);

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

  // const spin = () => {
  //   if (!finished) {
  //     const randomRotate = 400;
  //     setRotate(randomRotate);
  //     console.log("rotate", randomRotate);
  //     const index = Math.floor(6 - (((randomRotate / 360) * 6) % 6));
  //     setSelectedBlade(index);
  //     console.log("index", index);
  //     setFinished(true);
  //   } else {
  //   }
  // };
  // spin();
  
  const wheelBlades = renderBlades();

  return (
    <div className="wheel">
      <img src={Pointer} id="pointer" />
      <div
        className={finished ? "wheel__container spin" : "wheel__container"}
        style={{
          transform: `rotate(${rotate}deg)`,
        }}
      >
        <img src={WheelContainer} />
        <div className="wheel__blades">{wheelBlades}</div>
      </div>
    </div>
  );
};

export default Wheel;
