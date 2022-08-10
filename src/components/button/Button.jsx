import React from "react";
import "./Button.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsFinished,
  selecButtonText,
  selectValid,
} from "../../redux/wheelSlice";
import { getDataFetch, spinWheel } from "../../redux/actions";

const Button = (props) => {
  const dispatch = useDispatch();
  // const isFinished = useSelector(selectIsFinished);
  const buttonText = useSelector(selecButtonText);
  const isValid = useSelector(selectValid);
  const text = props.text;

  const clickHandler = () => {
    if (isValid) {
      dispatch(spinWheel());
      console.log("clicked");
    }
  };
  return (
    <button className="button" onClick={() => dispatch(getDataFetch())}>
      {text ? text : buttonText}
    </button>
  );
};

export default Button;
