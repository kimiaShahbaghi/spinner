import React, { useState } from "react";
import WheelContainer from "../../assests/images/Ellipse 987.svg";
import Pointer from "../../assests/images/Pointer.svg";
import "./Wheel.scss";
import { selectPrizes, selectRotate, setRotate } from "../../redux/wheelSlice";
import Blade from "./Blade/Blade";
import { useSelector, useDispatch } from "react-redux";
import prizes from "./spin";

const Wheel = () => {
  const dispatch = useDispatch();

  // const prizes = useSelector(selectPrizes);
  const rotate = useSelector(selectRotate);
  const [finished, setFinished] = useState(false);

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

  function rotateToSpin (prizeIndex)  {
    return dispatch(setRotate(400));
    //   const prizeIndex = useSelector(selectPrizeIndex);
  };

  const wheelBlades = renderBlades();

  return (
    <div className="wheel">
      <img src={Pointer} id="pointer" />
      <div
        className={finished ? "wheel__container spin" : "wheel__container"}
        style={{
          transform: `rotate(${rotate}deg)`,
          transition: 'all 2000ms ease-out'
        }}
      >
        <img src={WheelContainer} />
        <div className="wheel__blades">{wheelBlades}</div>
      </div>
    </div>
  );
};

export default Wheel;
