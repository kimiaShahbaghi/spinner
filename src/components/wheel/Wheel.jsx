import React, { useState } from "react";
import WheelContainer from "../../assests/images/Ellipse 987.svg";
import Pointer from "../../assests/images/Pointer.svg";
import "./Wheel.scss";
import { campaign_wheels } from "../../redux/wheelSlice";
import Blade from "./Blade/Blade";
import { selectIsFinished } from "../../redux/wheelSlice";

import spin from "./spin";

const Wheel = () => {
  // let isFinished = useSelector(selectIsFinished);
  const [finished, setFinished] = useState(false);
  const [rotate, setRotate] = useState(0);
  const [selectedBlade, setSelectedBlade] = useState(undefined);

  const prizes = campaign_wheels;
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

   const spin = () => {
    if (!finished) {
      const randomRotate = 3000 + Math.floor(Math.random() * 5000);
      setRotate(randomRotate);
      console.log("rotate", randomRotate);
      const index = Math.floor(6 - (((randomRotate / 360) * 6) % 6));
      setSelectedBlade(index);
      console.log("index", index);
      setFinished(true);
    } else {
      console.log("you already spinned");
    }
  };;
 spin()
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
