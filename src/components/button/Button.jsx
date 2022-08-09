import React from "react";
import "./Button.scss";
import { useSelector } from "react-redux";
import { selectIsFinished, selecButtonText } from "../../redux/wheelSlice";

const Button = (props) => {
  const isFinished = useSelector(selectIsFinished);
  const buttonText = useSelector(selecButtonText);
  const text = props.text;

  const clickHandler = () => {
    if (isFinished) {
      console.log("you already spinned");
    }
    console.log("clicked");
  };
  return (
    <button className="button" onClick={clickHandler}>
      {buttonText}
    </button>
  );
};

export default Button;
