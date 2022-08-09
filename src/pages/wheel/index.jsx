import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/button/Button";
import Wheel from "../../components/wheel/Wheel";
import Content from "../../components/content/Content";
import { getDataFetch } from "../../redux/actions";
import {selectTitle, selectDescription} from '../../redux/wheelSlice'

import "./index.scss";

const Index = () => {
  const dispatch = useDispatch();

  const title = useSelector(selectTitle)
  const description = useSelector(selectDescription)

  useEffect(() => {
    dispatch(getDataFetch());
  });

  return (
    <div className="app">
      <Wheel />
      <Content title={title} description={description} />
      <Button />
    </div>
  );
};

export default Index;
