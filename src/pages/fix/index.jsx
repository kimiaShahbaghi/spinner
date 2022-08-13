import React from "react";
import { ReactComponent as FixSvg } from "../../assests/images/fix.svg";
import Content from "../../components/content/Content";
const Index = () => {
  const title = "کارشناسان ما در حال برطرف کردن مشکل هستند.";
  const description = "لطفا صبور باشید و دقایقی دیگر دوباره تلاش کنید.";
  return (
    <>
      <FixSvg />
      <Content title={title} description={description} />
    </>
  );
};

export default Index;
