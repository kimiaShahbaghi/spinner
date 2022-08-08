import React from "react";
import WheelContainer from "../../assests/images/Ellipse 987.svg";
import Pointer from "../../assests/images/Pointer.svg";
import "./Wheel.scss";
import { campaign_wheels } from "../../redux/wheelSlice";
import Blade from "./Blade/Blade";

const Wheel = () => {
  const prizes = campaign_wheels;
  const renderBlades = () => {
    return prizes.map((prize,i) => {
      const rotate = (i * 60);
      return <Blade id={prize.id} img={prize.image} title={prize.title} rotate={rotate} />;
    });
  };

  const spin = () => {

  }
  const wheelBlades = renderBlades();

  return (
    <div className="wheel">
      <img src={Pointer} id="pointer" />
      <div className="wheel__container">
        <img src={WheelContainer} />
        <div className="wheel__blades">{wheelBlades}</div>
      </div>
    </div>
  );
};

export default Wheel;
