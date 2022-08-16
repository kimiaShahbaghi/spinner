import React, { useState, useCallback } from "react";
import "./Button.scss";
import { useDispatch, useSelector } from "react-redux";
import { debounce } from "lodash";
import {
  selecButtonText,
  selectError,
  selectSpinned,
  selectValid,
  setRotate,
} from "../../redux/wheelSlice";
import { getDataFetch, spinWheel } from "../../redux/actions";

const Button = (props) => {
  const dispatch = useDispatch();

  const buttonText = useSelector(selecButtonText);
  const isValid = useSelector(selectValid);
  const spinned = useSelector(selectSpinned);
  const networkError = useSelector(selectError);
  const [spin, setSpin] = useState(spinned);
  const text = props.text;

  const delayGetData = useCallback(
    debounce(() => dispatch(getDataFetch()), 2000)
  );
  const delaySpin = useCallback(debounce(() => dispatch(spinWheel()), 2000));

  const clickHandler = () => {
    if (isValid && !spin) {
      dispatch(setRotate(6));
      setSpin(true);
      dispatch(spinWheel());
    }
    if (networkError) {
      if (!isValid) {
        delayGetData();
      } else {
        delaySpin();
      }
    }
  };
  return (
    <button className="button" onClick={clickHandler}>
      {text ? text : buttonText}
    </button>
  );
};

export default Button;
