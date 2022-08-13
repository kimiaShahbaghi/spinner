import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/button/Button";
import Wheel from "../../components/wheel/Wheel";
import Content from "../../components/content/Content";
import { getDataFetch } from "../../redux/actions";
import {
  selectTitle,
  selectDescription,
  selectValid,
} from "../../redux/wheelSlice";

const Index = () => {
  const dispatch = useDispatch();

  const title = useSelector(selectTitle);
  const description = useSelector(selectDescription);
  const valid = useSelector(selectValid);

  useEffect(() => {
    dispatch(getDataFetch());
  }, []);

  return (
    <>
      <Wheel />
      <Content title={title} description={description} />
      <Button />
    </>
  );
};

export default Index;
