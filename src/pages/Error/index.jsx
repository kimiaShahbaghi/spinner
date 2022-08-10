import React from "react";
import Button from "../../components/button/Button";
import Content from "../../components/content/Content";
import "./index.scss";
import { ReactComponent as ErrorSvg } from "../../assests/images/NetworkError.svg";

const Index = () => {
  const errorTitle = "مشکلی در ارتباط رخ داده است!";
  const errorDescription = "لطفا دوباره تلاش کنید.";
  const buttonText = "تلاش مجدد";
  return (
    <>
      <ErrorSvg />
      <Content title={errorTitle} description={errorDescription} />
      <Button text={buttonText} />
    </>
  );
};

export default Index;
