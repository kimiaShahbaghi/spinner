import React, { useState } from "react";
import "./Button.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  selecButtonText,
  selectSpinned,
  selectValid,
} from "../../redux/wheelSlice";
import { spinWheel } from "../../redux/actions";

const Button = (props) => {
  const dispatch = useDispatch();

  const buttonText = useSelector(selecButtonText);
  const isValid = useSelector(selectValid);
  const spinned = useSelector(selectSpinned);
  const [spin, setSpin] = useState(spinned);
  const text = props.text;

  const clickHandler = () => {
    if (isValid && !spin) {
      setSpin(true);
      dispatch(spinWheel());
    }
  };
  return (
    <button className="button" onClick={clickHandler}>
      {text ? text : buttonText}
    </button>
  );
};

export default Button;
